---
layout: default
title: Forum
description: "The Sharism Forum features talks and panel discussions by thinkers, practitioners and activists."
---

{% include forum.md %}


{% for post in site.categories.forum %}

## [{{ post.city }}]({{post.url}})

{{post.venue}} - {{ post.date | date: "%d %B %Y" }}

{% endfor %}
