---
layout: project
title: "Efficient Task Planning for Mobile Manipulation:<br/> a Virtual Kinematic Chain Perspective"
related_publications: [jiao2021efficient]
permalink: /papers/iros-vkc-task/
---

<h5 style="text-align: center;">
Ziyuan Jiao*, Zeyu Zhang*, Weiqi Wang, David Han, Song-Chun Zhu, Yixin Zhu, Hangxin Liu†
</h5>
<p style="text-align: center;">
*denotes joint first authors, †denotes corresponding author
</p>
<p style="text-align: center;">
<a href="/papers/2021-iros-vkc-task/paper.pdf" target="_blank">[PDF]</a> | 
<a href="https://github.com/TooSchoolForCool/IROS21-VKC-Task-PDDL" target="_blank">[Code]</a>
</p>

<div class="row mt-3">
    <div class="col-md-10 col-lg-8 mx-auto mt-3 mt-md-0">
        {% include figure.liquid path="papers/2021-iros-vkc-task/thumbnail.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A typical task planning setup, wherein the mobile manipulator is to tasked to navigate and pick up the object on the desk.The VKC-based PDDL domain reduces search space by eliminating mobile base poses near red cubes, simplifying overall task planning.
</div>

## Abstract

We present a Virtual Kinematic Chain (VKC) perspective, a simple yet effective method, to improve task planning efficacy for mobile manipulation. By consolidating the kinematics of the mobile base, the arm, and the object to be manipulated collectively as a whole, our novel VKC perspective naturally defines abstract actions and eliminates unnecessary predicates in describing intermediate poses. As a result, these advantages simplify the design of the planning domain and significantly reduce the search space and branching factors in solving planning problems. In experiments, we implement a task planner using Planning Domain Definition Language (PDDL) with VKC. Compared with classic domain definition, our VKC-based domain definition is more efficient in both planning time and memory required. In addition, the abstract actions perform better in producing feasible motion plans and trajectories. We further scale up the VKC-based task planner in complex mobile manipulation tasks. Taken together, these results demonstrate that task planning using VKC for mobile manipulation is not only natural and effective but also introduces new capabilities.

## Demo

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/581563536?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="[IROS 2021] Efficient Task Planning for Mobile Manipulation: a Virtual Kinematic Chain Perspective"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script><br/>

## BibTex

```bibtex
@inproceedings{jiao2021efficient,
  title = {Efficient Task Planning for Mobile Manipulation: a Virtual Kinematic Chain Perspective},
  author = {Jiao, Ziyuan and Zhang, Zeyu and Wang, Weiqi and Han, David and Zhu, Song-Chun and Zhu, Yixin and Liu, Hangxin},
  booktitle = {IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  pages = {8288--8294},
  year = {2021},
  organization = {IEEE},
}
```
