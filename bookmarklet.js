(function() {
        if (window.MathJax === undefined) {
            window.MathJax = {
                tex: {
                    inlineMath: [['$', '$'], ['\\(', '\\)']]
                }
            };
            const i = document.createElement('script');
            i.src = '//cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
            i.async = true;
            window.document.body.appendChild(i)
        }
    }
)();