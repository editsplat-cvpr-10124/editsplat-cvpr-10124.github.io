---
layout: project_page
permalink: /

title: "Editsplat: Multi-View Fusion and Attention-Guided Optimization for View-Consistent 3D Scene Editing with 3D Gaussian Splatting"
authors: Anonymous CVPR submission
affiliations:
    CVPR 2025
paper: ""
video: ""
code: ""
data: ""
---

<!-- Teaser Image -->
<figure style="margin: 0 0 50px; padding: 0;"> 
    <img src="teaser.jpg" alt="Teaser" style="width: 100%; height: auto;" />
    <figcaption style="margin-top: 10px; text-align: center;">
        Figure 1: Teaser Image for Editsplat Framework.
    </figcaption>
</figure>

<!-- Abstract Section -->
<div class="columns is-centered has-text-centered" style="width: 100%; margin: 0;">
    <div class="column" style="width: 100%; padding: 0;">
        <h2> Abstract </h2>
        <div class="content has-text-justified">
            Recent advancements in 3D editing have highlighted the potential of text-driven methods in real-time, user-friendly AR/VR applications. However, current methods rely on 2D diffusion models without adequately considering multi-view information, resulting in multi-view inconsistency. While 3D Gaussian Splatting (3DGS) significantly improves rendering quality and speed, its 3D editing process encounters difficulties with inefficient optimization, as pre-trained Gaussians retain excessive source information, hindering optimization.
            <br><br>
            To address these limitations, we propose <strong>EditSplat</strong>, a novel 3D editing framework that integrates Multi-view Fusion Guidance (MFG) and Attention-Guided Trimming (AGT). Our MFG ensures multi-view consistency by incorporating essential multi-view information into the diffusion process, leveraging classifier-free guidance from the text-to-image diffusion model and the geometric properties of 3DGS. Additionally, our AGT leverages the explicit representation of 3DGS to selectively prune and optimize 3D Gaussians, enhancing optimization efficiency and enabling precise, semantically rich local edits. Through extensive qualitative and quantitative evaluations, EditSplat achieves superior multi-view consistency and editing quality over existing methods, significantly enhancing overall efficiency.
        </div>
    </div>
</div>

<!-- Main Figure Section -->
<div class="columns" style="width: 100%; margin: 0;">
    <div class="column" style="width: 100%; padding: 0;">
        <figure style="margin: 50px 0 0; padding: 0;">
            <img src="Main_fig.jpg" alt="Editsplat Overview" style="width: 100%; height: auto;" />
            <figcaption style="margin-top: 10px; text-align: center;">
                <strong>Editsplat Overview.</strong> EditSplat consists of two main methods: 
                (1) Multi-view Fusion Guidance (MFG, Sec. 3.2), which aligns multi-view information with text prompts and source images to ensure multi-view consistency; 
                (2) Attention-Guided Trimming (AGT, Sec. 3.3), which prunes pre-trained Gaussians for optimization efficiency and selectively optimizes Gaussians for semantic local editing.
            </figcaption>
        </figure>
    </div>
</div>


<br><br>

## Background
The paper "On Computable Numbers, with an Application to the Entscheidungsproblem" was published by Alan Turing in 1936. In this groundbreaking paper, Turing introduced the concept of a universal computing machine, now known as the Turing machine.

## Objective
Turing's main objective in this paper was to investigate the notion of computability and its relation to the Entscheidungsproblem (the decision problem), which is concerned with determining whether a given mathematical statement is provable or not.


## Key Ideas
1. Turing first presented the concept of a "computable number," which refers to a number that can be computed by an algorithm or a definite step-by-step process.
2. He introduced the notion of a Turing machine, an abstract computational device consisting of an infinite tape divided into cells and a read-write head. The machine can read and write symbols on the tape, move the head left or right, and transition between states based on a set of rules.
3. Turing demonstrated that the set of computable numbers is enumerable, meaning it can be listed in a systematic way, even though it is not necessarily countable.
4. He proved the existence of non-computable numbers, which cannot be computed by any Turing machine.
5. Turing showed that the Entscheidungsproblem is undecidable, meaning there is no algorithm that can determine, for any given mathematical statement, whether it is provable or not.

![Turing Machine](/static/image/Turing_machine.png)

*Figure 1: A representation of a Turing Machine. Source: [Wiki](https://en.wikipedia.org/wiki/Turing_machine).*

## Table: Comparison of Computable and Non-Computable Numbers

| Computable Numbers | Non-Computable Numbers |
|-------------------|-----------------------|
| Rational numbers, e.g., 1/2, 3/4 | Transcendental numbers, e.g., π, e |
| Algebraic numbers, e.g., √2, ∛3 | Non-algebraic numbers, e.g., √2 + √3 |
| Numbers with finite decimal representations | Numbers with infinite, non-repeating decimal representations |

He used the concept of a universal Turing machine to prove that the set of computable functions is recursively enumerable, meaning it can be listed by an algorithm.

## Significance
Turing's paper laid the foundation for the theory of computation and had a profound impact on the development of computer science. The Turing machine became a fundamental concept in theoretical computer science, serving as a theoretical model for studying the limits and capabilities of computation. Turing's work also influenced the development of programming languages, algorithms, and the design of modern computers.

---

> Note: This is an example of a Jekyll-based project website template: [Github link](https://github.com/shunzh/project_website).\
> The following content is generated by ChatGPT. The figure is manually added.

## Citation
```
@article{turing1936computable,
  title={On computable numbers, with an application to the Entscheidungsproblem},
  author={Turing, Alan Mathison},
  journal={Journal of Mathematics},
  volume={58},
  number={345-363},
  pages={5},
  year={1936}
}
```
