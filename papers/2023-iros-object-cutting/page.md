---
layout: project
title: "Learning a Causal Transition Model for<br/> Object Cutting"
related_publications: [zhang2023learning]
permalink: /papers/iros-object-cutting/
---

<h5 style="text-align: center;">
Zeyu Zhang*, Muzhi Han*, Baoxiong Jia, Ziyuan Jiao, Yixin Zhu, Song-Chun Zhu, Hangxin Liu†
</h5>
<p style="text-align: center;">
*denotes joint first authors, †denotes corresponding author
</p>
<p style="text-align: center;">
<a href="/papers/2023-iros-object-cutting/paper.pdf" target="_blank">PDF</a> | 
<a href="#" target="_blank">Code (coming soon)</a>
</p>

<div class="row mt-3">
    <div class="col-md-10 col-lg-8 mx-auto">
        {% include figure.liquid path="papers/2023-iros-object-cutting/thumbnail.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
     <b>Planning for object cutting with a stochastic grammar of object fragmentation.</b> The grammar reveals the underlying fluent space of object fragmentation and captures causal transitions in a compositional manner with production rules. An observed fragmentation process is represented as a parse tree derived from the grammar; planning for object cutting is to infer an optimal parse tree that describes the desired fragmentation. Observing cutting a carrot could support planning actions for cutting a potato into the same by sharing the production rule $c_3 \rightarrow c_5 c_5$.
</div>

## Abstract

Cutting objects into desired fragments is challenging for robots due to the spatially unstructured nature of fragments and the complex one-to-many object fragmentation caused by actions. We present a novel approach to model object fragmentation using an attributed stochastic grammar. This grammar abstracts fragment states as node variables and captures causal transitions in object fragmentation through production rules. We devise a probabilistic framework to learn this grammar from human demonstrations. The planning process for object cutting involves inferring an optimal parse tree of desired fragments using the learned grammar, with parse tree productions corresponding to cutting actions. We employ Monte Carlo Tree Search (MCTS) to efficiently approximate the optimal parse tree and generate a sequence of executable cutting actions. The experiments demonstrate the efficacy in planning for object-cutting tasks, both in simulation and on a physical robot. The proposed approach outperforms several baselines by demonstrating superior generalization to novel setups, thanks to the compositionality of the grammar model.

## Algorithm Overview

<div class="row mt-3">
    <div class="col-sm">
        {% include figure.liquid path="papers/2023-iros-object-cutting/teaser.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
     <b>An illustration of the inference process to obtain an optimal parse tree $pt^*$ through MCTS.</b> (a) Given fragment point clouds in the current or goal configuration, we extract a shape feature for each fragment with a pre-trained point cloud encoder and process it with an MLP to classify the fragment type $p(c|z)$ (the vector shows probability in greyscale). (b) We show an example of a Monte Carlo search tree where the state of a search node is a parse tree derived from the grammar. The expansion of a search node is to apply production rules to its parse tree. The yellow region $\mathcal{H}(\mathcal{I}^t)$ is a set of search nodes whose states (\ie, parse trees) are sampled from fragments in $\mathcal{I}^t$ according to $p(c|z)$. (c-d) To evaluate rollout results, we find the best assignment that grounds each terminal node to a fragment in $\mathcal{I}^{g}$. The dotted lines in (c) represent an optimal assignment that maximizes the shape matching likelihood, which is further refined to maximize the layout grouping likelihood, shown in solid lines in (d).
</div>

## Demo

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/851269542?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="[IROS 2023] Learning a Causal Transition Model for Object Cutting"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script><br/>

## BibTex

```bibtex
@inproceedings{zhang2023learning,
  title = {Learning a Causal Transition Model for Object Cutting},
  author = {Zhang, Zeyu and Han, Muzhi and Jia, Baoxiong and Jiao, Ziyuan and Zhu, Yixin and Zhu, Song-Chun and Liu, Hangxin},
  booktitle = {IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  pages = {1996--2003},
  year = {2023},
  organization = {IEEE},
}
```
