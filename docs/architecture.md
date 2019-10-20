---
layout: default
title: Architecture
nav_order: 2
permalink: /architecture
---

# Architecture
{: .no_toc }

Here we will describe the framework architecture.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Kubernetes operator

This section will describe the K8s operator architecture.
The main repository structure is described (see [Repository structure](#repository-structure)).

---

## Pystol components

Components description here.

### CLI
{: .no_toc }

CLI description here.

### UI
{: .no_toc }

UI description here.

---

## Repository structure

This is the current repository structure:

```
.
├── Dockerfile
├── LICENSE
├── nohup.out
├── pystol-operator
│   ├── pystol
│   │   ├── cli.py
│   │   ├── const.py
│   │   ├── __init__.py
│   │   ├── load_crd.py
│   │   └── operator.py
│   ├── requirements.txt
│   ├── setup.py
│   └── tests
│       └── test_sample.py
├── pystol-ui
│   ├── package.json
│   ├── src
│   │   ├── assets
│   │   │   └── images
│   │   │       ├── GitHub-Mark-120px-plus.png
│   │   │       └── icon-basic-set_59-cube-512.png
│   │   ├── client
│   │   │   ├── actions
│   │   │   │   └── graphing.js
│   │   │   ├── app.js
│   │   │   ├── components
│   │   │   │   ├── directions.js
│   │   │   │   ├── leftPanel.js
│   │   │   │   ├── legend.js
│   │   │   │   ├── monitoring.js
│   │   │   │   └── table.js
│   │   │   ├── images
│   │   │   │   ├── favicon.ico
│   │   │   │   ├── _ionicons_svg_logo-codepen2.svg
│   │   │   │   ├── _ionicons_svg_logo-codepen.svg
│   │   │   │   ├── _ionicons_svg_md-aperture2.svg
│   │   │   │   ├── _ionicons_svg_md-aperture.svg
│   │   │   │   ├── _ionicons_svg_md-crop2.svg
│   │   │   │   ├── _ionicons_svg_md-wifi2.svg
│   │   │   │   ├── _ionicons_svg_md-wifi.svg
│   │   │   │   ├── k8slogo.png
│   │   │   │   └── pystol-logo.png
│   │   │   ├── reducers
│   │   │   │   ├── graphing.js
│   │   │   │   └── store.js
│   │   │   ├── styles
│   │   │   │   ├── drawerStyles.js
│   │   │   │   └── styles.scss
│   │   │   ├── supplement
│   │   │   │   ├── fetch.js
│   │   │   │   └── graphOptions.js
│   │   │   └── testing
│   │   │       ├── app.test.js
│   │   │       ├── enzyme.js
│   │   │       └── __snapshots__
│   │   │           └── app.test.js.snap
│   │   ├── index.html
│   │   ├── index.js
│   │   └── server
│   │       ├── express-app.js
│   │       ├── server.js
│   │       └── testing
│   │           └── server.test.js
│   └── webpack.config.js
├── README.md
└── templates
    ├── crd.yaml
    ├── operator.yaml
    └── rbac.yaml

```

---

## Screenshots

![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/dashboard.png)

---

## Features

* Introduce random pods kill.

* Another.

* Run tests.

---

## Roadmap

See [milestones](https://github.com/pystol/pystol/milestones).

---

## Technologies

* [Kubernetes](https://www.kubernetes.io)
* [Python](https://www.python.org)
* [React](https://github.com/facebook/react)
* [Redux](https://github.com/reduxjs/redux)
* [React-Graph-Vis](https://github.com/crubier/react-graph-vis)
* [Jest](https://github.com/facebook/jest/)
* [k8s dashboard](https://github.com/spekt8/spekt8)
