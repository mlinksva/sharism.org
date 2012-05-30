---
layout: default
title: Presents
description: "Sharism Presents are events where sharing is encouraged"
---

{% include presents.md %}


{% for post in site.categories.presents %}

## [{{ post.city }}]({{post.url}})

{{post.venue}} - {{ post.date | date: "%d %B %Y" }}

{% endfor %}
