---
layout: default
title: Development guide
nav_order: 4
permalink: /docs/development-guide
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

## Install Helm

We need to install Helm in order to be able to
render the templates.

```
curl -L https://git.io/get_helm.sh | bash
helm init --client-only
```

---

## Creating a local registry for pushing dev images

Create a local registry listening in the 5000 port.
We have a template in the `development_environment`
folder for deploying this local registry automatically.

```
kubectl apply -f https://raw.githubusercontent.com/pystol/pystol/master/helm/templates/development_environment/kube-registry.yaml
```

Now, we need to forward the 5000 port.

```bash
kubectl port-forward --namespace kube-system \
$(kubectl get po -n kube-system | grep kube-registry-v0 | \awk '{print $1;}') 5000:5000
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
`https://github.com/pystol/pystol/blob/master/helm/templates/operator.yaml#L17..L19`

```bash
containers:
- name: pystol-ui
  image: {{ .Values.appSettings.pystol.ui.image }}
```

and `https://github.com/pystol/pystol/blob/master/helm/templates/operator.yaml#L49..51`

```bash
containers:
- name: pystol-controller
  image: {{ .Values.appSettings.pystol.controller.image }}
```

the operator is configured to fetch the image configured in the values.yaml file
after rendering the template using `helm template`.

Now, we need to make our deployment to fetch the image with the local
changes, so we can see the updates in the MiniKube node.

List and identify your recently created container image

```bash
docker image ls
# REPOSITORY                                     TAG                 IMAGE ID            CREATED             SIZE
# localhost:5000/operator                        latest              077aee7a9a1e        8 seconds ago       1.28GB
```

Let's update the content of the file
`https://github.com/pystol/pystol/blob/master/helm/templates/operator.yaml`.

We will do this by using helm template to replace the values with a custom one.

```bash
kubectl apply -f ./helm/templates/rbac.yaml

# Now we need to deploy the operator using the image we created in the previous steps
# If you run operator.yaml without updating the image location, you will deploy
# whatever is in latest and you will not be able to see your changes.

helm template \
  --set appSettings.pystol.controller.image=localhost:5000/operator:latest \
  --set appSettings.pystol.ui.image=localhost:5000/operator:latest \
  --set appSettings.pystol.ui.api_host='labserver' \
  --set appSettings.pystol.ui.api_port=3000 \
  ./helm/ \
  -f helm/templates/values.yaml \
  -x templates/operator.yaml \
  | kubectl apply -f -

kubectl apply -f ./helm/templates/crd.yaml
```

The execution of the previous commands should not return any error.

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


## Local development of the Web UI

There is a basic set of mocked data to launch the Web UI
directly from a local environment.
To be able to see it, we will need to launch the webpack
dev server which by default will launch the mocked data.

This is particularly useful to decouple the Kubernetes
platform from the web development
and allow a simpler workflow for pushing improvements
and fixed to the web UI.

Make sure you have installed NodeJS:

```
curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
sudo yum install nodejs -y
node --version
```

Run the following commands to start a server with the web UI:

```bash
git clone git@github.com:pystol/pystol.git
cd pystol/pystol-ui/
npm install react-scripts
npm install # Install the main dependencies, like the express for the custom API endpoints
npm install pystol-wui # Install the web UI dependencies.
npm run-script build # We build the Web UI.
```

If you are executing minikube and you want to develop the UI using the
APIs data from the K8s deployment, just execute.

```bash
npm start
```

If you want to use the mocked data **No need for minikube at all** then execute:

```bash
npm run-script dev # Start the web server passing some env variable, to start the mock data.
```

The webpack command should point to the URL to see the Web UI,
by default in the port 3001.
The API endpoints

## Local development of the CLI and the Python operator

To do so, you will need a fully functional Kubernetes deployment.
This is because both the operator watching for CRs and the
CLI needs to connect to the K8s master node to work.

Assuming you have a Minikube environment working, i.e. following the
[Kubernetes install guide](https://www.pystol.org/docs/installing/kubernetes#installing-minikube-in-centos)
available in the docs, install the Pystol operator in the host machine having
access to the kubectl.

This is possible because we already have a privileged service account,
we have list permissions on pods in any namespace
and the token that is used for authenticating to the API server
is available by default with the Minikube install.

We need Python3 and Python3-pip to continue.

Assuming you have them already execute:

```bash
git clone git@github.com:pystol/pystol.git
cd pystol/pystol-ui/
sudo pip3 install -r ./pystol-operator/requirements.txt
sudo pip3 install --upgrade ./pystol-operator
```

If you followed the Minikube install from Pystol docs
you will find that the **/home/toor/.kube/config** is
present.
There it is all the information related to make the bindings
between the Pystol CLI and the Minikube deployment.

Note: When Pystol run from a container the
**load_incluster_config** method will automatically load
the cluster config.

Now we need to be sure we can load the cluster configuration

```bash
kubectl config get-contexts
# kubectl config use-context minikube
```

Run the following command to export the path for
the config file:

```bash
export KUBECONFIG=/home/toor/.kube/config
```

Now, you should be able to run the
Pystol CLI like:

```bash
pystol -v # Prints the version
pystol -b # Prints the banner
pystol -h # Prints the help menu
```

Each time you make changes you will
need to reinstall the Python client.

## Local development of the Ansible collection with the Pystol actions

...CoMiNg SoOn...
