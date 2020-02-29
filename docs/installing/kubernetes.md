---
layout: default
title: Kubernetes
parent: Installing
nav_order: 1
permalink: /docs/installing/kubernetes
---

# Installing Kubernetes
{: .no_toc }

This guide uses MiniKube/MiniShift to demonstrate deployment and operation of Pystol
in a single-node Kubernetes cluster.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}


## Pre-requirements

The MiniKube/MiniShift VM requires approximately 4GB
of RAM and supports hypervisors like
VirtualBox/HyperV/KVM
that run on Linux, macOS, and Windows.

---

## Installing Minikube in CentOS 8

The following steps need to run in the Hypervisor machine
in which you will like to have your Minikube deployment.

### Prepare the hypervisor node

Now, let's install some dependencies.
Same Hypervisor node, same `root` user.

```bash
# In this dev. env. /var is only 50GB, so I will create
# a sym link to another location with more capacity.
sudo mkdir -p /home/libvirt/
sudo ln -sf /home/libvirt/ /var/lib/libvirt

sudo mkdir -p /home/docker/
sudo ln -sf /home/docker/ /var/lib/docker

# Install some packages
sudo yum install dnf -y
sudo dnf update -y
sudo dnf groupinstall "Virtualization Host" -y
sudo dnf install libvirt qemu-kvm virt-install virt-top libguestfs-tools bridge-utils -y
sudo dnf install git lvm2 lvm2-devel -y
sudo dnf install python3-libvirt python-lxml libvirt curl -y
sudo dnf install binutils qt gcc make patch libgomp -y
sudo dnf install glibc-headers glibc-devel kernel-headers -y
sudo dnf install kernel-devel dkms bash-completion -y
sudo dnf install nano wget -y
sudo dnf install python3-pip -y
```

### Check that the kernel modules are OK.

```bash
# Check the kernel modules are OK
sudo lsmod | grep kvm
```

### Enable libvirtd, disable SElinux xD and firewalld.

```bash
# Enable libvirtd
sudo systemctl start libvirtd
sudo systemctl enable libvirtd

# Disable selinux & stop firewall as needed.
setenforce 0
perl -pi -e 's/SELINUX\=enforcing/SELINUX\=disabled/g' /etc/selinux/config
systemctl stop firewalld
systemctl disable firewalld
```

### Install Minikube.

```bash
#Install minikube
/usr/bin/curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube
cp -p minikube /usr/local/bin && rm -f minikube

# Create the repo for kubernetes
cat << EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://packages.cloud.google.com/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
EOF

# Install kubectl
sudo dnf install kubectl -y
source <(kubectl completion bash)
echo "source <(kubectl completion bash)" >> ~/.bashrc
```

### Create the toor user (from the Hypervisor node, as root).

```bash
sudo useradd toor
echo "toor:toor" | sudo chpasswd
echo "toor ALL=(root) NOPASSWD:ALL" \
  | sudo tee /etc/sudoers.d/toor
sudo chmod 0440 /etc/sudoers.d/toor
sudo su - toor

cd
mkdir .ssh
ssh-keygen -t rsa -N "" -f .ssh/id_rsa
```

Now, follow as the `toor` user and prepare the Hypervisor node
for Minikube.

### Install Docker.

**Note:** There is no Docker in Centos 8
we will use Podman.

```bash
sudo dnf install podman podman-docker -y
```

### Finish the Minikube configuration.

```bash
# Add to bashrc in toor user
source <(kubectl completion bash)
echo "source <(kubectl completion bash)" >> ~/.bashrc

# We add toor to the libvirtd group
sudo usermod --append --groups libvirt toor
```

### Start Minikube.

```bash
minikube start --disk-size=300GB --memory=65536 --cpus=4 --vm-driver kvm2
export no_proxy=$no_proxy,$(minikube ip)
nohup kubectl proxy --address='0.0.0.0' --port=8001 --disable-filter=true &
sleep 30
minikube addons enable dashboard
nohup minikube dashboard --url &
minikube addons open dashboard
```

The Minikube instance should be reachable from the following URL:

http://machine_ip:8001/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/

```bash
# To stop/delete
kubectl delete deploy,svc --all
minikube stop
minikube delete
```

---

## Minikube cheat sheet.

```bash
# set & get current context of cluster
 kubectl config use-context minikube
 kubectl config current-context

# fetch all the kubernetes objects for a namespace
 kubectl get all -n kube-system

# display cluster details
 kubectl cluster-info

# set custom memory and cpu
 minikube config set memory 4096
 minikube config set cpus 2

# fetch cluster ip
 minikube ip

# ssh to the minikube vm
 minikube ssh

# display addons list and status
 minikube addons list

# exposes service to vm & retrieves url
 minikube service elasticsearch
 minikube service elasticsearch --url
```

---

## Result

In any case you should have your containers platform deployed
successfully and ready to start your development and tests.

![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/installing_minikube.PNG)
