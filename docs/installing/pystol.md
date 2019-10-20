---
layout: default
title: Pystol
parent: Installing
nav_order: 2
permalink: /installing/pystol
---

# Installing Pystol
{: .no_toc }

How to install Pystol.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Pre-requirements

Here we describe the section.

---

## Installing

Here we describe the section.

---

## Deploying the service

Here we describe the section.

---

## Testing the deployment

Here we describe the section.

---

## Useful commands

* To push and update docker hub:

```bash
docker login --username=<user>
docker build -t pystol/operator .
docker push pystol/operator
```

* Deploy the operator and permissions:

```bash
kubectl apply -f templates/crd.yaml
kubectl apply -f templates/rbac.yaml
kubectl apply -f templates/operator.yaml
```

* To forward the 3000 port to see the web UI:

```bash
nohup kubectl port-forward --address 0.0.0.0 `kubectl get pods | grep pystol-ui | head -n1 | cut -d' ' -f1` 3000:3000 &
```

* Local testing the docker containers, they shoud run together in the same pod:

```bash
docker run -ti pystol/operator npm run server
docker run -ti pystol/operator pystol
```

* To execute the pystol CLI from the pods:

```bash
kubectl exec -it `kubectl get pods | grep pystol-ui | head -n1 | cut -d' ' -f1` /bin/bash
```
