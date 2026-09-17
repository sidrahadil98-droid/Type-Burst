/**
 * TypeBurst - Modern Professional Typing Practice Platform
 * Single Consolidated JavaScript Engine (script.js)
 */

(function () {
  'use strict';

  // =========================================================
  // 1. PHRASE REPOSITORY (100+ Unique Organized Phrases)
  // =========================================================
  const PHRASES = [
    // --- BEGINNER (Short, clean sentences) ---
    { id: 'b01', cat: 'beginner', text: 'Practice makes progress.' },
    { id: 'b02', cat: 'beginner', text: 'Focus on accuracy before speed.' },
    { id: 'b03', cat: 'beginner', text: 'Small daily effort creates lasting skill.' },
    { id: 'b04', cat: 'beginner', text: 'Clean habits lead to smooth typing.' },
    { id: 'b05', cat: 'beginner', text: 'Start slow, stay steady, and build momentum.' },
    { id: 'b06', cat: 'beginner', text: 'Good posture and rhythm improve your flow.' },
    { id: 'b07', cat: 'beginner', text: 'A calm mind helps your fingers move faster.' },
    { id: 'b08', cat: 'beginner', text: 'Keep your eyes on the screen.' },
    { id: 'b09', cat: 'beginner', text: 'Relax your wrists and breathe gently.' },
    { id: 'b10', cat: 'beginner', text: 'Smooth keystrokes save energy.' },
    { id: 'b11', cat: 'beginner', text: 'Trust your hands to find the keys.' },
    { id: 'b12', cat: 'beginner', text: 'Daily typing builds keyboard memory.' },
    { id: 'b13', cat: 'beginner', text: 'Take a brief pause when you feel tired.' },
    { id: 'b14', cat: 'beginner', text: 'Consistency beats occasional long sessions.' },
    { id: 'b15', cat: 'beginner', text: 'Every practice session makes you sharper.' },
    { id: 'b16', cat: 'beginner', text: 'Accuracy is the true foundation of fast typing.' },
    { id: 'b17', cat: 'beginner', text: 'Gentle taps are better than heavy strikes.' },
    { id: 'b18', cat: 'beginner', text: 'Learn where your index fingers rest.' },
    { id: 'b19', cat: 'beginner', text: 'The home row keys are your starting base.' },
    { id: 'b20', cat: 'beginner', text: 'Speed grows naturally with repetition.' },
    { id: 'b21', cat: 'beginner', text: 'Quick fingers are valuable, but accuracy matters most.' },
    { id: 'b22', cat: 'beginner', text: 'Every sentence you type builds confidence.' },
    { id: 'b23', cat: 'beginner', text: 'Short, focused practice works wonders.' },
    { id: 'b24', cat: 'beginner', text: 'Patience will bring steady improvement.' },
    { id: 'b25', cat: 'beginner', text: 'Find your rhythm and let your thoughts flow.' },
    { id: 'b26', cat: 'beginner', text: 'Quiet hands make fewer typing mistakes.' },
    { id: 'b27', cat: 'beginner', text: 'Keep a light touch on mechanical keys.' },
    { id: 'b28', cat: 'beginner', text: 'Small wins quickly build into strong habits.' },

    // --- INTERMEDIATE (Medium sentences, natural prose) ---
    { id: 'i01', cat: 'intermediate', text: 'Typing becomes easier with regular practice and focused attention.' },
    { id: 'i02', cat: 'intermediate', text: 'Professional typing requires patience, timing, and consistent focus.' },
    { id: 'i03', cat: 'intermediate', text: 'Strong keyboard habits reduce common mistakes and save valuable time.' },
    { id: 'i04', cat: 'intermediate', text: 'Comfortable practice sessions make long-term muscle memory development easier.' },
    { id: 'i05', cat: 'intermediate', text: 'Slight mistakes happen, but steady correction leads to genuine progress.' },
    { id: 'i06', cat: 'intermediate', text: 'The best way to improve is to type consistently rather than rushing.' },
    { id: 'i07', cat: 'intermediate', text: 'Clear focus helps you notice subtle patterns and improve much faster.' },
    { id: 'i08', cat: 'intermediate', text: 'Good typing skills help you work faster and communicate more effectively.' },
    { id: 'i09', cat: 'intermediate', text: 'Strong attention to detail makes every keystroke clean and precise.' },
    { id: 'i10', cat: 'intermediate', text: 'The most productive workflow is built on steady rhythm and calm concentration.' },
    { id: 'i11', cat: 'intermediate', text: 'Learning keyboard patterns helps reduce hand strain during long work days.' },
    { id: 'i12', cat: 'intermediate', text: 'Most professionals type noticeably faster when they avoid looking down.' },
    { id: 'i13', cat: 'intermediate', text: 'A comfortable desk setup encourages upright posture and fewer fatigue errors.' },
    { id: 'i14', cat: 'intermediate', text: 'Confidence grows as your fingers anticipate the next word before you think it.' },
    { id: 'i15', cat: 'intermediate', text: 'Developing a steady rhythm reduces hesitation and keeps your output flowing.' },
    { id: 'i16', cat: 'intermediate', text: 'Typing with clear intention helps you stay accurate even under tight deadlines.' },
    { id: 'i17', cat: 'intermediate', text: 'Your words flow better when your shoulders stay relaxed and aligned.' },
    { id: 'i18', cat: 'intermediate', text: 'Testing your skills often is the most reliable way to track weekly progress.' },
    { id: 'i19', cat: 'intermediate', text: 'Crisp, accurate typing is valuable in school, corporate work, and writing.' },
    { id: 'i20', cat: 'intermediate', text: 'Progress expands when you fix typos immediately without breaking your rhythm.' },
    { id: 'i21', cat: 'intermediate', text: 'Challenge yourself with fresh text passages to keep your brain fully engaged.' },
    { id: 'i22', cat: 'intermediate', text: 'Keyboard fluency turns writing from a mechanical task into pure creativity.' },
    { id: 'i23', cat: 'intermediate', text: 'Precision matters in both creative storytelling and analytical reports.' },
    { id: 'i24', cat: 'intermediate', text: 'When you type with calm intention, your speed and accuracy rise together.' },
    { id: 'i25', cat: 'intermediate', text: 'The goal is not raw speed alone, but confident control over every keystroke.' },
    { id: 'i26', cat: 'intermediate', text: 'Smart practice balances speed drills with careful, deliberate accuracy drills.' },
    { id: 'i27', cat: 'intermediate', text: 'Smooth transitions between letters require balanced finger dexterity.' },
    { id: 'i28', cat: 'intermediate', text: 'Typing with purpose makes everyday computer tasks feel lighter and effortless.' },

    // --- ADVANCED (Punctuation, numbers, long passages) ---
    { id: 'a01', cat: 'advanced', text: 'Learning to type accurately, quickly, and confidently is an indispensable 21st-century skill.' },
    { id: 'a02', cat: 'advanced', text: 'Why does practice matter so much? Because repeated effort transforms conscious strain into seamless habit.' },
    { id: 'a03', cat: 'advanced', text: 'Numbers like 42, 7, 365, and 99 often appear across quarterly financial spreadsheets and audit reports.' },
    { id: 'a04', cat: 'advanced', text: 'Use commas, colons, hyphens, and apostrophes thoughtfully; punctuation errors disrupt reader comprehension.' },
    { id: 'a05', cat: 'advanced', text: 'The project manager requested a polished prototype, a $15,000 budget breakdown, and an October 12th launch schedule.' },
    { id: 'a06', cat: 'advanced', text: 'Don’t forget the semicolon, colon, and exclamation mark when refining complex manuscript drafts!' },
    { id: 'a07', cat: 'advanced', text: 'In fast-paced environments, typing at 85 WPM with 98% accuracy gives you a tremendous competitive advantage.' },
    { id: 'a08', cat: 'advanced', text: 'Maintaining high concentration across 10-minute drills separates casual typists from seasoned professionals.' },
    { id: 'a09', cat: 'advanced', text: 'Even minor hesitation around symbols—such as @, #, $, %, and &—can reduce your overall rhythm by up to 30%.' },
    { id: 'a10', cat: 'advanced', text: 'A balanced routine of daily practice, deliberate correction, and weekly benchmarking yields lasting excellence.' },
    { id: 'a11', cat: 'advanced', text: 'Careful attention to capitalization, quotes: "like this one", and parentheses (for side notes) builds thorough mastery.' },
    { id: 'a12', cat: 'advanced', text: 'Speed without precision is merely disorganized noise; true craftsmanship pairs swift execution with clean results.' },
    { id: 'a13', cat: 'advanced', text: 'In modern remote workplaces, clear written messages often substitute for in-person conversations and phone calls.' },
    { id: 'a14', cat: 'advanced', text: 'Typing across varied text genres—academic essays, technical manuals, and creative prose—broadens your adaptability.' },
    { id: 'a15', cat: 'advanced', text: 'Fluency in touch typing allows you to focus 100% of your cognitive bandwidth on solving difficult problems.' },
    { id: 'a16', cat: 'advanced', text: 'Between 1995 and 2026, keyboard interfaces remained the primary conduit between human thought and digital creation.' },
    { id: 'a17', cat: 'advanced', text: 'When editing complex legal contracts, every comma, clause, and subsection number must be typed with total precision.' },
    { id: 'a18', cat: 'advanced', text: 'Observe how seasoned authors balance rapid drafting sprints with meticulous, sentence-by-sentence proofreading.' },
    { id: 'a19', cat: 'advanced', text: 'Quick brown foxes and lazy dogs aside, varied vocabulary tests your lesser-used fingers like the pinky and ring.' },
    { id: 'a20', cat: 'advanced', text: 'Real progress emerges when you track your mistakes, identify weak letter pairs, and isolate them for targeted drills.' },
    { id: 'a21', cat: 'advanced', text: 'Is it better to type 100 words with 80% accuracy, or 75 words with 99% accuracy? Precision always wins the test.' },
    { id: 'a22', cat: 'advanced', text: 'Quality input matters immensely when producing documentation, publishing papers, or configuring production systems.' },
    { id: 'a23', cat: 'advanced', text: 'Every keystroke reflects your mental clarity; steady breathing prevents finger tightness during demanding typing sprints.' },
    { id: 'a24', cat: 'advanced', text: 'By setting clear milestones—such as reaching 70 WPM by next month—you keep motivation high and progress tangible.' },
    { id: 'a25', cat: 'advanced', text: 'Mastering the top number row without glancing down is one of the most rewarding milestones for advanced typists.' },
    { id: 'a26', cat: 'advanced', text: 'Smooth ergonomics, a well-cushioned wrist rest, and proper monitor height protect your hands over decades of typing.' },

    // --- PROGRAMMING / TECH (Code, SQL, databases, commands) ---
    { id: 'p01', cat: 'programming', text: 'Modern developers spend hours writing, testing, reviewing, and debugging robust software applications.' },
    { id: 'p02', cat: 'programming', text: 'The API response returned HTTP status 200 OK with a JSON payload containing 150 customer records.' },
    { id: 'p03', cat: 'programming', text: 'Developers frequently use Git commands like `git status`, `git commit -m "feat: add auth"`, and `git push origin main`.' },
    { id: 'p04', cat: 'programming', text: 'const calculateWPM = (chars, minutes) => Math.round((chars / 5) / minutes);' },
    { id: 'p05', cat: 'programming', text: 'Relational databases use SQL queries with SELECT, JOIN, WHERE, and GROUP BY to aggregate complex datasets.' },
    { id: 'p06', cat: 'programming', text: 'Responsive web design relies on CSS media queries, flexbox containers, and responsive grid layouts.' },
    { id: 'p07', cat: 'programming', text: 'Version 2.4.0 introduced cleaner modular architecture, zero-dependency state stores, and faster bundle times.' },
    { id: 'p08', cat: 'programming', text: 'TypeScript enforces static type safety, reducing unexpected runtime exceptions across enterprise codebases.' },
    { id: 'p09', cat: 'programming', text: 'Asynchronous functions in JavaScript utilize async/await syntax to handle Promises cleanly without callback hell.' },
    { id: 'p10', cat: 'programming', text: 'The debugging session resolved a memory leak in the WebSocket listener before deployment to Cloud Run.' },
    { id: 'p11', cat: 'programming', text: 'Clean documentation, unit test suites, and strict linting rules keep large engineering teams aligned.' },
    { id: 'p12', cat: 'programming', text: 'Continuous integration pipelines automatically build, test, and containerize microservices using Docker.' },
    { id: 'p13', cat: 'programming', text: 'A RESTful API utilizes GET, POST, PUT, and DELETE methods to manage resources across standard endpoints.' },
    { id: 'p14', cat: 'programming', text: 'Database indexes significantly accelerate SELECT queries on indexed columns like user_id and email.' },
    { id: 'p15', cat: 'programming', text: 'Backend services often cache frequently requested data in Redis to achieve sub-millisecond response latencies.' },
    { id: 'p16', cat: 'programming', text: 'Secure applications hash user passwords with bcrypt and store session credentials in HttpOnly cookies.' },
    { id: 'p17', cat: 'programming', text: 'Frontend performance optimization includes code-splitting, lazy loading images, and tree-shaking dead code.' },
    { id: 'p18', cat: 'programming', text: 'GraphQL schemas define query types, mutations, and subscriptions to deliver exact data requirements.' },
    { id: 'p19', cat: 'programming', text: 'Object-oriented programming emphasizes encapsulation, inheritance, polymorphism, and abstraction.' },
    { id: 'p20', cat: 'programming', text: 'Modern web browsers execute JavaScript via high-speed just-in-time (JIT) compilation engines like V8.' },
    { id: 'p21', cat: 'programming', text: 'Cloud-native infrastructure uses Kubernetes orchestration to scale pods automatically based on CPU traffic.' },
    { id: 'p22', cat: 'programming', text: 'Writing clean code means choosing expressive variable names, single-responsibility functions, and early returns.' },
    { id: 'p23', cat: 'programming', text: 'The serverless endpoint cold start latency was reduced to under 45ms after upgrading the runtime version.' },
    { id: 'p24', cat: 'programming', text: 'When debugging network issues, check browser DevTools, CORS headers, TLS handshakes, and DNS resolution.' },
    { id: 'p25', cat: 'programming', text: 'Distributed systems implement exponential backoff algorithms when retrying idempotent external requests.' }
  ];

  // =========================================================
  // 2. DOM ELEMENT REFERENCES
  // =========================================================
  // Navigation
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const mobileToggleBtn = document.getElementById('mobileToggleBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const pageViews = document.querySelectorAll('.page-view');

  // Typing Test Elements
  const promptDisplay = document.getElementById('promptDisplay');
  const promptWrapper = document.getElementById('promptWrapper');
  const userInput = document.getElementById('userInput');
  const wpmSpan = document.getElementById('wpm');
  const accuracySpan = document.getElementById('accuracy');
  const timerSpan = document.getElementById('timer');
  const resetBtn = document.getElementById('resetBtn');
  const showResultBtn = document.getElementById('showResultBtn');
  const progressBarFill = document.getElementById('progressBarFill');
  const progressPercentText = document.getElementById('progressPercentText');
  const categoryPills = document.querySelectorAll('.category-pill');
  const charCountMeta = document.getElementById('charCountMeta');
  const categoryMeta = document.getElementById('categoryMeta');

  // Result Popup Elements
  const popup = document.getElementById('resultPopup');
  const closePopupBtn = document.getElementById('closePopupBtn');
  const popupResetBtn = document.getElementById('popupResetBtn');
  const speedBadge = document.getElementById('speedBadge');
  const popupWpm = document.getElementById('popupWpm');
  const popupAcc = document.getElementById('popupAcc');
  const popupTime = document.getElementById('popupTime');
  const barSpeed = document.getElementById('barSpeed');
  const barAcc = document.getElementById('barAcc');
  const barConsistency = document.getElementById('barConsistency');

  // Interactive Mini Hero Test
  const miniInput = document.getElementById('miniInput');
  const miniPrompt = document.getElementById('miniPrompt');

  // Contact Form Elements
  const contactForm = document.getElementById('contactForm');
  const formAlert = document.getElementById('formAlert');
  const contactSuccess = document.getElementById('contactSuccess');
  const resetContactFormBtn = document.getElementById('resetContactFormBtn');

  // =========================================================
  // 3. STATE MANAGEMENT
  // =========================================================
  let currentCategory = 'all';
  let currentPhraseObj = null;
  let currentQuote = '';
  let timer = 60;
  let timerInterval = null;
  let testActive = false;
  let testFinished = false;
  let startTime = null;
  let mistakes = 0;
  let totalTyped = 0;

  // =========================================================
  // 4. NAVIGATION ROUTER
  // =========================================================
  function navigateTo(pageId) {
    pageViews.forEach(view => {
      if (view.id === `${pageId}-page`) {
        view.classList.add('active');
      } else {
        view.classList.remove('active');
      }
    });

    navLinks.forEach(link => {
      if (link.dataset.page === pageId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    if (mobileMenu) {
      mobileMenu.classList.remove('open');
    }

    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (pageId === 'typing-test' && userInput) {
      setTimeout(() => userInput.focus(), 150);
    }
  }

  // Bind navigation clicks
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const targetPage = this.getAttribute('data-nav');
      navigateTo(targetPage);
    });
  });

  if (mobileToggleBtn && mobileMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  // Handle URL hash on load
  function initRouteFromHash() {
    const hash = window.location.hash.replace('#', '');
    const validPages = ['home', 'typing-test', 'services', 'about', 'contact'];
    if (validPages.includes(hash)) {
      navigateTo(hash);
    } else {
      navigateTo('home');
    }
  }

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'typing-test', 'services', 'about', 'contact'].includes(hash)) {
      navigateTo(hash);
    }
  });

  // =========================================================
  // 5. TYPING ENGINE LOGIC (Completely Preserved & Enhanced)
  // =========================================================
  function getRandomPhrase(category, previousId) {
    let pool = PHRASES;
    if (category && category !== 'all') {
      pool = PHRASES.filter(p => p.cat === category);
    }

    if (pool.length === 0) pool = PHRASES;
    if (pool.length === 1) return pool[0];

    let chosen = pool[Math.floor(Math.random() * pool.length)];
    let attempts = 0;
    while (chosen.id === previousId && attempts < 10) {
      chosen = pool[Math.floor(Math.random() * pool.length)];
      attempts++;
    }
    return chosen;
  }

  function renderPrompt(quote) {
    if (!promptDisplay) return;
    let html = '';
    for (let i = 0; i < quote.length; i++) {
      const ch = quote[i] === ' ' ? '&nbsp;' : escapeHtml(quote[i]);
      html += `<span class="char" data-index="${i}">${ch}</span>`;
    }
    promptDisplay.innerHTML = html;

    if (promptDisplay.firstChild) {
      promptDisplay.firstChild.classList.add('current');
    }

    if (charCountMeta) charCountMeta.textContent = `${quote.length} chars`;
    if (categoryMeta && currentPhraseObj) {
      categoryMeta.textContent = currentPhraseObj.cat;
    }
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getSpeedClass(wpm) {
    if (wpm < 30) return { label: 'SLOW', class: 'speed-slow' };
    if (wpm < 60) return { label: 'MEDIUM', class: 'speed-medium' };
    return { label: 'FAST', class: 'speed-fast' };
  }

  function getExactResult() {
    if (!startTime && totalTyped === 0) {
      return { wpm: 0, acc: 100, timeUsed: 0, correct: 0, mistakes: 0, total: 0, speedLabel: 'SLOW', speedClass: 'speed-slow' };
    }

    const elapsedSec = Math.max(1, 60 - timer);
    const elapsedMin = elapsedSec / 60;
    const correctCount = Math.max(0, totalTyped - mistakes);
    const rawAcc = totalTyped > 0 ? (correctCount / totalTyped) * 100 : 100;
    const finalAcc = Math.min(100, Math.round(rawAcc));
    let finalWpm = 0;

    if (elapsedMin > 0 && correctCount > 0) {
      finalWpm = Math.round((correctCount / 5) / elapsedMin);
    }

    const speed = getSpeedClass(finalWpm);
    return {
      wpm: finalWpm,
      acc: finalAcc,
      timeUsed: elapsedSec,
      correct: correctCount,
      mistakes: mistakes,
      total: totalTyped,
      speedLabel: speed.label,
      speedClass: speed.class
    };
  }

  function updateStats() {
    if (!testActive || totalTyped === 0) {
      if (wpmSpan) wpmSpan.textContent = '0';
      if (accuracySpan) accuracySpan.textContent = '100';
      return;
    }

    const correctTyped = Math.max(0, totalTyped - mistakes);
    const acc = totalTyped > 0 ? (correctTyped / totalTyped) * 100 : 100;
    if (accuracySpan) accuracySpan.textContent = Math.min(100, Math.round(acc));

    if (startTime && testActive && !testFinished) {
      const minutes = (Date.now() - startTime) / 60000;
      if (minutes > 0.01) {
        const grossWpm = (correctTyped / 5) / minutes;
        if (wpmSpan) wpmSpan.textContent = Math.max(0, Math.round(grossWpm));
      } else {
        if (wpmSpan) wpmSpan.textContent = '0';
      }
    } else if (testFinished && startTime) {
      const res = getExactResult();
      if (wpmSpan) wpmSpan.textContent = res.wpm;
      if (accuracySpan) accuracySpan.textContent = res.acc;
    }
  }

  function updateProgressBar() {
    if (!currentQuote || currentQuote.length === 0) return;
    const percent = Math.min(100, Math.round((totalTyped / currentQuote.length) * 100));
    if (progressBarFill) progressBarFill.style.width = `${percent}%`;
    if (progressPercentText) progressPercentText.textContent = `${percent}%`;
  }

  function showResultPopup() {
    const res = getExactResult();
    if (popupWpm) popupWpm.textContent = res.wpm;
    if (popupAcc) popupAcc.textContent = res.acc;
    if (popupTime) popupTime.textContent = res.timeUsed;

    if (speedBadge) {
      speedBadge.textContent = res.speedLabel;
      speedBadge.className = `speed-class-badge ${res.speedClass}`;
    }

    let speedPercent = Math.min(100, Math.round((res.wpm / 120) * 100));
    if (barSpeed) {
      barSpeed.style.width = `${speedPercent}%`;
      barSpeed.textContent = `${speedPercent}%`;
    }
    if (barAcc) {
      barAcc.style.width = `${res.acc}%`;
      barAcc.textContent = `${res.acc}%`;
    }

    let consistency = res.total > 0 ? 100 - Math.round((res.mistakes / res.total) * 100) : 100;
    consistency = Math.max(0, Math.min(100, consistency));
    if (barConsistency) {
      barConsistency.style.width = `${consistency}%`;
      barConsistency.textContent = `${consistency}%`;
    }

    if (popup) popup.classList.add('show');
  }

  function fullReset(newCategory) {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }

    if (newCategory) {
      currentCategory = newCategory;
    }

    currentPhraseObj = getRandomPhrase(currentCategory, currentPhraseObj ? currentPhraseObj.id : null);
    currentQuote = currentPhraseObj.text;
    renderPrompt(currentQuote);

    if (userInput) userInput.value = '';
    testActive = false;
    testFinished = false;
    startTime = null;
    timer = 60;
    mistakes = 0;
    totalTyped = 0;

    if (timerSpan) {
      timerSpan.textContent = timer;
      timerSpan.classList.remove('warning');
    }
    if (wpmSpan) wpmSpan.textContent = '0';
    if (accuracySpan) accuracySpan.textContent = '100';

    updateProgressBar();
    if (popup) popup.classList.remove('show');
    if (userInput) userInput.focus();
  }

  function handleTyping() {
    if (testFinished || !userInput) return;

    const inputVal = userInput.value;
    const quoteLen = currentQuote.length;

    // Start timer on first character
    if (!testActive && inputVal.length > 0) {
      testActive = true;
      startTime = Date.now();
      if (timerInterval) clearInterval(timerInterval);

      timerInterval = setInterval(() => {
        if (testFinished) return;
        if (timer > 0) {
          timer -= 1;
          if (timerSpan) {
            timerSpan.textContent = timer;
            if (timer <= 10) timerSpan.classList.add('warning');
            else timerSpan.classList.remove('warning');
          }
          updateStats();

          if (timer === 0) {
            testFinished = true;
            testActive = false;
            if (timerInterval) clearInterval(timerInterval);
            timerInterval = null;
            document.querySelectorAll('.char.current').forEach(c => c.classList.remove('current'));
            updateStats();
            showResultPopup();
          }
        }
      }, 1000);
    }

    const charSpans = document.querySelectorAll('#promptDisplay .char');
    charSpans.forEach(span => span.classList.remove('correct', 'incorrect', 'current'));

    let mismatch = 0;
    const minLen = Math.min(inputVal.length, quoteLen);
    for (let i = 0; i < minLen; i++) {
      if (inputVal[i] === currentQuote[i]) {
        charSpans[i]?.classList.add('correct');
      } else {
        charSpans[i]?.classList.add('incorrect');
        mismatch++;
      }
    }

    if (inputVal.length > quoteLen) {
      mismatch += (inputVal.length - quoteLen);
    }

    if (!testFinished && inputVal.length < quoteLen) {
      charSpans[inputVal.length]?.classList.add('current');
    }

    mistakes = mismatch;
    totalTyped = inputVal.length;
    updateStats();
    updateProgressBar();

    // Check completion condition
    if (!testFinished && inputVal.length === quoteLen) {
      testFinished = true;
      testActive = false;
      if (timerInterval) clearInterval(timerInterval);
      timerInterval = null;
      updateStats();
      showResultPopup();
    }
  }

  // Category Selector Pills
  categoryPills.forEach(pill => {
    pill.addEventListener('click', function () {
      categoryPills.forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      const cat = this.getAttribute('data-cat');
      fullReset(cat);
    });
  });

  // Typing event listeners
  if (userInput) {
    userInput.addEventListener('input', handleTyping);
    userInput.addEventListener('paste', (e) => e.preventDefault());
  }

  if (promptWrapper) {
    promptWrapper.addEventListener('click', () => {
      if (userInput) userInput.focus();
    });
  }

  if (resetBtn) resetBtn.addEventListener('click', () => fullReset());

  if (closePopupBtn) {
    closePopupBtn.addEventListener('click', () => {
      if (popup) popup.classList.remove('show');
    });
  }

  if (popupResetBtn) {
    popupResetBtn.addEventListener('click', () => {
      fullReset();
      if (popup) popup.classList.remove('show');
    });
  }

  if (showResultBtn) {
    showResultBtn.addEventListener('click', () => {
      if (testFinished || timer < 60 || totalTyped > 0) {
        showResultPopup();
      } else {
        alert('Start typing first to measure your speed.');
      }
    });
  }

  // =========================================================
  // 6. MINI HERO INTERACTIVE WARM-UP
  // =========================================================
  const samplePhrase = "TypeBurst delivers smooth, reliable typing drills.";
  function initMiniDemo() {
    if (!miniPrompt || !miniInput) return;

    function renderMini(val) {
      let html = '';
      for (let i = 0; i < samplePhrase.length; i++) {
        const c = samplePhrase[i] === ' ' ? '&nbsp;' : escapeHtml(samplePhrase[i]);
        if (i < val.length) {
          const isMatch = val[i] === samplePhrase[i];
          html += `<span style="color:${isMatch ? '#059669' : '#dc2626'}; font-weight:bold;">${c}</span>`;
        } else if (i === val.length) {
          html += `<span style="color:#7c3aed; border-bottom:2px solid #7c3aed; font-weight:bold;">${c}</span>`;
        } else {
          html += `<span style="color:#94a3b8;">${c}</span>`;
        }
      }
      miniPrompt.innerHTML = html;
    }

    renderMini('');
    miniInput.addEventListener('input', (e) => renderMini(e.target.value));
  }

  // =========================================================
  // 7. CONTACT FORM HANDLING
  // =========================================================
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value.trim();
      const email = document.getElementById('contactEmail')?.value.trim();
      const message = document.getElementById('contactMessage')?.value.trim();

      if (!name || !email || !message) {
        if (formAlert) {
          formAlert.textContent = 'Please fill in all required fields (Name, Email, Message).';
          formAlert.style.display = 'block';
        }
        return;
      }

      if (!email.includes('@') || !email.includes('.')) {
        if (formAlert) {
          formAlert.textContent = 'Please enter a valid email address.';
          formAlert.style.display = 'block';
        }
        return;
      }

      if (formAlert) formAlert.style.display = 'none';

      // Simulate sending
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending...</span>';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Send Message</span>';
        }
        contactForm.style.display = 'none';
        if (contactSuccess) contactSuccess.style.display = 'block';
        contactForm.reset();
      }, 700);
    });
  }

  if (resetContactFormBtn) {
    resetContactFormBtn.addEventListener('click', () => {
      if (contactSuccess) contactSuccess.style.display = 'none';
      if (contactForm) contactForm.style.display = 'block';
    });
  }

  // =========================================================
  // 8. INITIALIZATION
  // =========================================================
  initRouteFromHash();
  fullReset('all');
  initMiniDemo();

})();
