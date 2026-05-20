// === Mobile Menu ===
const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function openMobileMenu() {
  mobileMenu.classList.remove('translate-x-full');
  mobileMenu.classList.add('translate-x-0');
  menuOverlay.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeMobileMenu() {
  mobileMenu.classList.add('translate-x-full');
  mobileMenu.classList.remove('translate-x-0');
  menuOverlay.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

if (hamburger) hamburger.addEventListener('click', openMobileMenu);
if (closeMenu) closeMenu.addEventListener('click', closeMobileMenu);
if (menuOverlay) menuOverlay.addEventListener('click', closeMobileMenu);
mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

if (hamburger) {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) closeMobileMenu();
  });
}

// === Theme Toggle ===
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function loadThemePreference() {
  const theme = localStorage.getItem('theme') || 'light';
  if (theme === 'dark') {
    html.classList.add('dark');
  }
  updateThemeIcon(theme === 'dark');
}

function toggleTheme() {
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
  if (!themeToggle) return;
  themeToggle.innerHTML = isDark
    ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>';
}

if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
loadThemePreference();

// === Navbar Scroll ===
const navbar = document.getElementById('navbar');

function handleScroll() {
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.classList.add('bg-white/80', 'dark:bg-slate-900/80', 'shadow-lg', 'backdrop-blur-md');
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.remove('bg-white/80', 'dark:bg-slate-900/80', 'shadow-lg', 'backdrop-blur-md');
    navbar.classList.add('bg-transparent');
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll();

// === Smooth Scroll for Nav Links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
