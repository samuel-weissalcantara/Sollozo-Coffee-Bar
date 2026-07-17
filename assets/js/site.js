/* =========================================================================
   Sollozzo Coffee Bar — shared site script
   i18n (DE default / EN toggle), nav, reveals, and the small interactive
   widgets used across pages (menu tabs, lightbox, FAQ). Brand theme (colors,
   fonts, shadows) is defined in assets/css/input.css and compiled to
   assets/css/tailwind.css — see README for the build step.
   ========================================================================= */

/* ---- i18n dictionary ---------------------------------------------------
   Every translatable node carries data-i18n="key". Text nodes are replaced
   with dict[lang][key]. Attributes (e.g. placeholder, aria-label) use
   data-i18n-attr='{"placeholder":"key"}'.
------------------------------------------------------------------------ */
const dict = {
  de: {
    'nav.home': 'Start',
    'nav.menu': 'Speisekarte',
    'nav.story': 'Geschichte',
    'nav.visit': 'Besuch & Kontakt',
    'nav.cta': 'Besuchen',
    'skip.content': 'Zum Inhalt springen',

    'hero.eyebrow': 'Hanse-Viertel, Hamburg',
    'hero.title1': 'Kaffee, der',
    'hero.title2': 'Erinnerungen weckt.',
    'hero.sub': 'Handverlesene Bohnen, in kleinen Chargen geröstet, serviert mit ruhiger Handwerkskunst mitten im Hanse-Viertel.',
    'hero.cta1': 'Speisekarte ansehen',
    'hero.cta2': 'Route planen',
    'hero.rating': '4,9 von 5 · über 60 Bewertungen',
    'hero.scroll': 'Entdecken',

    'usp.eyebrow': 'Unsere Philosophie',
    'usp.title': 'Voller Geschmack, nie zu dünn, nie zu bitter.',
    'usp.1.title': 'Handverlesen',
    'usp.1.text': 'Nur ausgesuchte Rohkaffees, sorgfältig geprüft, Charge für Charge.',
    'usp.2.title': 'Kleine Röstungen',
    'usp.2.text': 'Frisch in kleinen Mengen geröstet — für maximale Aromatiefe in jeder Tasse.',
    'usp.3.title': 'Mokka-Tradition',
    'usp.3.text': 'Ursprünglicher Mokka-Genuss, verwurzelt in jahrzehntelanger Röstkunst.',
    'usp.4.title': 'Kaffee & Düfte',
    'usp.4.text': 'Eine Bar, zwei Sinne: Kaffeearomen treffen auf ausgesuchte Parfums.',

    'feature.eyebrow': 'Unsere Signature',
    'feature.title': 'Der perfekte Mokka —\nso, wie er sein sollte.',
    'feature.text': 'Seit jeher glauben wir an einen Kaffee mit vollem Körper: kräftig genug, um zu wecken, rund genug, um zu genießen. Unsere Barista verfeinern jede Tasse mit derselben Sorgfalt, mit der die Bohne geröstet wurde.',
    'feature.point1': 'Espresso, Cappuccino, Cortado & Filterkaffee',
    'feature.point2': 'Hausgemachte Sirupe & saisonale Spezialitäten',
    'feature.point3': 'Pflanzliche Milchalternativen auf Wunsch',
    'feature.cta': 'Zur Speisekarte',

    'perfume.eyebrow': 'Ein zweiter Sinn',
    'perfume.title': 'Kaffeebar trifft Parfümerie.',
    'perfume.text': 'Was Sollozzo einzigartig macht: Neben Espresso und Mokka laden wir zum Entdecken feiner Düfte ein — ein ruhiger Moment für Nase und Gaumen zugleich, mitten im Trubel des Hanse-Viertels.',
    'perfume.cta': 'Mehr über uns',

    'menu.eyebrow': 'Ein Auszug',
    'menu.title': 'Von der Speisekarte',
    'menu.text': 'Eine kleine Auswahl unserer beliebtesten Kreationen — die vollständige Karte gibt es hier.',
    'menu.cta': 'Ganze Karte ansehen',
    'menu.item1.name': 'Sollozzo Signature Mokka',
    'menu.item1.text': 'Unser Hausmokka — kräftig, samtig, unverkennbar.',
    'menu.item2.name': 'Cappuccino Classico',
    'menu.item2.text': 'Perfekt aufgeschäumte Milch, feincremiger Espresso.',
    'menu.item3.name': 'Cortado & Gebäck',
    'menu.item3.text': 'Kleiner Kaffee, große Wirkung — mit frischem Gebäck.',

    'reviews.eyebrow': 'Was Gäste sagen',
    'reviews.title': '4,9 von 5 Sternen',
    'reviews.1.text': '„Der beste Cappuccino im Hanse-Viertel — und der Barista erklärt mit echter Leidenschaft, was die Bohne besonders macht.“',
    'reviews.1.name': 'Julia M.',
    'reviews.2.text': '„Schneller, freundlicher Service und ein Mokka, der an früher erinnert. Wir kommen jede Woche wieder.“',
    'reviews.2.name': 'Tobias R.',
    'reviews.3.text': '„Kaffee und Parfüm unter einem Dach — klingt ungewöhnlich, ergibt aber sofort Sinn, sobald man drinnen sitzt.“',
    'reviews.3.name': 'Sofia L.',

    'gallery.eyebrow': 'Impressionen',
    'gallery.title': 'Ein Blick in die Bar',

    'visitcta.eyebrow': 'Wir freuen uns auf Sie',
    'visitcta.title': 'Besuchen Sie uns im Hanse-Viertel.',
    'visitcta.text': 'Poststraße 33, 20354 Hamburg — nur wenige Schritte vom Jungfernstieg entfernt.',
    'visitcta.cta1': 'Route planen',
    'visitcta.cta2': 'Öffnungszeiten',

    'footer.address.title': 'Adresse',
    'footer.hours.title': 'Öffnungszeiten',
    'footer.hours.weekdays': 'Montag – Samstag',
    'footer.hours.time': '08:00 – 19:00 Uhr',
    'footer.hours.sunday': 'Sonntag',
    'footer.hours.closed': 'Geschlossen',
    'footer.follow.title': 'Folgen Sie uns',
    'footer.nav.title': 'Navigation',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.credit': 'Unabhängige Fan-/Konzeptseite · nicht der offizielle Onlineshop.',
    'footer.legal.impressum': 'Impressum',
    'footer.legal.privacy': 'Datenschutz',

    'map.load.title': 'Karte laden',
    'map.load.text': 'Beim Laden wird eine Verbindung zu Google Maps hergestellt und Daten an Google LLC (USA) übermittelt.',
    'map.load.button': 'Karte laden',

    'legal.impressum.title': 'Impressum',
    'legal.datenschutz.title': 'Datenschutzerklärung',

    'menupage.hero.eyebrow': 'Speisekarte',
    'menupage.hero.title': 'Handwerk in jeder Tasse.',
    'menupage.hero.text': 'Alle Preise sind illustrativ und dienen der Orientierung — für die aktuelle Karte besuchen Sie uns gern vor Ort.',
    'menupage.tab.hot': 'Heißgetränke',
    'menupage.tab.cold': 'Kalte Getränke',
    'menupage.tab.sweet': 'Süßes & Gebäck',
    'menupage.tab.beans': 'Bohnen & Zuhause',
    'menupage.illustrative': 'Illustrativer Preis',

    'storypage.hero.eyebrow': 'Unsere Geschichte',
    'storypage.hero.title': 'Vom Rohkaffee zur Tasse — mit Geduld erzählt.',
    'storypage.hero.text': 'Sollozzo Coffee Bar wurde aus einer einfachen Überzeugung geboren: guter Kaffee braucht Zeit, Sorgfalt und Neugier.',
    'storypage.s1.eyebrow': 'Der Name',
    'storypage.s1.title': 'Eine Hommage, kein Zufall',
    'storypage.s1.text': 'Der Name Sollozzo steht für Charakter und Beständigkeit — Eigenschaften, die wir auch unserem Kaffee wünschen: unverwechselbar, aber nie aufdringlich.',
    'storypage.s2.eyebrow': 'Die Röstung',
    'storypage.s2.title': 'Kleine Chargen, große Sorgfalt',
    'storypage.s2.text': 'Wir rösten bewusst in kleinen Mengen. So bleibt jede Bohne frisch, und wir können auf jede Charge einzeln eingehen — für ein Ergebnis, das nie dem Zufall überlassen wird.',
    'storypage.s3.eyebrow': 'Die Idee',
    'storypage.s3.title': 'Kaffee & Düfte',
    'storypage.s3.text': 'Die Kombination aus Kaffeebar und Parfümerie ist kein Gimmick, sondern eine Einladung: Beide Sinne — Geruch und Geschmack — verdienen denselben Anspruch an Qualität.',
    'storypage.s4.eyebrow': 'Die Menschen',
    'storypage.s4.title': 'Handwerk mit Gesicht',
    'storypage.s4.text': 'Unser Team lebt Gastfreundschaft: schneller, herzlicher Service und die Bereitschaft, jederzeit von der Bohne zu erzählen, aus der Ihre Tasse entstand.',
    'storypage.values.title': 'Was uns wichtig ist',
    'storypage.values.1': 'Qualität vor Tempo',
    'storypage.values.2': 'Ehrliche Herkunft',
    'storypage.values.3': 'Herzliche Gastfreundschaft',
    'storypage.values.4': 'Neugier auf Neues',

    'visitpage.hero.eyebrow': 'Besuch & Kontakt',
    'visitpage.hero.title': 'Wir freuen uns auf Ihren Besuch.',
    'visitpage.address.title': 'Adresse',
    'visitpage.hours.title': 'Öffnungszeiten',
    'visitpage.hours.mo': 'Montag – Freitag',
    'visitpage.hours.mo.time': '08:00 – 19:00 Uhr',
    'visitpage.hours.sa': 'Samstag',
    'visitpage.hours.sa.time': '09:00 – 18:00 Uhr',
    'visitpage.hours.so': 'Sonntag',
    'visitpage.hours.so.time': 'Geschlossen',
    'visitpage.directions.title': 'Anfahrt',
    'visitpage.directions.text': 'U- und S-Bahn Jungfernstieg (ca. 5 Gehminuten) · zahlreiche Parkhäuser in der Innenstadt.',
    'visitpage.map.cta': 'Route planen',
    'visitpage.contact.title': 'Kontakt',
    'visitpage.contact.text': 'Fragen zu Reservierungen, Events oder unserem Kaffee? Schreiben Sie uns gern.',
    'visitpage.faq.title': 'Häufige Fragen',
    'visitpage.faq.1.q': 'Nehmen Sie Reservierungen an?',
    'visitpage.faq.1.a': 'Für kleine Gruppen empfehlen wir eine kurze Nachricht vorab — Laufkundschaft ist jederzeit willkommen.',
    'visitpage.faq.2.q': 'Gibt es pflanzliche Milchalternativen?',
    'visitpage.faq.2.a': 'Ja, Hafer-, Mandel- und Sojamilch stehen auf Wunsch zur Verfügung.',
    'visitpage.faq.3.q': 'Kann ich Bohnen zum Mitnehmen kaufen?',
    'visitpage.faq.3.a': 'Selbstverständlich — fragen Sie an der Bar nach unserer aktuellen Röstauswahl.',
    'visitpage.faq.4.q': 'Ist die Bar barrierefrei zugänglich?',
    'visitpage.faq.4.a': 'Der Eingang ist ebenerdig; für Detailfragen kontaktieren Sie uns gern vorab.',
  },
  en: {
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.story': 'Story',
    'nav.visit': 'Visit & Contact',
    'nav.cta': 'Visit Us',
    'skip.content': 'Skip to content',

    'hero.eyebrow': 'Hanse-Viertel, Hamburg',
    'hero.title1': 'Coffee that',
    'hero.title2': 'stirs memory.',
    'hero.sub': 'Hand-picked beans, roasted in small batches, served with quiet craftsmanship in the heart of the Hanse-Viertel.',
    'hero.cta1': 'View the menu',
    'hero.cta2': 'Get directions',
    'hero.rating': '4.9 out of 5 · 60+ reviews',
    'hero.scroll': 'Discover',

    'usp.eyebrow': 'Our Philosophy',
    'usp.title': 'Full flavor — never too thin, never too bitter.',
    'usp.1.title': 'Hand-picked',
    'usp.1.text': 'Only selected green coffee, carefully vetted, batch by batch.',
    'usp.2.title': 'Small-batch roasted',
    'usp.2.text': 'Freshly roasted in small quantities for maximum depth in every cup.',
    'usp.3.title': 'Mokka tradition',
    'usp.3.text': 'Genuine mokka enjoyment, rooted in decades of roasting craft.',
    'usp.4.title': 'Coffee & scent',
    'usp.4.text': 'One bar, two senses: coffee aromas meet a curated perfumery.',

    'feature.eyebrow': 'Our Signature',
    'feature.title': 'The perfect mokka —\nthe way it should be.',
    'feature.text': 'We\'ve always believed in coffee with full body: bold enough to wake you, smooth enough to savor. Our baristas finish every cup with the same care the bean was roasted with.',
    'feature.point1': 'Espresso, cappuccino, cortado & filter coffee',
    'feature.point2': 'House-made syrups & seasonal specials',
    'feature.point3': 'Plant-based milk alternatives on request',
    'feature.cta': 'See the menu',

    'perfume.eyebrow': 'A second sense',
    'perfume.title': 'Coffee bar meets perfumery.',
    'perfume.text': 'What makes Sollozzo unique: alongside espresso and mokka, we invite you to discover fine fragrances — a quiet moment for nose and palate alike, right in the bustle of the Hanse-Viertel.',
    'perfume.cta': 'More about us',

    'menu.eyebrow': 'A preview',
    'menu.title': 'From the menu',
    'menu.text': 'A small selection of our most loved creations — see the full menu here.',
    'menu.cta': 'View full menu',
    'menu.item1.name': 'Sollozzo Signature Mokka',
    'menu.item1.text': 'Our house mokka — bold, velvety, unmistakable.',
    'menu.item2.name': 'Cappuccino Classico',
    'menu.item2.text': 'Perfectly frothed milk, silky-smooth espresso.',
    'menu.item3.name': 'Cortado & Pastry',
    'menu.item3.text': 'Small coffee, big impact — with fresh pastry.',

    'reviews.eyebrow': 'What guests say',
    'reviews.title': '4.9 out of 5 stars',
    'reviews.1.text': '"The best cappuccino in the Hanse-Viertel — and the barista explains what makes the bean special with real passion."',
    'reviews.1.name': 'Julia M.',
    'reviews.2.text': '"Fast, friendly service and a mokka that feels like the good old days. We come back every week."',
    'reviews.2.name': 'Tobias R.',
    'reviews.3.text': '"Coffee and perfume under one roof — sounds unusual, but makes instant sense once you sit down."',
    'reviews.3.name': 'Sofia L.',

    'gallery.eyebrow': 'Glimpses',
    'gallery.title': 'A look inside the bar',

    'visitcta.eyebrow': 'We\'d love to see you',
    'visitcta.title': 'Visit us in the Hanse-Viertel.',
    'visitcta.text': 'Poststraße 33, 20354 Hamburg — just steps from Jungfernstieg.',
    'visitcta.cta1': 'Get directions',
    'visitcta.cta2': 'Opening hours',

    'footer.address.title': 'Address',
    'footer.hours.title': 'Opening Hours',
    'footer.hours.weekdays': 'Monday – Saturday',
    'footer.hours.time': '8:00 AM – 7:00 PM',
    'footer.hours.sunday': 'Sunday',
    'footer.hours.closed': 'Closed',
    'footer.follow.title': 'Follow us',
    'footer.nav.title': 'Navigation',
    'footer.rights': 'All rights reserved.',
    'footer.credit': 'Independent concept site · not the official online shop.',
    'footer.legal.impressum': 'Legal Notice',
    'footer.legal.privacy': 'Privacy Policy',

    'map.load.title': 'Load map',
    'map.load.text': 'Loading the map connects to Google Maps and transmits data to Google LLC (USA).',
    'map.load.button': 'Load map',

    'legal.impressum.title': 'Legal Notice (Impressum)',
    'legal.datenschutz.title': 'Privacy Policy',

    'menupage.hero.eyebrow': 'Menu',
    'menupage.hero.title': 'Craft in every cup.',
    'menupage.hero.text': 'All prices are illustrative and for guidance only — visit us in person for the current menu.',
    'menupage.tab.hot': 'Hot Drinks',
    'menupage.tab.cold': 'Cold Drinks',
    'menupage.tab.sweet': 'Sweets & Pastry',
    'menupage.tab.beans': 'Beans & At Home',
    'menupage.illustrative': 'Illustrative price',

    'storypage.hero.eyebrow': 'Our Story',
    'storypage.hero.title': 'From green bean to cup — told with patience.',
    'storypage.hero.text': 'Sollozzo Coffee Bar was born from a simple belief: great coffee takes time, care, and curiosity.',
    'storypage.s1.eyebrow': 'The name',
    'storypage.s1.title': 'A homage, not a coincidence',
    'storypage.s1.text': 'The name Sollozzo stands for character and consistency — qualities we want in our coffee too: distinctive, but never overbearing.',
    'storypage.s2.eyebrow': 'The roast',
    'storypage.s2.title': 'Small batches, great care',
    'storypage.s2.text': 'We roast deliberately in small quantities. That keeps every bean fresh, and lets us tend to each batch individually — for a result that\'s never left to chance.',
    'storypage.s3.eyebrow': 'The idea',
    'storypage.s3.title': 'Coffee & scent',
    'storypage.s3.text': 'Pairing a coffee bar with a perfumery isn\'t a gimmick — it\'s an invitation. Both senses, smell and taste, deserve the same standard of quality.',
    'storypage.s4.eyebrow': 'The people',
    'storypage.s4.title': 'Craft with a face',
    'storypage.s4.text': 'Our team lives hospitality: fast, warm service, and always ready to tell you about the bean behind your cup.',
    'storypage.values.title': 'What matters to us',
    'storypage.values.1': 'Quality over speed',
    'storypage.values.2': 'Honest sourcing',
    'storypage.values.3': 'Warm hospitality',
    'storypage.values.4': 'Curiosity for what\'s new',

    'visitpage.hero.eyebrow': 'Visit & Contact',
    'visitpage.hero.title': 'We look forward to your visit.',
    'visitpage.address.title': 'Address',
    'visitpage.hours.title': 'Opening Hours',
    'visitpage.hours.mo': 'Monday – Friday',
    'visitpage.hours.mo.time': '8:00 AM – 7:00 PM',
    'visitpage.hours.sa': 'Saturday',
    'visitpage.hours.sa.time': '9:00 AM – 6:00 PM',
    'visitpage.hours.so': 'Sunday',
    'visitpage.hours.so.time': 'Closed',
    'visitpage.directions.title': 'Getting here',
    'visitpage.directions.text': 'Jungfernstieg U-/S-Bahn station (approx. 5 min walk) · several parking garages nearby downtown.',
    'visitpage.map.cta': 'Get directions',
    'visitpage.contact.title': 'Contact',
    'visitpage.contact.text': 'Questions about reservations, events, or our coffee? Feel free to write to us.',
    'visitpage.faq.title': 'Frequently Asked Questions',
    'visitpage.faq.1.q': 'Do you take reservations?',
    'visitpage.faq.1.a': 'For larger groups, a short message beforehand helps — walk-ins are always welcome.',
    'visitpage.faq.2.q': 'Do you offer plant-based milk?',
    'visitpage.faq.2.a': 'Yes, oat, almond, and soy milk are available on request.',
    'visitpage.faq.3.q': 'Can I buy beans to take home?',
    'visitpage.faq.3.a': 'Of course — ask at the bar about our current roast selection.',
    'visitpage.faq.4.q': 'Is the bar wheelchair accessible?',
    'visitpage.faq.4.a': 'The entrance is level with the street; feel free to contact us ahead for specifics.',
  },
};

