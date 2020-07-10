---
layout: default
title: Pystol
parent: Installing
nav_order: 2
permalink: /docs/installing/pystol
---

# Installing Pystol
{: .no_toc }

This guide describes how
to install Pystol.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Pre-requirements

The only requirement Pystol has, is to have a
fully working Kubernetes based platform deployed
correctly.

---

## Installing

Assuming the user needs to deploy
the latest version available in master.
We will call the templates directly from the GitHub
repository.

Clone the main Repository.

```bash
git clone git@github.com:pystol/pystol.git
cd pystol
```

---

## Deploying Pystol

We will fetch and apply directly the templates from GitHub.
The next step is to connect to the terminal where you have access
to your containers platform deployed, and execute from the
root of the repository.

```bash
kubectl apply -f ./pystol-operator/pystol/templates/rbac.yaml

j2 ./pystol-operator/pystol/templates/operator.yaml.j2 \
   ./pystol-operator/pystol/templates/upstream_values.yaml \
   | kubectl apply -f -

kubectl apply -f ./pystol-operator/pystol/templates/crd.yaml
```

All the previous commands should end correctly and without any errors.
They will basically apply all the templates required to be able to deploy Pystol into your
containers platform.

Note that we are using directly the templates from GitHub, so, if you require to update or change
any parameter in the templates, you will need to change the file accordingly.

---

## Testing the deployment

**NOTE: Pystol is under development, make sure
your development machine points the following host `labserver` as
the place you have your MiniKube/MiniShift deployed**

For example: If you have it locally, point the hostname `labserver` to `127.0.0.1` if
it's another host, change the IP accordingly. By default should be called localhost

```
echo '127.0.0.1 labserver' | sudo tee -a /etc/hosts
```

By default you should be able to see the application deployed in MiniKube/MiniShift correctly.

![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/installing_minikube_dashboard.PNG)

To access the web interface available in the 3000 port of the pystol-ui pod, execute:

```bash
kubectl get pods
```

Grab the ID of the **pystol-ui** pod, for example: pystol-ui-799c8987cd-hs42p.

Then use it to create a port-forward rule.

```bash
# Replace pystol-ui-799c8987cd-hs42p with the ID of the pystol-ui pod.
kubectl port-forward -n pystol --address 0.0.0.0 pystol-ui-799c8987cd-hs42p 3000:3000
```

This will forward the 3000 port from the pod to the machine having access to the kubectl CLI. After running this
command you should be able to get access to the following screen located at `http://labserver:3000`

![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/02_usage.png)

### Shortcuts

It might be faster if you just parse the output of the get pods output and insert it directly in the port-forward command.

```bash
kubectl port-forward -n pystol --address 0.0.0.0 `kubectl get pods -n pystol | grep pystol-ui | grep Running | head -n1 | cut -d' ' -f1` 3000:3000
```

---

## Useful commands

* Local testing the docker containers:

```bash
docker run -ti pystol/operator npm run server
docker run -ti pystol/operator pystol
```

* To get access to the pods and execute the Pystol CLI:

```bash
kubectl exec -it `kubectl get pods | grep pystol-controller | grep Running | head -n1 | cut -d' ' -f1` /bin/bash
```

* To push and update docker hub:

From the path in which is located the [Dockerfile file](https://github.com/pystol/pystol/blob/master/Dockerfile).

```bash
docker login --username=<user>
# Enter your password
docker build -t pystol/operator .
docker push pystol/operator
```

If you have the permissions you should be able to push a new container image to [DockerHub](https://cloud.docker.com/u/pystol/repository/docker/pystol/operator).
