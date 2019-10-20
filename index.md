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

A brief introduction about what Pystol is.

---

## Repositories

* Pystol [operator source code](https://github.com/pystol/pystol)
* Pystol [example templates](https://github.com/pystol/pystol-templates)
* Pystol [official documentation](https://github.com/pystol/pystol-docs)
* Pystol [landing page](https://github.com/pystol/pystol.github.io)

## License

Pystol is distributed by an [Apache license](https://github.com/pystol/pystol/tree/master/LICENSE).

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