/* ---- language handling -------------------------------------------------*/
function getLang() {
  return localStorage.getItem('sollozzo-lang') || 'de';
}

function applyTranslations(lang) {
  const d = dict[lang] || dict.de;
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (d[key] !== undefined) {
      el.innerHTML = d[key].replace(/\n/g, '<br>');
    }
  });

  // long-form bilingual content (legal pages) that isn't run through the
  // dict lookup — each language's block is authored directly in the HTML.
  document.querySelectorAll('[data-lang-block]').forEach((el) => {
    el.classList.toggle('hidden', el.getAttribute('data-lang-block') !== lang);
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    try {
      const map = JSON.parse(el.getAttribute('data-i18n-attr'));
      Object.entries(map).forEach(([attr, key]) => {
        if (d[key] !== undefined) el.setAttribute(attr, d[key]);
      });
    } catch (e) {
      /* ignore malformed attr map */
    }
  });

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.setAttribute('aria-pressed', btn.getAttribute('data-lang-btn') === lang ? 'true' : 'false');
  });
}

function setLang(lang) {
  localStorage.setItem('sollozzo-lang', lang);
  applyTranslations(lang);
}

/* ---- nav: scroll state + mobile menu -----------------------------------*/
function initNav() {
  const header = document.querySelector('[data-site-header]');
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 12) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const toggle = document.querySelector('[data-mobile-toggle]');
  const panel = document.querySelector('[data-mobile-panel]');
  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      const isOpen = panel.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.classList.toggle('overflow-hidden', isOpen);
    });
    panel.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        panel.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('overflow-hidden');
      });
    });
  }
}

