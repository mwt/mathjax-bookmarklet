(function() {
    function t(t) {
        if (t.MathJax === undefined) {
            t.MathJax = {
                tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']]
                }
            }
            const i = document.createElement('script')
            i.src = "//cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
            i.async = true
            t.document.body.appendChild(i)
        }
    }
    var a = document.getElementsByTagName('iframe');
    t(window);
    for (n = 0; n < a.length; n++) {
        i = a[n].contentWindow || a[n].contentDocument;
        if (!i.document) i = i.parentNode;
        t(i)
    }
})();
