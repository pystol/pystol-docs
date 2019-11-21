---
layout: default
title: Home
nav_order: 1
description: "Pystol.org documentation"
permalink: /docs
---

## Repositories

* Pystol [operator source code](https://github.com/pystol/pystol)
* Pystol [official documentation](https://github.com/pystol/pystol-docs)
* Pystol [CI dashboard](https://github.com/pystol/badgeboard)

## CI dashboard

Our continuous integration dashboard (a.k.a badgeboard) is an information radiator
that provides a summary of each job operational health.

We collect the result data from several projects badges and render them in a HTML
board. You can see the current status of the builds in the
[project's main site](http://badgeboard.pystol.org/).

Also you can view the source code in [GitHub](https://github.com/pystol/badgeboard).

## Container images

All pystol official container images are hosted in Quay.io under
the [Pystol organization](https://quay.io/organization/pystol).

There you will find two repositories:

* The Pystol [staging repository](https://quay.io/repository/pystol/pystol-operator-staging).
Here you will find all the container images from the upstream end-to-end jobs from the GitHub
Actions jobs.

* The Pystol [stable repository](https://quay.io/repository/pystol/pystol-operator-stable).
Here you will find all the container images from the stable branches.

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change.

Bug reports and pull requests are welcome on any repository from the [Pystol
organization](https://github.com/pystol/).

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

## Code of Conduct

Pystol is committed to fostering a welcoming community.

[View our Code of Conduct](https://github.com/pystol/pystol-docs/tree/master/CODE_OF_CONDUCT.md) on our GitHub repository.

## About how we render the documentation

The official Pystol docs are rendered using this [template](https://github.com/pmarsceill/just-the-docs).
