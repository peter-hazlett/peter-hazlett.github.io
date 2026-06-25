---
layout: page
permalink: /research/
title: research
description: Journal articles, working papers, and works in progress.
nav: true
nav_order: 2
---

<figure class="research-banner">
  {% include figure.liquid path="assets/img/research-presentation.png" class="img-fluid" alt="Presenting research at a conference" %}
</figure>

<div class="publications">

<h2 class="bibliography-section">Journal Articles</h2>
{% bibliography --query @*[type_group=Journal Articles] %}

<h2 class="bibliography-section">Under Review</h2>
{% bibliography --query @*[type_group=Under Review] %}

<h2 class="bibliography-section">Working Papers</h2>
{% bibliography --query @*[type_group=Working Papers] %}

<h2 class="bibliography-section">Works in Progress</h2>
{% bibliography --query @*[type_group=Works in Progress] %}

</div>
