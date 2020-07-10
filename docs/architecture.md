---
layout: default
title: Architecture
nav_order: 2
permalink: /docs/architecture
---

# Architecture
{: .no_toc }

Here we will describe the platform architecture.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Kubernetes operator

This section will describe the K8s operator architecture.

TODO: Add the diagrams and explanation after the article is published.

---

## Pystol components

TODO: Add the diagrams and explanation after the article is published.

### CLI
{: .no_toc }

Pystol has integrated a CLI allowing users not to use the Web interface to
execute the fault injection actions and fetch their results.

### UI
{: .no_toc }

Pystol has also a Web interface integrated in the operator deployment
this allows non experienced users to interact with the platform.

### Hosted service
{: .no_toc }

It is also provided a hosted service for those who will like to try the platform,
the requirement for this is to provide a valid Kubeconfig file.
This service is hosted at [try.pystol.org](https://try.pystol.org).

---

## Screenshots

### Cluster state pages

The following pages show the current state of the cluster in terms of resources and deployed applications.

#### Login interface
{: .no_toc }
![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/00_login.png)

#### Connect interface
{: .no_toc }
![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/01_connect.png)

#### Usage interface
{: .no_toc }
![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/02_usage.png)

#### Namespaces interface
{: .no_toc }
![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/03_namespaces.png)

#### Nodes interface
{: .no_toc }
![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/04_nodes.png)

#### Pods interface
{: .no_toc }
![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/05_pods.png)

####  Graph interface
{: .no_toc }
![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/06_graph.png)

### Pystol specific pages

The following pages show information about the specific Pystol options.

####  Executed interface
{: .no_toc }
![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/07_executed.png)

#### Available interface
{: .no_toc }
![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/08_available.png)

#### Run interface
{: .no_toc }
![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/09_run.png)

#### Manage interface
{: .no_toc }
![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/10_manage.png)

There is another page called F.A.Q. showing some frequently asked questions.

---

## Features

* Kill pods.

* Drain nodes.

* Pingtest.

TODO: Add explanation after the article is published.

---

## Technologies

* [Kubernetes](https://www.kubernetes.io)
* [Python](https://www.python.org)
* [Flask](https://flask.palletsprojects.com/en/1.1.x/)
