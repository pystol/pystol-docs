---
layout: default
title: Home
nav_order: 1
description: "Pystol.org documentation"
permalink: /
---

![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/logo_readme.png)
{: .text-center }

**An open source, self-hosted, chaos engineering toolbox**
{: .text-center }

[![Docker build](https://github.com/pystol/pystol/workflows/docker-image-build/badge.svg)](https://github.com/pystol/pystol/actions?workflow=docker-image-build)
[![NodeJS build](https://github.com/pystol/pystol/workflows/nodejs-build/badge.svg)](https://github.com/pystol/pystol/actions?workflow=nodejs-build)
[![PyTest build](https://github.com/pystol/pystol/workflows/pytest-build/badge.svg)](https://github.com/pystol/pystol/actions?workflow=pytest-build)
[![Docs build](https://github.com/pystol/pystol-docs/workflows/jekyll-docs-build/badge.svg)](https://github.com/pystol/pystol-docs/actions?workflow=jekyll-docs-build)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
{: .text-center }

# Focus on writing good documentation
{: .fs-9 }

Just the Docs gives your documentation a jumpstart with a responsive Jekyll theme that is easily customizable and hosted on GitHub Pages.
{: .fs-6 .fw-300 }

[Get started now](#getting-started){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 } [View it on GitHub](https://github.com/pystol/pystol-docs){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Screenshots

![](https://raw.githubusercontent.com/pystol/pystol-docs/master/assets/images/dashboard.png)

## System requirements

* A K8S deployment as Minikube, Minishift, Kubernetes or OpenShift.

## Features

* Introduce random pods kill.

* Another.

* Run tests.

## Roadmap

See [milestones](https://github.com/pystol/pystol/milestones).

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

## Technologies

* [Kubernetes](https://www.kubernetes.io)
* [Python](https://www.python.org)
* [React](https://github.com/facebook/react)
* [Redux](https://github.com/reduxjs/redux)
* [React-Graph-Vis](https://github.com/crubier/react-graph-vis)
* [Jest](https://github.com/facebook/jest/)
* [k8s dashboard](https://github.com/spekt8/spekt8)

## Tests

This is explained here.

## Research

Research articles and conferences related to the Pystol project.

* [Reference 1](https://www.kubernetes.io)
* [Reference 2](https://www.kubernetes.io)
* [Reference 3](https://www.kubernetes.io)



## Getting started

### Dependencies

Just the Docs is built for [Jekyll](https://jekyllrb.com), a static site generator. View the
[quick start guide](https://jekyllrb.com/docs/) for more information. Just the Docs requires
no special plugins and can run on GitHub Pages' standard Jekyll compiler.
The [Jekyll SEO Tag plugin](https://github.com/jekyll/jekyll-seo-tag) is included by default
(no need to run any special installation) to inject SEO and open graph metadata on docs pages.
For information on how to configure SEO and open graph metadata visit the
[Jekyll SEO Tag usage guide](https://jekyll.github.io/jekyll-seo-tag/usage/).

### Quick start: Use as a GitHub Pages remote theme

1. Add Just the Docs to your Jekyll site's `_config.yml` as a [remote theme](https://blog.github.com/2017-11-29-use-any-theme-with-github-pages/)
```yaml
remote_theme: pmarsceill/just-the-docs
```
<small>You must have GitHub Pages enabled on your repo, one or more Markdown files, and a `_config.yml` file. [See an example repository](https://github.com/pmarsceill/jtd-remote)</small>

### Local installation: Use the gem-based theme

1. Install the Ruby Gem
```bash
$ gem install just-the-docs
```
```yaml
# .. or add it to your your Jekyll site’s Gemfile
gem "just-the-docs"
```
2. Add Just the Docs to your Jekyll site’s `_config.yml`
```yaml
theme: "just-the-docs"
```
3. _Optional:_ Initialize search data (creates `search-data.json`)
```bash
$ bundle exec just-the-docs rake search:init
```
3. Run you local Jekyll server
```bash
$ jekyll serve
```
```bash
# .. or if you're using a Gemfile (bundler)
$ bundle exec jekyll serve
```
4. Point your web browser to [http://localhost:4000](http://localhost:4000)

If you're hosting your site on GitHub Pages, [set up GitHub Pages and Jekyll locally](https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll) so that you can more easily work in your development environment.

### Configure Just the Docs

- [See configuration options]({{ site.baseurl }}{% link docs/configuration.md %})

---

### License

Pystol is distributed by an [Apache license](https://github.com/pystol/pystol/tree/master/LICENSE).

### Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change.

Bug reports and pull requests are welcome on any GitHub repository at https://github.com/pystol/.
This project is intended to be a safe, welcoming space for collaboration, and contributors are expected
to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

#### Thank you to the contributors of Pystol!

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"/></a>
  </li>
{% endfor %}
</ul>

### Code of Conduct

Just the Docs is committed to fostering a welcoming community.

[View our Code of Conduct](https://github.com/pystol/pystol-docs/tree/master/CODE_OF_CONDUCT.md) on our GitHub repository.
