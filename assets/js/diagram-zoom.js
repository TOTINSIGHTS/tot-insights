/* diagram-zoom.js — shared "click to enlarge" for inline SVG diagrams.
   Auto-wires every real diagram SVG on the page (skips small icon SVGs).
   Adds an "⤢ Enlarge" button; clicking opens a full-screen vector copy,
   rendered large so the text scales up and reads clearly.
   Load once per diagram page, after the diagram markup (e.g. before </body>). */
(function () {
  'use strict';

  // A "diagram" is an inline SVG with a real viewBox wide enough to be a
  // figure. Requiring a viewBox excludes 24x24 UI icons AND D3 networks that
  // draw at fixed pixel coords (those don't scale by resizing, so enlarging
  // them is meaningless).
  function viewBoxWidth(svg) {
    var vb = (svg.getAttribute('viewBox') || '').split(/[\s,]+/).map(Number);
    return (vb.length === 4 && vb[2]) ? vb[2] : 0;
  }
  function isDiagram(svg) {
    return viewBoxWidth(svg) >= 200;
  }

  var lightbox = null;
  function getLightbox() {
    if (lightbox) return lightbox;
    lightbox = document.createElement('div');
    lightbox.className = 'diagram-lightbox';
    lightbox.innerHTML =
      '<button class="diagram-lightbox-close" type="button" aria-label="Close">×</button>' +
      '<div class="diagram-lightbox-inner"></div>';
    document.body.appendChild(lightbox);
    function close() {
      lightbox.classList.remove('open');
      lightbox.querySelector('.diagram-lightbox-inner').innerHTML = '';
    }
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('diagram-lightbox-close')) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) close();
    });
    return lightbox;
  }

  function open(svg) {
    var lb = getLightbox();
    var inner = lb.querySelector('.diagram-lightbox-inner');
    var clone = svg.cloneNode(true);
    // Render the vector at a fixed large size (≈1.6× its authored width, min
    // 1000px) so text is big and crisp. The modal scrolls if it exceeds the
    // screen — that's the point of "enlarge".
    var target = Math.max(1000, Math.round(viewBoxWidth(svg) * 1.6));
    clone.removeAttribute('height');
    clone.setAttribute('width', target);
    clone.style.width = target + 'px';
    clone.style.height = 'auto';
    clone.style.maxWidth = 'none';
    inner.innerHTML = '';
    inner.appendChild(clone);
    lb.classList.add('open');
  }

  function wire() {
    var svgs = [].slice.call(document.querySelectorAll('svg')).filter(isDiagram);
    svgs.forEach(function (svg) {
      var parent = svg.parentElement;
      if (!parent) return;
      // Pick a positioned host that hugs the SVG. If the SVG shares its parent
      // with other content (e.g. sits directly in <body>), wrap it so the
      // button anchors to the diagram, not the page.
      var host;
      if (parent.children.length === 1 && parent !== document.body) {
        host = parent;
      } else {
        host = document.createElement('div');
        parent.insertBefore(host, svg);
        host.appendChild(svg);
      }
      if (host.querySelector(':scope > .diagram-enlarge')) return;
      host.classList.add('diagram-zoomable');
      var btn = document.createElement('button');
      btn.className = 'diagram-enlarge';
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Enlarge diagram');
      btn.innerHTML = '⤡ Enlarge';
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        open(svg);
      });
      host.appendChild(btn);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wire);
  } else {
    wire();
  }
})();
