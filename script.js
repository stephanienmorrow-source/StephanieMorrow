const TRANSLATIONS = {
  en: {
    'nav-about':        'About',
    'nav-research':     'Research',
    'nav-presentations':'Presentations',
    'nav-awards':       'Awards',
    'nav-contact':      'Contact',
    'nav-cv':           'CV',

    'hero-tagline': 'Psychology researcher investigating digital reassurance-seeking, anxiety, and social media use in emerging adults.',
    'btn-research': 'View Research',
    'btn-cv':       'Download CV',
    'hero-tags':    '<span>Digital Behaviour</span><span>Anxiety</span><span>Attachment</span><span>Emerging Adults</span><span>Social Media</span><span>Scale Development</span>',

    'lbl-about': 'About',
    'h2-about':  'Background &amp; Research Interests',
    'bio-1': 'I am a psychology researcher and post-degree Research Assistant at King\'s University College, Western University, where I recently completed an Honours Specialization in Psychology (Dean\'s Honour List; 90%+ cumulative average). My work sits at the intersection of digital behaviour, clinical psychology, and developmental science.',
    'bio-2': 'My Honours thesis investigated <strong>digital reassurance-seeking</strong> (the tendency to seek relief from anxiety through online platforms), examining how cognitive and attachment factors predict these behaviours in emerging adults. This project involved developing and validating two novel psychological measurement scales, from ethics submission through to data collection and quantitative analysis in R.',
    'bio-3': 'I am currently extending this research as a post-degree Research Assistant, contributing to manuscript preparation for peer-reviewed journal submission, follow-up data collection via Prolific, and continued analysis in R and Mplus. I bring a strong background in quantitative methods and open-science practices, alongside over a decade of direct experience in community mental health, crisis intervention, and child and family services.',

    'info-affil-h':     'Affiliation',
    'info-affil-p':     'King\'s University College<br>Department of Psychology<br>Western University, London, ON',
    'info-super-h':     'Supervisor',
    'info-super-p':     'Dr. Wendy Ellis',
    'info-interests-h': 'Research Interests',
    'info-interests-list': '<li>Digital reassurance-seeking</li><li>Anxiety &amp; attachment in emerging adults</li><li>Social media &amp; adolescent well-being</li><li>Scale development &amp; validation</li><li>Cognitive factors in online behaviour</li>',
    'info-edu-h': 'Education',
    'info-edu-p': 'B.A. (Hons.), Psychology<br>King\'s University College, Western University<br><em>Expected June 2026</em>',
    'info-contact-h': 'Contact',

    'lbl-research': 'Research',
    'h2-research':  'Projects &amp; Experience',
    'badge-featured': 'Current &amp; Featured',
    'h3-featured':    'Digital Reassurance-Seeking in Emerging Adults',
    'featured-role':  'Post-Degree Research Assistant and Undergraduate Honours Thesis, King\'s University College, May 2025&ndash;Present',
    'featured-p1': 'This project examines the cognitive and attachment factors that predict online reassurance-seeking behaviours in emerging adults (the tendency to seek relief from anxiety through digital platforms such as social media and messaging). Working under the supervision of Dr. Wendy Ellis, the thesis involved an independent full-cycle research project: ethics submission, novel scale development and validation (two new measures), Qualtrics survey construction, participant recruitment, and comprehensive quantitative analysis in R.',
    'featured-p2': 'I am currently continuing as a post-degree Research Assistant, contributing to manuscript preparation for peer-reviewed journal submission, additional participant recruitment via Prolific, and further analysis including structural equation modelling in Mplus.',
    'featured-tags': '<span>Honours Thesis</span><span>Scale Development</span><span>Attachment Theory</span><span>Cognitive Factors</span><span>Anxiety</span><span>Emerging Adults</span><span>R &amp; Mplus</span><span>Qualtrics</span><span>Prolific</span><span>OSF</span>',

    'card1-date': 'Jan &ndash; Apr 2025',
    'card1-h4':   'London Arts Council Community Survey',
    'card1-p':    'Designed and conducted a community-based survey in partnership with the London Arts Council to examine arts engagement, mental health, and barriers to participation across London, Ontario. Led data collection and analysis, and developed recommendations for improving arts accessibility and community connection.',
    'card1-tags': '<span>Community Research</span><span>Survey Design</span><span>Mental Health</span><span>Knowledge Translation</span>',

    'card2-date': 'Nov 2024 &ndash; Feb 2025',
    'card2-h4':   'Scoping Review: Cannabis Use in Pregnancy',
    'card2-p':    'Research Assistant on a scoping review examining public and professional attitudes toward cannabis use during pregnancy. Contributed to literature screening and data extraction using Covidence and Excel, gaining experience in systematic review methodology.',
    'card2-tags': '<span>Systematic Review</span><span>Covidence</span><span>Literature Screening</span><span>Data Extraction</span>',

    'card3-date': 'Sep &ndash; Dec 2024',
    'card3-h4':   'Applied Psychology: Policy Development',
    'card3-p':    'Developed a best-practices document for emotionally supporting fraud and scam victims at Libro Credit Union, standardizing frontline responses and coordinating referrals to appropriate mental health resources. Applied psychological principles to real-world organizational practice.',
    'card3-tags': '<span>Applied Psychology</span><span>Policy Development</span><span>Trauma-Informed Practice</span>',

    'card4-date': 'Jan &ndash; Apr 2023',
    'card4-h4':   'Applied Psychology: Community Partnership',
    'card4-p':    'Collaborated with Changing Ways to design and produce an educational video on women\'s programming. Responsibilities included content development, script drafting, and coordination of multi-stakeholder feedback to produce a psychoeducational resource for community use.',
    'card4-tags': '<span>Applied Psychology</span><span>Community Partnership</span><span>Psychoeducation</span><span>Gender-Based Violence</span>',

    'lbl-pres': 'Presentations',
    'h2-pres':  'Conference Contributions',
    'ptype':    'Poster',

    'lbl-methods': 'Methods',
    'h2-methods':  'Research Methods &amp; Technical Skills',
    'skill-h-1':   'Statistical Analysis',
    'skill-h-2':   'Software &amp; Tools',
    'skill-h-3':   'Open Science &amp; Ethics',
    'skill-tags-1': '<span>t-tests &amp; ANOVA</span><span>Correlation</span><span>Multiple Regression</span><span>Logistic Regression</span><span>SEM (Mplus)</span><span>Power Analysis (G*Power)</span><span>Mediation Analysis</span>',
    'skill-tags-2': '<span>R (tidyverse, dplyr, ggplot2)</span><span>R Markdown</span><span>Mplus</span><span>Qualtrics</span><span>Prolific</span><span>Covidence</span><span>SPSS</span>',
    'skill-tags-3': '<span>Preregistration (OSF)</span><span>Reproducible Analysis</span><span>Ethics Submission</span><span>TCPS2: CORE Certified</span><span>GCP for Clinical Researchers</span><span>ASIST Certified</span>',

    'lbl-awards': 'Distinctions',
    'h2-awards':  'Honours &amp; Awards',
    'award-1':  'Dean\'s Honour List, King\'s University College, Western University',
    'award-2':  'The Emil Pietruszewski Memorial Award <span class="award-value">&middot; $1,000</span>',
    'award-3':  'KUCSA Mature Student Award <span class="award-value">&middot; $1,000</span>',
    'award-4':  'Dean\'s Honour List, King\'s University College, Western University',
    'award-5':  'King\'s Continuing Scholarship <span class="award-value">&middot; $2,500</span>',
    'award-6':  'Laura L. Newsome Mature Student Award <span class="award-value">&middot; $1,000</span>',
    'award-7':  'SWIM\'s S.M.A.R.T Scholarship <span class="award-value">&middot; $1,000</span>',
    'award-8':  'King\'s Continuing Scholarship <span class="award-value">&middot; $2,500</span>',
    'award-9':  'Dean\'s Honour List, King\'s University College, Western University',
    'award-10': 'KUCSA Mature Student Award <span class="award-value">&middot; $500</span>',
    'award-11': 'Dean\'s Honour List, King\'s University College, Western University',
    'award-12': 'Certificate of Outstanding Academic Performance, School of Management, Economics, and Mathematics',
    'award-13': 'King\'s Continuing Scholarship <span class="award-value">&middot; $2,500</span>',

    'lbl-contact':    'Contact',
    'h2-contact':     'Get in Touch',
    'contact-p':      'I welcome inquiries about my research, potential collaborations, or graduate study opportunities. Please don\'t hesitate to reach out.',
    'contact-affil':  'Department of Psychology<br>King\'s University College, Western University<br>London, Ontario, Canada',
    'btn-cv-contact': 'Download Full CV',

    'footer-text': '&copy; 2026 Stephanie N. Morrow &middot; King\'s University College, Western University',
  },

  fr: {
    'nav-about':        'À propos',
    'nav-research':     'Recherche',
    'nav-presentations':'Présentations',
    'nav-awards':       'Prix',
    'nav-contact':      'Contact',
    'nav-cv':           'CV',

    'hero-tagline': 'Chercheuse en psychologie spécialisée dans la recherche de réassurance numérique, l\'anxiété et l\'utilisation des médias sociaux chez les jeunes adultes.',
    'btn-research': 'Voir la recherche',
    'btn-cv':       'Télécharger le CV',
    'hero-tags':    '<span>Comportement numérique</span><span>Anxiété</span><span>Attachement</span><span>Jeunes adultes</span><span>Médias sociaux</span><span>Développement d\'outils</span>',

    'lbl-about': 'À propos',
    'h2-about':  'Parcours et intérêts de recherche',
    'bio-1': 'Je suis chercheuse en psychologie et assistante de recherche diplômée au King\'s University College de l\'Université Western, où j\'ai récemment obtenu une spécialisation avec distinction en psychologie (Liste d\'honneur du doyen; moyenne cumulative supérieure à 90 %). Mes travaux se situent à l\'intersection du comportement numérique, de la psychologie clinique et des sciences du développement.',
    'bio-2': 'Mon mémoire de fin d\'études a porté sur la <strong>recherche de réassurance numérique</strong> (la tendance à chercher un soulagement à l\'anxiété par le biais des plateformes en ligne), en examinant comment les facteurs cognitifs et d\'attachement prédisent ces comportements chez les jeunes adultes. Ce projet a impliqué le développement et la validation de deux nouvelles échelles de mesure psychologique, de la soumission éthique à la collecte de données et à l\'analyse quantitative dans R.',
    'bio-3': 'Je poursuis actuellement cette recherche en tant qu\'assistante de recherche diplômée, en contribuant à la préparation d\'un manuscrit pour une revue avec comité de lecture, à la collecte de données de suivi via Prolific et à des analyses supplémentaires dans R et Mplus. Je dispose d\'une solide formation en méthodes quantitatives et en pratiques de science ouverte, en plus d\'une décennie d\'expérience directe en santé mentale communautaire, en intervention de crise et en services à l\'enfance et à la famille.',

    'info-affil-h':     'Établissement',
    'info-affil-p':     'King\'s University College<br>Département de psychologie<br>Université Western, London, ON',
    'info-super-h':     'Directrice de recherche',
    'info-super-p':     'Dre Wendy Ellis',
    'info-interests-h': 'Intérêts de recherche',
    'info-interests-list': '<li>Recherche de réassurance numérique</li><li>Anxiété et attachement chez les jeunes adultes</li><li>Médias sociaux et bien-être des adolescents</li><li>Développement et validation d\'outils</li><li>Facteurs cognitifs dans le comportement en ligne</li>',
    'info-edu-h': 'Formation',
    'info-edu-p': 'B.A. (avec distinction), Psychologie<br>King\'s University College, Université Western<br><em>Prévu juin 2026</em>',
    'info-contact-h': 'Contact',

    'lbl-research': 'Recherche',
    'h2-research':  'Projets et expérience',
    'badge-featured': 'Actuel et mis en avant',
    'h3-featured':    'Recherche de réassurance numérique chez les jeunes adultes',
    'featured-role':  'Assistante de recherche diplômée et mémoire de fin d\'études, King\'s University College, mai 2025&ndash;présent',
    'featured-p1': 'Ce projet examine les facteurs cognitifs et d\'attachement qui prédisent les comportements de recherche de réassurance en ligne chez les jeunes adultes (la tendance à chercher un soulagement à l\'anxiété via des plateformes numériques telles que les réseaux sociaux et la messagerie). Sous la supervision de Dre Wendy Ellis, le mémoire a impliqué un projet de recherche indépendant complet: soumission éthique, développement et validation de nouvelles échelles (deux nouveaux outils de mesure), construction d\'une enquête Qualtrics, recrutement de participants et analyse quantitative approfondie dans R.',
    'featured-p2': 'Je poursuis actuellement ces travaux en tant qu\'assistante de recherche diplômée, en contribuant à la préparation d\'un manuscrit pour une revue avec comité de lecture, au recrutement de participants supplémentaires via Prolific et à des analyses plus approfondies, notamment la modélisation par équations structurelles dans Mplus.',
    'featured-tags': '<span>Mémoire de fin d\'études</span><span>Développement d\'outils</span><span>Théorie de l\'attachement</span><span>Facteurs cognitifs</span><span>Anxiété</span><span>Jeunes adultes</span><span>R &amp; Mplus</span><span>Qualtrics</span><span>Prolific</span><span>OSF</span>',

    'card1-date': 'Jan. &ndash; avr. 2025',
    'card1-h4':   'Sondage communautaire du London Arts Council',
    'card1-p':    'Conception et réalisation d\'un sondage communautaire en partenariat avec le London Arts Council pour étudier la participation aux arts, la santé mentale et les obstacles à la participation à London, en Ontario. Direction de la collecte et de l\'analyse des données, et élaboration de recommandations pour améliorer l\'accessibilité aux arts et les liens communautaires.',
    'card1-tags': '<span>Recherche communautaire</span><span>Conception d\'enquêtes</span><span>Santé mentale</span><span>Transfert de connaissances</span>',

    'card2-date': 'Nov. 2024 &ndash; fév. 2025',
    'card2-h4':   'Revue de portée: consommation de cannabis pendant la grossesse',
    'card2-p':    'Assistante de recherche pour une revue de portée examinant les attitudes du public et des professionnels à l\'égard de la consommation de cannabis pendant la grossesse. Contribution au dépistage de la littérature et à l\'extraction de données à l\'aide de Covidence et Excel, avec acquisition d\'expérience en méthodologie de revue systématique.',
    'card2-tags': '<span>Revue systématique</span><span>Covidence</span><span>Dépistage de littérature</span><span>Extraction de données</span>',

    'card3-date': 'Sep. &ndash; déc. 2024',
    'card3-h4':   'Psychologie appliquée: développement de politiques',
    'card3-p':    'Élaboration d\'un document de meilleures pratiques pour le soutien émotionnel des victimes de fraude et d\'escroquerie à Libro Credit Union, standardisation des réponses de première ligne et coordination des références vers des ressources de santé mentale appropriées. Application des principes psychologiques à la pratique organisationnelle concrète.',
    'card3-tags': '<span>Psychologie appliquée</span><span>Développement de politiques</span><span>Pratique tenant compte des traumatismes</span>',

    'card4-date': 'Jan. &ndash; avr. 2023',
    'card4-h4':   'Psychologie appliquée: partenariat communautaire',
    'card4-p':    'Collaboration avec Changing Ways pour concevoir et produire une vidéo éducative sur la programmation destinée aux femmes. Responsabilités incluant le développement de contenu, la rédaction de scénario et la coordination des commentaires des parties prenantes pour produire une ressource psychoéducative à usage communautaire.',
    'card4-tags': '<span>Psychologie appliquée</span><span>Partenariat communautaire</span><span>Psychoéducation</span><span>Violence fondée sur le genre</span>',

    'lbl-pres': 'Présentations',
    'h2-pres':  'Contributions à des conférences',
    'ptype':    'Affiche',

    'lbl-methods': 'Méthodes',
    'h2-methods':  'Méthodes de recherche et compétences techniques',
    'skill-h-1':   'Analyse statistique',
    'skill-h-2':   'Logiciels et outils',
    'skill-h-3':   'Science ouverte et éthique',
    'skill-tags-1': '<span>Tests t et ANOVA</span><span>Corrélation</span><span>Régression multiple</span><span>Régression logistique</span><span>MES (Mplus)</span><span>Analyse de puissance (G*Power)</span><span>Analyse de médiation</span>',
    'skill-tags-2': '<span>R (tidyverse, dplyr, ggplot2)</span><span>R Markdown</span><span>Mplus</span><span>Qualtrics</span><span>Prolific</span><span>Covidence</span><span>SPSS</span>',
    'skill-tags-3': '<span>Préenregistrement (OSF)</span><span>Analyse reproductible</span><span>Soumission éthique</span><span>Certifiée ÉPTC2: CORE</span><span>BPC pour chercheurs cliniques</span><span>Certifiée ASIST</span>',

    'lbl-awards': 'Distinctions',
    'h2-awards':  'Prix et distinctions',
    'award-1':  'Liste d\'honneur du doyen, King\'s University College, Université Western',
    'award-2':  'The Emil Pietruszewski Memorial Award <span class="award-value">&middot; 1 000 $</span>',
    'award-3':  'Prix étudiant adulte KUCSA <span class="award-value">&middot; 1 000 $</span>',
    'award-4':  'Liste d\'honneur du doyen, King\'s University College, Université Western',
    'award-5':  'Bourse de continuité de King\'s <span class="award-value">&middot; 2 500 $</span>',
    'award-6':  'Prix étudiant adulte Laura L. Newsome <span class="award-value">&middot; 1 000 $</span>',
    'award-7':  'Bourse S.M.A.R.T de SWIM <span class="award-value">&middot; 1 000 $</span>',
    'award-8':  'Bourse de continuité de King\'s <span class="award-value">&middot; 2 500 $</span>',
    'award-9':  'Liste d\'honneur du doyen, King\'s University College, Université Western',
    'award-10': 'Prix étudiant adulte KUCSA <span class="award-value">&middot; 500 $</span>',
    'award-11': 'Liste d\'honneur du doyen, King\'s University College, Université Western',
    'award-12': 'Certificat d\'excellence académique, École de gestion, d\'économie et de mathématiques',
    'award-13': 'Bourse de continuité de King\'s <span class="award-value">&middot; 2 500 $</span>',

    'lbl-contact':    'Contact',
    'h2-contact':     'Me contacter',
    'contact-p':      'Je suis ouverte aux demandes concernant mes recherches, des collaborations potentielles ou des possibilités d\'études supérieures. N\'hésitez pas à me contacter.',
    'contact-affil':  'Département de psychologie<br>King\'s University College, Université Western<br>London, Ontario, Canada',
    'btn-cv-contact': 'Télécharger le CV complet',

    'footer-text': '&copy; 2026 Stephanie N. Morrow &middot; King\'s University College, Université Western',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang][key] !== undefined) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });
  const btn = document.getElementById('lang-toggle');
  btn.textContent = lang === 'en' ? 'FR' : 'EN';
  btn.setAttribute('aria-label', lang === 'en' ? 'Passer en français' : 'Switch to English');
  localStorage.setItem('lang', lang);
  currentLang = lang;
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLanguage(currentLang === 'en' ? 'fr' : 'en');
});

if (currentLang === 'fr') applyLanguage('fr');

// Navbar: transparent over hero, solid when scrolled
const navbar = document.getElementById('navbar');

function updateNav() {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => navLinks.classList.toggle('open'));

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// Entrance animations
const fadeEls = document.querySelectorAll(
  '.research-card, .research-featured, .presentation-item, .award-item, .info-card'
);

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -60px 0px' });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});
