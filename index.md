---
layout: default
---

Inline math is rendered when delimited by `$` or `\(` and `\)`. Display math is rendered between `$$` or `\[` and `\]`.

[![MathJaX]({{ '/assets/images/mj-logo.svg' | relative_url }})](javascript:(function(){if(void 0===window.MathJax){window.MathJax={tex:{inlineMath:[['$','$'],['\\(','\\)']]}};const n=document.createElement('script');n.src='//cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',n.async=!0,window.document.body.appendChild(n)}}());)

*Drag & Drop to your bookmarks (or right click)!*

MathJaX Bookmarklet 3 is a full rewrite of previous bookmarklets. [MathJaX Bookmarklet 2](//kubetz.github.io/mathjax-bookmarklet/) was written by [Jakub Kozisek](//github.com/kubetz). A [version that supports images on Wikipedia](https://checkmyworking.com/misc/mathjax-bookmarklet/) was made by [Christian Lawson-Perfect](https://github.com/christianp). 

## Examples -- Execute the bookmarklet and enjoy!

### TeX Examples

#### The Cauchy-Schwarz Inequality

<div class="math" markdown="false">
$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2
\right)$
</div>


#### Maxwell’s Equations

<div class="math" markdown="false">
\begin{aligned}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &amp; = \frac{4\pi}{c}\vec{\mathbf{j}} \\ 
\nabla \cdot \vec{\mathbf{E}} &amp; = 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} &amp; = \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} &amp; = 0 
\end{aligned}
</div>


#### An Identity of Ramanujan

<div class="math" markdown="false">
$$ \frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} =
1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}
{1+\frac{e^{-8\pi}} {1+\ldots} } } } $$
</div>

### MathML Examples

#### Curl of a Vector Field

<div class="math" markdown="false">
<math display="block"><mrow><mover accent="true"><mrow><mo>∇</mo></mrow><mrow><mo>→</mo></mrow></mover><mo>×</mo><mover accent="true"><mrow><mi>F</mi></mrow><mrow><mo>→</mo></mrow></mover><mo>=</mo><mrow><mo>(</mo><mfrac><mrow><mo>∂</mo><msub><mrow><mi>F</mi></mrow><mrow><mi>z</mi></mrow></msub></mrow><mrow><mo>∂</mo><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mo>∂</mo><msub><mrow><mi>F</mi></mrow><mrow><mi>y</mi></mrow></msub></mrow><mrow><mo>∂</mo><mi>z</mi></mrow></mfrac><mo>)</mo></mrow><mstyle mathvariant="bold" mathsize="normal"><mrow><mi>i</mi></mrow></mstyle><mo>+</mo><mrow><mo>(</mo><mfrac><mrow><mo>∂</mo><msub><mrow><mi>F</mi></mrow><mrow><mi>x</mi></mrow></msub></mrow><mrow><mo>∂</mo><mi>z</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mo>∂</mo><msub><mrow><mi>F</mi></mrow><mrow><mi>z</mi></mrow></msub></mrow><mrow><mo>∂</mo><mi>x</mi></mrow></mfrac><mo>)</mo></mrow><mstyle mathvariant="bold" mathsize="normal"><mrow><mi>j</mi></mrow></mstyle><mo>+</mo><mrow><mo>(</mo><mfrac><mrow><mo>∂</mo><msub><mrow><mi>F</mi></mrow><mrow><mi>y</mi></mrow></msub></mrow><mrow><mo>∂</mo><mi>x</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mo>∂</mo><msub><mrow><mi>F</mi></mrow><mrow><mi>x</mi></mrow></msub></mrow><mrow><mo>∂</mo><mi>y</mi></mrow></mfrac><mo>)</mo></mrow><mstyle mathvariant="bold" mathsize="normal"><mrow><mi>k</mi></mrow></mstyle></mrow></math>
</div>


#### Definition of Christoffel Symbols

<div class="math" markdown="false">
<math display="block"><mrow><msup><mrow><mo>(</mo><msub><mrow><mo>∇</mo></mrow><mrow><mi>X</mi></mrow></msub><mi>Y</mi><mo>)</mo></mrow><mrow><mi>k</mi></mrow></msup><mo>=</mo><msup><mrow><mi>X</mi></mrow><mrow><mi>i</mi></mrow></msup><msup><mrow><mo stretchy="false">(</mo><msub><mrow><mo>∇</mo></mrow><mrow><mi>i</mi></mrow></msub><mi>Y</mi><mo stretchy="false">)</mo></mrow><mrow><mi>k</mi></mrow></msup><mo>=</mo><msup><mrow><mi>X</mi></mrow><mrow><mi>i</mi></mrow></msup><mrow><mo>(</mo><mfrac><mrow><mo>∂</mo><msup><mrow><mi>Y</mi></mrow><mrow><mi>k</mi></mrow></msup></mrow><mrow><mo>∂</mo><msup><mrow><mi>x</mi></mrow><mrow><mi>i</mi></mrow></msup></mrow></mfrac><mo>+</mo><msubsup><mrow><mi>Γ</mi></mrow><mrow><mi>i</mi><mi>m</mi></mrow><mrow><mi>k</mi></mrow></msubsup><msup><mrow><mi>Y</mi></mrow><mrow><mi>m</mi></mrow></msup><mo>)</mo></mrow></mrow></math>
</div>


#### Standard Deviation

<div class="math" markdown="false">
<math display="block"><mrow><mi>σ</mi><mo>=</mo><msqrt><mrow><mfrac><mrow><mn>1</mn></mrow><mrow><mi>N</mi></mrow></mfrac><mstyle displaystyle="true"><mrow><munderover><mrow><mo>∑</mo></mrow><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mrow><mi>N</mi></mrow></munderover><mrow><msup><mrow><mo stretchy="false">(</mo><msub><mrow><mi>x</mi></mrow><mrow><mi>i</mi></mrow></msub><mo>−</mo><mi>μ</mi><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn></mrow></msup></mrow></mrow></mstyle></mrow></msqrt><mo>.</mo></mrow></math>
</div>
