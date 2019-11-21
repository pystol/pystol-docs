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

## Installing Minikube on Windows with VirtualBox

Here we have simple Powershell script to have installed
MiniKube on a Windows/VirtualBox machine.

**For the Windows installation use the
Windows PowerShell Integrated Scripting Environment (ISE)**
This is a  is a GUI-based application to assist with writing
and debugging PowerShell scripts. System administrators,
developers and other IT professionals can use PowerShell ISE
to run commands from the application instead of the PowerShell console.

```powershell
<#  
.SYNOPSIS  
    Install MiniKube in Windows with VirtualBox

Set-ExecutionPolicy Unrestricted

Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

# Install Git
choco install git.install --params "/GitAndUnixToolsOnPath /NoAutoCrlf" -y

# Install VirtualBox
choco install virtualbox -y

# Install MiniKube
choco install minikube -y

# Install helm
choco install kubernetes-helm -y

# Install the Kubernetes client
choco install kubernetes-cli -y

# Install Docker
choco install docker-cli -y

# Install Docker machine
choco install docker-machine -y

# Configure MiniKube to use VirtualBox
minikube config set vm-driver virtualbox
minikube config set memory 2048
minikube config set disk-size 10000MB

# Start MiniKube
minikube start
minikube addons enable dashboard
minikube status

# To start the dashboard run
# minikube dashboard
```

---

## Installing Minikube on CentOS 7 with KVM

Please refer to [this blog post](https://www.anstack.com/blog/2019/10/13/oil-painting-and-installing-minikube-in-centos-7.html) for further details.

---

## Result

You should have your containers platform deployed successfully and ready to start your development and tests.

![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/installing_minikube.PNG)
