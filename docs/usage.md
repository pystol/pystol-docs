---
layout: default
title: Usage
nav_order: 5
permalink: /docs/usage
---

# Usage
{: .no_toc }

Usage of Pystol based in the two interfaces we have.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## UI
{: .d-inline-block }

New
{: .label .label-green }

The easiest way to explore the Web interface is to connect to the [hosted service](https://try.pystol.org)

---

## CLI
{: .d-inline-block }

New
{: .label .label-green }

```
$ pystol -h
usage: pystol [-h] [-v] [-b] {purge,run,listen,list,get,show,deploy} ...

Pystol - CLI

optional arguments:
  -h, --help            show this help message and exit
  -v, --version         show program's version number and exit
  -b, --banner          Print Pystol.org banner

Pystol subcommands:
  {purge,run,listen,list,get,show,deploy}
                        These are the options supported: The listen option
                        will watch for CRD events. The run option will execute
                        the Pystol actions against the cluster.
    purge               Purge any Pystol deployed resource.
    run                 CLI options to run the Pystol actions.
    listen              CLI options to watch for CRs
    list                CLI options to list CRs
    get                 Get Pystol resource.
    show                Get available Pystol actions.
    deploy              Install the Pystol operator includes, deployment, RBAC
                        rules, and CRD
```
