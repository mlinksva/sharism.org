---
layout: default
title: Workshops
description: "Our workshops join international makers with local collaborators"
---

{% include workshop.md %}

{% for post in site.categories.workshop %}

## [{{ post.city }}]({{post.url}})

{{post.venue}} - {{ post.date | date: "%d %B %Y" }}

{% endfor %}
