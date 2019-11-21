---
layout: default
title: Contributing
nav_order: 8
permalink: /docs/contributing
---

# Contributing to Pystol
{: .no_toc }

First off, thanks for taking the time to contribute!

The following is a set of guidelines for contributing to Pystol and its repositories,
which are hosted in the [Pystol Organization](https://github.com/pystol) on GitHub.
These are mostly guidelines, not rules. Use your best judgment, and feel free to
propose changes to this document in a pull request.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Code of Conduct

This project and everyone participating in it is governed by the
[Pystol Code of Conduct](CODE_OF_CONDUCT.md). By participating,
you are expected to uphold this code. Please report unacceptable
behavior to [hi@pystol.org](mailto:hi@pystol.org).

## I don't want to read this whole thing I just have a question!!!

We have an official IRC channel in freenode #pystol (irc.freenode.net).

## What should I know before I get started?

### Design Decisions

When we make a significant decision in how we maintain the project
and what we can or cannot support, we will document it in the
[pystol/pystol-decisions repository](https://github.com/pystol/pystol-decisions).

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a
bug report for Pystol.
Following these guidelines helps maintainers and the community understand
your report :pencil:, reproduce the behavior :computer: :computer:, and find
related reports :mag_right:.

When you are creating a bug
report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report).
Fill out [the required template](https://github.com/pystol/.github/blob/master/.github/ISSUE_TEMPLATE/bug_report.md),
the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same
thing that you're experiencing, open a new issue and include a link to the original
issue in the body of your new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/).
Create an issue the repository and provide the following information by filling
in [the template](https://github.com/pystol/.github/blob/master/.github/ISSUE_TEMPLATE/bug_report.md).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by
explaining how you started pystol, e.g. which command exactly you used in the terminal, or how you started pystol otherwise.
When listing steps, **don't just say what you did, but explain how you did it**. For example, if you moved the cursor to
the end of a line, explain if you used the mouse, or a keyboard shortcut or an pystol command, and if so which one?
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable
snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the
problem. If you use the keyboard while following the steps, **record the GIF with the
[Keybinding Resolver](https://github.com/pystol/keybinding-resolver) shown**. You can use
[this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and
[this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **If you're reporting that pystol crashed**, include a crash report with a stack trace from the operating system.
Include the crash report in the issue in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines),
a [file attachment](https://help.github.com/articles/file-attachments-on-issues-and-pull-requests/), or put it in a [gist](https://gist.github.com/) and provide link to that gist.
* **If the problem is related to performance or memory**, include a CPU profile capture with your report.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and
share more information using the guidelines below.

Provide more context by answering these questions:

* **Did the problem start happening recently** (e.g. after updating to a new version of pystol) or was this always a problem?
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

Include details about your configuration and environment:

* **Which version of pystol are you using?** You can get the exact version by running `pystol -v` in your terminal.
* **What's the name and version of the OS you're using**?

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for pystol,
including completely new features and minor improvements to existing functionality.
Following these guidelines helps maintainers and the community understand your
suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out
that you don't need to create one. When you are creating an enhancement suggestion, please
[include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion).
Fill in [the template](https://github.com/pystol/.github/blob/master/.github/ISSUE_TEMPLATE/feature_request.md),
including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

* **Check if there's already pull request which provides that enhancement.**
* **Determine which repository the enhancement should be suggested in.**
* **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+user%3Apystol)** to see if the enhancement has
already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/).
After you've determined which repository your enhancement suggestion is related to,
create an issue on that repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which
you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the
part of pystol which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record
GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful** to most Pystol users and isn't something that can or should be implemented.
* **Specify which version of Pystol you're using.** You can get the exact version by running `pystol -v` in your terminal.
* **Specify the name and version of the OS you're using.**

#### Local development

Pystol Core and all dependencies can be developed locally. For instructions on how to
do this, see the install guide:

### Pull Requests

The process described here has several goals:

- Maintain Pystol's quality.
- Fix problems that are important to users.
- Engage the community in working toward the best possible Pystol.
- Enable a sustainable system for Pystol's maintainers to review contributions.

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/)
are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that
the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated.
A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to
track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete
additional design work, tests, or other changes before your pull request can be ultimately accepted.
