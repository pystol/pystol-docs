---
layout: default
title: Guestbook application
parent: Example architectures
nav_order: 1
permalink: /docs/example-architectures/guestbook
---

# Guestbook application
{: .no_toc }

This document will describe an example use-case to run Pystol against an Apache Spark cluster.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Context

This application is a simple, multi-tier web application
using Kubernetes. The application consists of the following components:

* A single-instance Redis master to store guestbook entries.
* Multiple replicated Redis instances to serve reads.
* Multiple web frontend instances.

---

## Deploying

```
#!/bin/bash

kubectl apply -f https://raw.githubusercontent.com/kubernetes/examples/master/guestbook-go/redis-master-controller.json
kubectl apply -f https://raw.githubusercontent.com/kubernetes/examples/master/guestbook-go/redis-master-service.json
kubectl apply -f https://raw.githubusercontent.com/kubernetes/examples/master/guestbook-go/redis-slave-controller.json
kubectl apply -f https://raw.githubusercontent.com/kubernetes/examples/master/guestbook-go/redis-slave-service.json
kubectl apply -f https://raw.githubusercontent.com/kubernetes/examples/master/guestbook-go/guestbook-controller.json
kubectl apply -f https://raw.githubusercontent.com/kubernetes/examples/master/guestbook-go/guestbook-service.json

kubectl get svc

echo "Use the following example, if the exit is like:"
echo "guestbook      LoadBalancer   172.30.1.79     a55a****8099.us-east-2.elb.amazonaws.com   3000:30330/TCP   13s"

echo "Then the URL is:"
echo "http://a55a****8099.us-east-2.elb.amazonaws.com:3000/"

echo "Using curl to push a message:"
echo "http://a55a****8099.us-east-2.elb.amazonaws.com:3000/rpush/guestbook/carlos"
```