/* ---- scroll reveal -------------------------------------------------------*/
function initReveals() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  items.forEach((el) => io.observe(el));
}

/* ---- menu filter tabs (menu.html) ---------------------------------------*/
function initMenuTabs() {
  const tabs = document.querySelectorAll('[data-menu-tab]');
  const panels = document.querySelectorAll('[data-menu-panel]');
  if (!tabs.length) return;
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-menu-tab');
      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      panels.forEach((p) => {
        p.classList.toggle('hidden', p.getAttribute('data-menu-panel') !== target);
      });
    });
  });
}

/* ---- gallery lightbox -----------------------------------------------------*/
function initLightbox() {
  const triggers = document.querySelectorAll('[data-lightbox-trigger]');
  const overlay = document.querySelector('[data-lightbox]');
  const img = document.querySelector('[data-lightbox-img]');
  const closeBtn = document.querySelector('[data-lightbox-close]');
  if (!triggers.length || !overlay || !img) return;

  const open = (src, alt) => {
    img.setAttribute('src', src);
    img.setAttribute('alt', alt || '');
    overlay.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    closeBtn && closeBtn.focus();
  };
  const close = () => {
    overlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  triggers.forEach((t) => {
    t.addEventListener('click', () => {
      const full = t.getAttribute('data-lightbox-trigger');
      const alt = t.querySelector('img') ? t.querySelector('img').alt : '';
      open(full, alt);
    });
  });
  closeBtn && closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

/* ---- FAQ accordion --------------------------------------------------------*/
function initAccordion() {
  const items = document.querySelectorAll('[data-faq-item]');
  items.forEach((item) => {
    const btn = item.querySelector('[data-faq-trigger]');
    const panel = item.querySelector('[data-faq-panel]');
    if (!btn || !panel) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      panel.style.maxHeight = isOpen ? panel.scrollHeight + 'px' : null;
    });
  });
}

/* ---- click-to-load map (TTDSG: no third-party embed loads without an
   explicit user action) --------------------------------------------------*/
function initMapLoader() {
  const holder = document.querySelector('[data-map-loader]');
  if (!holder) return;
  const btn = holder.querySelector('[data-map-load-btn]');
  btn.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.title = holder.getAttribute('data-map-title') || 'Karte';
    iframe.className = 'w-full h-full';
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.src = holder.getAttribute('data-map-src');
    holder.replaceChildren(iframe);
  });
}

/* ---- init ------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(getLang());
  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang-btn')));
  });
  initNav();
  initReveals();
  initMenuTabs();
  initLightbox();
  initAccordion();
  initMapLoader();

  // set current year in footer
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
