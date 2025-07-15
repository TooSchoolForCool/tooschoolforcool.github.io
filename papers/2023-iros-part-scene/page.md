---
layout: project
title: "Part-level Scene Reconstruction Affords<br/> Robot Interaction"
related_publications: [zhang2023part]
permalink: /papers/iros-part-scene
---

<h5 style="text-align: center;">
Zeyu Zhang*, Lexing Zhang*, Zaijin Wang, Ziyuan Jiao, Muzhi Han,<br/> Yixin Zhu, Song-Chun Zhu, Hangxin Liu†
</h5>
<p style="text-align: center;">
*denotes joint first authors, †denotes corresponding author
</p>
<p style="text-align: center;">
<a href="2023-iros-part-scene/paper.pdf" target="_blank">[PDF]</a>
</p>

<div class="row mt-3">
    <div class="col-sm">
        {% include figure.liquid path="papers/2023-iros-part-scene/teaser.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
     <b>System architecture for part-level interactive scene reconstruction.</b> (a) The initial step involves completing and segmenting the point clouds of the noisily segmented 3D objects, resulting in (b) a part-based panoptic map. (c) Each completed object part is replaced with the most aligned primitive shape. The optimal combination of part alignments, determined by the highest IoU, is selected to (d) estimate the kinematic relations among the parts. (e) The replaced object parts and their relations are compiled into a URDF representation, capturing the kinematics of objects and the scene. This URDF can be imported into various simulators for TAMP tasks.
</div>

## Abstract

Existing methods for reconstructing interactive scenes primarily focus on replacing reconstructed objects with CAD models retrieved from a limited database, resulting in significant discrepancies between the reconstructed and observed scenes. To address this issue, our work introduces a part-level reconstruction approach that reassembles objects using primitive shapes. This enables us to precisely replicate the observed physical scenes and simulate robot interactions with both rigid and articulated objects. By segmenting reconstructed objects into semantic parts and aligning primitive shapes to these parts, we assemble them as CAD models while estimating kinematic relations, including parent-child contact relations, joint types, and parameters. Specifically, we derive the optimal primitive alignment by solving a series of optimization problems, and estimate kinematic relations based on part semantics and geometry. Our experiments demonstrate that part-level scene reconstruction outperforms object-level reconstruction by accurately capturing finer details and improving precision. These reconstructed part-level interactive scenes provide valuable kinematic information for various robotic applications; we showcase the feasibility of certifying mobile manipulation planning in these interactive scenes before executing tasks in the physical world.

## Demo

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/849400128?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="[IROS 2023] Part-level Scene Reconstruction Affords Robot Interaction"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script><br/>

## BibTex

```bibtex
@inproceedings{zhang2023part,
  title = {Part-level Scene Reconstruction Affords Robot Interaction},
  author = {Zhang, Zeyu and Zhang, Lexing and Wang, Zaijin and Jiao, Ziyuan and Han, Muzhi and Zhu, Yixin and Zhu, Song-Chun and Liu, Hangxin},
  booktitle = {IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  pages = {11178--11185},
  year = {2023},
  organization = {IEEE},
}
```
