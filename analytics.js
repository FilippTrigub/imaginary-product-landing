/**
 * NovaSphere Analytics — Lightweight client-side engagement tracker
 *
 * Tracks page views, section visibility, CTA clicks, and scroll depth.
 * All data is stored in localStorage (no external requests).
 *
 * Usage:
 *   Include <script src="analytics.js"></script> before </body>.
 *   Open the browser console and run:
 *     NovaSphere.analytics()        — print a formatted dashboard
 *     NovaSphere.analytics.reset()  — clear all stored analytics data
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'novasphere_analytics';

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  function loadData() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  }

  function saveData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (_) {
      // Storage full or unavailable — silently ignore
    }
  }

  function getDefaults() {
    return {
      firstVisit: new Date().toISOString(),
      totalPageViews: 0,
      pages: {},
      sections: {},
      ctaClicks: [],
      maxScrollDepth: {},
      sessions: 0
    };
  }

  function now() {
    return Date.now();
  }

  function throttle(fn, delay) {
    var last = 0;
    return function () {
      var t = now();
      if (t - last >= delay) {
        last = t;
        fn.apply(this, arguments);
      }
    };
  }

  function pageName() {
    return location.pathname.replace(/\/$/, '') || '/';
  }

  // ---------------------------------------------------------------------------
  // Core tracker
  // ---------------------------------------------------------------------------

  var data = loadData() || getDefaults();

  // Bump session & page view counts
  data.sessions += 1;
  data.totalPageViews += 1;

  var page = pageName();
  data.pages[page] = (data.pages[page] || 0) + 1;

  saveData(data);

  // ---------------------------------------------------------------------------
  // Section visibility tracking (IntersectionObserver)
  // ---------------------------------------------------------------------------

  var sectionTimers = {}; // id -> { start, total }

  function initSectionTracking() {
    if (typeof IntersectionObserver === 'undefined') return;

    var sections = document.querySelectorAll('section[id], [id].container, header[id]');
    if (!sections.length) {
      // Fallback: track any <section> even without an id
      sections = document.querySelectorAll('section');
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var id = entry.target.id || entry.target.tagName.toLowerCase() + '-' + Array.prototype.indexOf.call(entry.target.parentNode.children, entry.target);

          if (entry.isIntersecting) {
            sectionTimers[id] = sectionTimers[id] || { start: 0, total: 0 };
            sectionTimers[id].start = now();
          } else if (sectionTimers[id] && sectionTimers[id].start) {
            sectionTimers[id].total += now() - sectionTimers[id].start;
            sectionTimers[id].start = 0;
            persistSectionTime(id, sectionTimers[id].total);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach(function (el) {
      observer.observe(el);
    });
  }

  function persistSectionTime(id, totalMs) {
    var d = loadData() || getDefaults();
    d.sections[id] = Math.round(totalMs / 1000); // store seconds
    saveData(d);
  }

  // ---------------------------------------------------------------------------
  // CTA click tracking (event delegation)
  // ---------------------------------------------------------------------------

  function initClickTracking() {
    document.addEventListener('click', function (e) {
      var target = e.target.closest('a.btn-primary, a.cta-button, button.btn-primary, button.cta-button, .btn-primary, .cta-button');
      if (!target) return;

      var d = loadData() || getDefaults();
      d.ctaClicks.push({
        text: (target.textContent || '').trim().substring(0, 80),
        page: pageName(),
        time: new Date().toISOString()
      });
      // Keep only the last 50 clicks to avoid bloating storage
      if (d.ctaClicks.length > 50) {
        d.ctaClicks = d.ctaClicks.slice(-50);
      }
      saveData(d);
    });
  }

  // ---------------------------------------------------------------------------
  // Scroll depth tracking
  // ---------------------------------------------------------------------------

  function initScrollTracking() {
    var maxDepth = 0;

    var handler = throttle(function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      var winHeight = window.innerHeight;
      var depth = docHeight <= winHeight ? 100 : Math.round((scrollTop / (docHeight - winHeight)) * 100);

      if (depth > maxDepth) {
        maxDepth = depth;
        var d = loadData() || getDefaults();
        d.maxScrollDepth[pageName()] = Math.max(d.maxScrollDepth[pageName()] || 0, maxDepth);
        saveData(d);
      }
    }, 250);

    window.addEventListener('scroll', handler, { passive: true });
  }

  // ---------------------------------------------------------------------------
  // Console dashboard
  // ---------------------------------------------------------------------------

  function printDashboard() {
    var d = loadData();
    if (!d) {
      console.log('%c NovaSphere Analytics — No data collected yet.', 'color:#999');
      return d;
    }

    var sep = '─'.repeat(52);

    console.log(
      '\n%c ╔══════════════════════════════════════════════════╗\n' +
      ' ║          NovaSphere Analytics Dashboard          ║\n' +
      ' ╚══════════════════════════════════════════════════╝',
      'color:#667eea;font-weight:bold'
    );

    console.log('%c ' + sep, 'color:#ccc');
    console.log('%c  Overview', 'font-weight:bold;font-size:13px');
    console.log('  First visit:       ' + d.firstVisit);
    console.log('  Total sessions:    ' + d.sessions);
    console.log('  Total page views:  ' + d.totalPageViews);

    console.log('%c ' + sep, 'color:#ccc');
    console.log('%c  Page Views', 'font-weight:bold;font-size:13px');
    Object.keys(d.pages).forEach(function (p) {
      console.log('  ' + p + '  →  ' + d.pages[p] + ' views');
    });

    console.log('%c ' + sep, 'color:#ccc');
    console.log('%c  Scroll Depth (max %)', 'font-weight:bold;font-size:13px');
    Object.keys(d.maxScrollDepth).forEach(function (p) {
      var pct = d.maxScrollDepth[p];
      var bar = '█'.repeat(Math.round(pct / 5)) + '░'.repeat(20 - Math.round(pct / 5));
      console.log('  ' + p + '  ' + bar + '  ' + pct + '%');
    });

    if (Object.keys(d.sections).length) {
      console.log('%c ' + sep, 'color:#ccc');
      console.log('%c  Section Visibility (seconds)', 'font-weight:bold;font-size:13px');
      Object.keys(d.sections).forEach(function (s) {
        console.log('  #' + s + '  →  ' + d.sections[s] + 's');
      });
    }

    if (d.ctaClicks.length) {
      console.log('%c ' + sep, 'color:#ccc');
      console.log('%c  Recent CTA Clicks (last 10)', 'font-weight:bold;font-size:13px');
      d.ctaClicks.slice(-10).forEach(function (c) {
        console.log('  "' + c.text + '"  on ' + c.page + '  at ' + c.time);
      });
    }

    console.log('%c ' + sep, 'color:#ccc');
    console.log('%c  Tip: run NovaSphere.analytics.reset() to clear data.\n', 'color:#999;font-style:italic');

    return d;
  }

  function resetData() {
    localStorage.removeItem(STORAGE_KEY);
    console.log('%c NovaSphere Analytics — Data cleared.', 'color:#e74c3c;font-weight:bold');
  }

  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------

  window.NovaSphere = window.NovaSphere || {};
  window.NovaSphere.analytics = printDashboard;
  window.NovaSphere.analytics.reset = resetData;

  // ---------------------------------------------------------------------------
  // Initialise on DOM ready
  // ---------------------------------------------------------------------------

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initSectionTracking();
      initClickTracking();
      initScrollTracking();
    });
  } else {
    initSectionTracking();
    initClickTracking();
    initScrollTracking();
  }
})();
