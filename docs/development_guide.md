---
layout: default
title: Development guide
nav_order: 4
permalink: /development-guide
---

# Development guide
{: .no_toc }

This section will guide you about how to set up your
development environment and be able to push changes
to the operator.
The main Pystol operator code is hosted in
[GitHub at pystol/pystol](https://github.com/pystol/pystol)

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Start MiniKube

The first step is to have the Minikube/MiniShift platform up
and running.

```
minikube stop
minikube delete
minikube start
```

---

## Creating a local registry for pushing dev images

Create a local registry listening in the 5000 port.
We have a template in the `development_environment`
folder for deploying this local registry automatically.

```
kubectl apply -f https://raw.githubusercontent.com/pystol/pystol/master/templates/development_environment/kube-registry.yaml
```

Now, we need to forward the 5000 port.

**Linux**

```bash
kubectl port-forward --namespace kube-system \
$(kubectl get po -n kube-system | grep kube-registry-v0 | \awk '{print $1;}') 5000:5000
```

**Windows**

```bash
kubectl port-forward --namespace kube-system ((kubectl get po -n kube-system | Select-String 'kube-registry-v0').ToString().Split(' ')[0]) 5000:5000
```

---

## Testing changes into the Kubernetes platform

Once we have the local registry working, we will make a change in the repository,
create the image, push it, and deploy it to MiniKube/MiniShift.

Clone the main Repository.

```
git clone git@github.com:pystol/pystol.git
cd pystol
```

Now let's make a simple change in the web UI and
test we can actually redeploy those changes into our MiniKube platform.

Let's edit the file `pystol-ui/src/client/app.js` and replace the string
with the dashboard title.

Replace:

```
<div id="kubernetestitle">The cloud chaos engineering toolbox</div>
```

With:

```
<div id="kubernetestitle">The cloud chaos engineering toolbox (testing changes)</div>
```

Now, the next step is to build a new container image to see our changes refreshed.

---

## Building and pushing the container image

Run `minikube docker-env` to show your local Docker environment variables.

**Windows**

The next steps assume you have the system installed correctly.

```bash
docker-machine create --virtualbox-disk-size "2000" --driver virtualbox devenv
```

Now, we can list the VMs created.

```bash
docker-machine ls
# NAME      ACTIVE   DRIVER       STATE     URL                         SWARM   DOCKER     ERRORS
# devenv    -        virtualbox   Running   tcp://192.168.99.102:2376           v19.03.4   
```

Let's link the docker-machine VM with our terminal.

```bash
docker-machine env --shell powershell devenv | iex
& minikube docker-env | Invoke-Expression
```

Now you should be able to have the docker CLI available.

From the root of the Pystol repository execute:

```bash
# Build the image
docker build -t localhost:5000/operator .

# Push the changes to the local registry with the 5000 port
docker push localhost:5000/operator
```

**Linux**

From the root of the Pystol repository execute:

```bash
# Build the image
docker build -t localhost:5000/operator .

# Push the changes to the local registry with the 5000 port
docker push localhost:5000/operator
```

---

## Deploy Pystol from the local registry

If you noticed, inside the template for the operator deployment
`https://github.com/pystol/pystol/blob/master/templates/operator.yaml#L17..L19`

```
containers:
- name: pystol-ui
  image: pystol/operator:latest
```

and `https://github.com/pystol/pystol/blob/master/templates/operator.yaml#L49..51`

```
containers:
- name: pystol-controller
  image: pystol/operator:latest
```

the operator is configured to fetch the image `pystol/operator:latest` automatically
using `imagePullPolicy: Always` for both pods by default from
[DockerHub](https://cloud.docker.com/u/pystol/repository/docker/pystol/operator).

Now, we need to make our deployment to fetch the image with the local
changes, so we can see the updates in the MiniKube node.

List and identify your recently created container image

```bash
docker image ls
# REPOSITORY                                     TAG                 IMAGE ID            CREATED             SIZE
# localhost:5000/operator                        latest              077aee7a9a1e        8 seconds ago       1.28GB
```

Let's update the content of the file
`https://github.com/pystol/pystol/blob/master/templates/operator.yaml`
locally and replace `image: pystol/operator:latest` with,
`image: localhost:5000/operator:latest`.

This is already done to speedup the creation of
development environments in the
[GitHub repository](https://github.com/pystol/pystol/blob/master/templates/development_environment/operator.yaml) file, so,
update/deploy the Pystol operator directly by running:

```bash
kubectl apply -f https://raw.githubusercontent.com/pystol/pystol/master/templates/rbac.yaml
kubectl apply -f https://raw.githubusercontent.com/ccamacho/pystol/master/templates/development_environment/operator.yaml
kubectl apply -f https://raw.githubusercontent.com/pystol/pystol/master/templates/crd.yaml
```

The execution of the previous 3 commands should not return any error.

---

## Finish and check results

Now, if you deployed/updated the Pystol operator correctly,
the containers images should be fetched from
the local registry.

![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/installing_development_environment_pystol_dashboard.PNG)

### Considerations

* The forward rules work specifically for the pod we selected, if you kill the pods
and create new ones, you will need to recreate the forwarding rules.
* If you updated a previously created deployment, you will need to kill the current pods, so
the controller can recreate them.

## Repository structure

This is the current repository structure:

```
.
├── Dockerfile
├── LICENSE
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
    ├── development_environment
    │   ├── kube-registry.yaml
    │   └── operator.yaml
    ├── operator.yaml
    └── rbac.yaml
```
