/* Drives the live vraiFrench visuals in the fr-language-tool case study.
   Adapted from the vraiFrench landing page script (static/landing.html):
   the hero stage, the How it works loop, the progress bars and the scroll
   reveals, each limited to elements inside a .vf wrapper. Needs
   pa-voice-atom.js loaded first for the voice waves; without it the
   sequences still run, just without the brand-mark waves. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Run fn when el is mostly on screen; onLeave (optional) when it scrolls away.
  function whenVisible(el, fn, onLeave) {
    if (!el) return;
    if (!('IntersectionObserver' in window)) { fn(); return; }
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) fn();
        else if (onLeave) onLeave();
      });
    }, { threshold: 0.35 }).observe(el);
  }

  // Hero stage: speech input streams into the speech tile, reads back, becomes
  // "What I heard"; then the score builds while the grid splits.
  (function () {
    var stage   = document.getElementById('lp-stage');
    var main    = document.getElementById('demo-main');
    var speech  = document.getElementById('demo-speech');
    var label   = document.getElementById('demo-speech-label');
    var text    = document.getElementById('demo-speech-text');
    var scoreEl = document.getElementById('demo-score');
    var barFill = document.getElementById('demo-bar-fill');
    var tiles   = document.getElementById('demo-tiles');
    var replay  = document.getElementById('lp-stage-replay');
    if (!stage || !main || !speech) return;
    var slot    = document.getElementById('demo-voice-slot');
    var mic     = document.getElementById('demo-mic');
    var voiceEl = document.getElementById('demo-voice');
    var atom    = window.PaVoiceAtom && voiceEl ? new PaVoiceAtom(voiceEl) : null;

    var said = 'les enfants jouait';
    var timers = [];
    function at(ms, fn) { timers.push(setTimeout(fn, ms)); }

    // Toggle the split, gliding the main column from where it was (FLIP)
    function setSplit(on) {
      var animate = !reduce && window.matchMedia('(min-width: 1024px)').matches;
      var before = animate ? main.getBoundingClientRect().left : 0;
      stage.classList.toggle('is-split', on);
      tiles.classList.toggle('is-visible', on);
      if (!animate) return;
      var dx = before - main.getBoundingClientRect().left;
      if (Math.abs(dx) >= 1) {
        main.animate([{ transform: 'translateX(' + dx + 'px)' }, { transform: 'translateX(0)' }],
          { duration: 800, easing: 'cubic-bezier(0.2, 0, 0, 1)' });
      }
    }

    function reset() {
      timers.forEach(clearTimeout);
      timers = [];
      speech.classList.remove('visible', 'is-analysing', 'is-heard');
      label.textContent = 'Speech input';
      text.textContent = '';
      scoreEl.classList.remove('visible');
      barFill.style.width = '0%';
      if (atom) atom.reset();
      voiceEl.classList.remove('visible');
      mic.classList.remove('listening', 'is-gone');
      slot.classList.remove('is-done');
    }

    function heard() {
      speech.classList.remove('is-analysing');
      speech.classList.add('is-heard');
      label.textContent = 'What I heard';
    }
    function score() {
      scoreEl.classList.add('visible');
      barFill.style.width = '67%';
    }

    function run(t) {
      reset();
      if (reduce) {
        slot.style.display = 'none';
        speech.classList.add('visible');
        heard();
        score();
        setSplit(true);
        return;
      }
      var WAVE = { inMs: 500, fadeMs: 200, outMs: 450 };   // PaVoiceAtom timings
      // Speech input at a speaking pace: a beat before the first word,
      // ~110ms a letter, a pause between words
      var LEAD = 600, CHAR = 110, WORD_GAP = 220;
      var charAt = [], typing = LEAD;
      for (var c = 0; c < said.length; c++) {
        if (said[c] === ' ') typing += WORD_GAP;
        typing += CHAR;
        charAt.push(typing);
      }
      at(t, function () { mic.classList.add('listening'); });
      t += 250;
      at(t, function () {
        speech.classList.add('visible');
        text.innerHTML = '<span class="lp-caret"></span>';
        if (atom) {
          mic.classList.add('is-gone');
          voiceEl.classList.add('visible');
          atom.voice('you', PaVoiceAtom.speechEnvelope(said, typing - WAVE.inMs), WAVE);
        }
      });
      for (var i = 1; i <= said.length; i++) {
        (function (n) {
          at(t + charAt[n - 1], function () {
            text.innerHTML = said.slice(0, n) + '<span class="lp-caret"></span>';
          });
        })(i);
      }
      t += typing + WAVE.fadeMs + WAVE.outMs;
      at(t, function () {
        text.textContent = said;
        label.textContent = 'Reading it back…';
        speech.classList.add('is-analysing');
        if (atom) atom.startLoading();
        else mic.classList.remove('listening');
      });
      t += 500;
      at(t, heard);
      t += 400;
      at(t, function () {
        scoreEl.classList.add('visible');
        setSplit(true);
        slot.classList.add('is-done');
        at(60, function () { barFill.style.width = '67%'; });
        if (atom) at(850, function () { atom.reset(); });
      });
    }

    // Play once, when the stage is on screen
    var played = false;
    function start() { if (!played) { played = true; run(600); } }
    if ('IntersectionObserver' in window) {
      var stageIo = new IntersectionObserver(function (entries) {
        if (entries[0].intersectionRatio >= 0.4) { stageIo.disconnect(); start(); }
      }, { threshold: [0.4] });
      stageIo.observe(stage);
    } else {
      start();
    }

    replay.addEventListener('click', function () {
      if (!stage.classList.contains('is-split')) return;
      setSplit(false);
      run(900);
    });
  })();

  // Scroll reveal, staggered in threes like the landing page
  (function () {
    var reveals = document.querySelectorAll('.vf .reveal');
    if (!('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        setTimeout(function () { el.classList.add('visible'); }, el.dataset.delay || 0);
        io.unobserve(el);
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el, i) {
      el.dataset.delay = (i % 3) * 80;
      io.observe(el);
    });
  })();

  // How it works: listen, speak, read back, scored, looping while in view
  (function () {
    var play = document.getElementById('loop-play');
    var mic = document.getElementById('loop-mic');
    var speakEl = document.getElementById('loop-voice-speak');
    var listenEl = document.getElementById('loop-voice-listen');
    var speech = document.getElementById('loop-speech');
    var label = document.getElementById('loop-speech-label');
    var text = document.getElementById('loop-speech-text');
    var heard = document.getElementById('loop-heard');
    var ring = document.getElementById('loop-ring');
    var ringNum = document.getElementById('loop-ring-num');
    if (!play || !heard) return;
    var listenAtom = window.PaVoiceAtom ? new PaVoiceAtom(listenEl) : null;
    var speakAtom = window.PaVoiceAtom ? new PaVoiceAtom(speakEl) : null;

    var said = 'les enfants jouait';
    var timers = [];
    var running = false;
    function at(ms, fn) { timers.push(setTimeout(fn, ms)); }

    function reset() {
      timers.forEach(clearTimeout);
      timers = [];
      play.classList.remove('is-playing', 'is-gone');
      listenEl.classList.remove('visible');
      mic.classList.remove('listening', 'is-gone');
      speakEl.classList.remove('visible');
      if (listenAtom) listenAtom.reset();
      if (speakAtom) speakAtom.reset();
      speech.classList.remove('is-analysing');
      heard.classList.remove('is-heard');
      label.textContent = 'Tap the mic and speak';
      text.textContent = '';
      ring.style.setProperty('--pa-cp-pct', '0');
      ringNum.textContent = '–';
    }
    function scored() {
      heard.classList.add('is-heard');
      ring.style.setProperty('--pa-cp-pct', '0.67');
      ringNum.innerHTML = '67<small>%</small>';
    }

    if (reduce) {
      label.textContent = 'You said';
      text.textContent = said;
      scored();
      return;
    }

    // PaVoiceAtom: electrons to waves 800ms, waves to electrons ~1070ms
    var LISTEN_MS = 1500, SPEAK_MS = 1000;
    function cycle() {
      reset();
      at(300, function () { play.classList.add('is-playing'); });
      var listened = 300;
      if (listenAtom) {
        at(700, function () {
          play.classList.add('is-gone');
          listenEl.classList.add('visible');
          listenAtom.voice('audio', PaVoiceAtom.speechEnvelope('les enfants jouent dehors', LISTEN_MS));
        });
        listened = 700 + 800 + LISTEN_MS + 1070;
      } else {
        listened = 300 + LISTEN_MS;
      }
      at(listened, function () {
        listenEl.classList.remove('visible');
        play.classList.remove('is-playing', 'is-gone');
      });
      var speak = listened + 400;
      at(speak, function () {
        mic.classList.add('listening');
        label.textContent = 'Listening…';
        text.innerHTML = '<span class="lp-caret"></span>';
      });
      if (speakAtom) {
        at(speak + 500, function () {
          mic.classList.add('is-gone');
          speakEl.classList.add('visible');
          speakAtom.voice('you', PaVoiceAtom.speechEnvelope(said, SPEAK_MS));
        });
      }
      for (var i = 1; i <= said.length; i++) {
        (function (n) {
          at(speak + 800 + n * 85, function () {
            text.innerHTML = said.slice(0, n) + '<span class="lp-caret"></span>';
          });
        })(i);
      }
      var spoken = speak + 500 + 800 + SPEAK_MS + 1070 + 100;
      at(spoken, function () {
        mic.classList.remove('listening', 'is-gone');
        speakEl.classList.remove('visible');
        label.textContent = 'Reading it back';
        text.textContent = said;
        speech.classList.add('is-analysing');
      });
      at(spoken + 1300, function () {
        speech.classList.remove('is-analysing');
        label.textContent = 'You said';
        scored();
      });
      at(spoken + 7000, cycle);
    }

    whenVisible(document.getElementById('lp-loop'),
      function () { if (!running) { running = true; cycle(); } },
      function () { if (running) { running = false; reset(); } });
  })();

  // The mark's states: each tile loops its own animation while the grid is on
  // screen and stops when it scrolls away. Sign-in and results replay the
  // class changes the app makes from the learner's form and score.
  (function () {
    var grid = document.getElementById('mark-grid');
    if (!grid) return;
    var timers = [];
    var running = false;
    function at(ms, fn) { timers.push(setTimeout(function () { if (running) fn(); }, ms)); }
    function every(ms, fn) { fn(); var id = setInterval(function () { if (running) fn(); }, ms); timers.push(id); }
    function clearAll() { timers.forEach(function (id) { clearTimeout(id); clearInterval(id); }); timers = []; }

    var A = window.PaVoiceAtom;
    var audio = A ? new A(document.getElementById('mark-audio')) : null;
    var you   = A ? new A(document.getElementById('mark-you')) : null;
    var load  = A ? new A(document.getElementById('mark-load')) : null;
    var ring  = window.PaOrbitRing ? new PaOrbitRing(document.getElementById('mark-orbit')) : null;
    var rec   = document.getElementById('mark-rec');
    var atom  = document.getElementById('mark-atom');
    var note  = document.getElementById('mark-atom-note');
    var result = document.getElementById('mark-result');

    // Same geometry as the app's vocabulary results atom (_vrAtomSvg)
    function resultSvg(pct) {
      var tier = pct >= 90 ? 'gold' : pct >= 70 ? 'silver' : pct >= 50 ? 'bronze' : 'low';
      var sparks = { gold: 12, silver: 8, bronze: 6, low: 0 }[tier], html = '';
      for (var k = 0; k < sparks; k++) {
        html += '<circle class="vr-spark" cx="50" cy="50" r="' + (k % 2 ? 2.6 : 3.6) + '" style="--a:' + Math.round(k * 360 / sparks + 15) + 'deg"/>';
      }
      return '<svg class="vr-atom is-' + tier + '" viewBox="0 0 100 100" aria-hidden="true">' + html +
        '<g class="vr-atom-orbit">' +
        '<path d="M64.93 15.60 A37.5 37.5 0 0 1 64.93 84.40 A15 15 0 0 0 62.93 75.40 A28.5 28.5 0 0 0 62.93 24.60 A15 15 0 0 0 64.93 15.60 Z"/>' +
        '<path d="M35.07 15.60 A37.5 37.5 0 0 0 35.07 84.40 A15 15 0 0 1 37.07 75.40 A28.5 28.5 0 0 1 37.07 24.60 A15 15 0 0 1 35.07 15.60 Z"/>' +
        '<circle cx="50" cy="17" r="10.5"/><circle cx="50" cy="83" r="10.5"/></g>' +
        '<circle cx="50" cy="50" r="10.5"/></svg><span class="mark-result-pct">' + pct + '%</span>';
    }

    function setAtom(cls, text) { atom.className = 'atom has-email' + (cls ? ' ' + cls : ''); note.textContent = text; }

    if (reduce) {
      // Final states, no motion
      if (audio) audio.reset(); if (you) you.reset(); if (load) load.reset();
      setAtom('has-e1 has-e2 is-success', 'Signed in');
      result.innerHTML = resultSvg(92);
      return;
    }

    function start() {
      running = true;
      every(4200, function () { if (audio) audio.voice('audio', A.speechEnvelope('les enfants jouent dehors', 1700)); });
      at(700, function () {
        every(4200, function () { if (you) you.voice('you', A.speechEnvelope('les enfants jouait', 1500)); });
      });
      every(4400, function () {
        if (!load) return;
        load.startLoading();
        at(2800, function () { load.stopLoading(); });
      });
      every(5000, function () {
        if (!ring) return;
        rec.classList.add('listening');
        ring.set(true);
        var t0 = performance.now();
        var meter = setInterval(function () {
          var t = (performance.now() - t0) / 1000;
          ring.setLevel(0.25 + 0.55 * Math.abs(Math.sin(t * 3.1) * Math.sin(t * 1.3 + 0.6)));
        }, 60);
        timers.push(meter);
        at(3000, function () { clearInterval(meter); rec.classList.remove('listening'); ring.set(false); });
      });
      every(8000, function () {
        setAtom('', 'Email');
        at(900,  function () { setAtom('has-e1', 'Password'); });
        at(2200, function () { setAtom('has-e1 has-e2 is-charged', 'Form complete'); });
        at(4000, function () { setAtom('has-e1 has-e2 is-checking', 'Checking'); });
        at(5000, function () { setAtom('has-e1 has-e2 is-success', 'Signed in'); });
      });
      var scores = [94, 78, 61, 42], i = 0;
      every(3200, function () { result.innerHTML = resultSvg(scores[i++ % scores.length]); });
    }
    function stop() {
      running = false;
      clearAll();
      if (audio) audio.reset(); if (you) you.reset(); if (load) load.reset();
      if (ring) ring.set(false);
      rec.classList.remove('listening');
    }

    whenVisible(grid, function () { if (!running) start(); }, function () { if (running) stop(); });
  })();

  // Progress: bars fill and the trend line draws in once
  (function () {
    var grid = document.getElementById('lp-prog');
    var done = false;
    whenVisible(grid, function () {
      if (done) return;
      done = true;
      grid.querySelectorAll('[data-w]').forEach(function (el) { el.style.width = el.dataset.w + '%'; });
      var chart = document.getElementById('lp-chart');
      if (chart) chart.classList.add('is-drawn');
    });
  })();
})();
