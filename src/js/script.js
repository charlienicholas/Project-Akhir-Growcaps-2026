// Logika untuk mobile menu
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const menuOverlay = document.getElementById("menu-overlay");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

function openMobileMenu() {
  if (!mobileMenu || !menuOverlay) return;

  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");
  menuOverlay.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
  hamburger?.setAttribute("aria-expanded", "true");
}

function closeMobileMenu() {
  if (!mobileMenu || !menuOverlay) return;

  mobileMenu.classList.add("translate-x-full");
  mobileMenu.classList.remove("translate-x-0");
  menuOverlay.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  hamburger?.setAttribute("aria-expanded", "false");
}

if (hamburger) hamburger.addEventListener("click", openMobileMenu);
if (closeMenu) closeMenu.addEventListener("click", closeMobileMenu);
if (menuOverlay) menuOverlay.addEventListener("click", closeMobileMenu);
mobileNavLinks.forEach((link) => link.addEventListener("click", closeMobileMenu));

if (hamburger) {
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) closeMobileMenu();
  });
}

// Logika untuk toggle tema gelap/terang
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

function loadThemePreference() {
  const theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    html.classList.add("dark");
  }
  updateThemeIcon(theme === "dark");
}

function toggleTheme() {
  const isDark = html.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
  if (!themeToggle) return;
  themeToggle.innerHTML = isDark
    ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>';
}

if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
loadThemePreference();

// Logika untuk scroll navbar yang berubah warna saat di scroll
const navbar = document.getElementById("navbar");
const navbarTopClasses = ["bg-transparent", "text-white"];
const navbarScrolledClasses = ["bg-white/80", "text-slate-900", "shadow-lg", "backdrop-blur-md", "dark:bg-slate-900/80", "dark:text-white"];

const navLinkSections = [
  { href: "#", sectionId: "hero-section" },
  { href: "#about", sectionId: "about" },
  { href: "#team", sectionId: "team" },
  { href: "#project", sectionId: "project" },
];

function updateActiveNavLink() {
  const desktopLinks = document.querySelectorAll(".nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  const isMemberPage = window.location.pathname.includes("/member/");

  desktopLinks.forEach((l) => l.classList.remove("active"));
  mobileLinks.forEach((l) => l.classList.remove("active"));

  if (isMemberPage) {
    desktopLinks.forEach((l) => {
      if (l.textContent.trim() === "Team") l.classList.add("active");
    });
    mobileLinks.forEach((l) => {
      if (l.textContent.trim() === "Team") l.classList.add("active");
    });
    return;
  }

  const scrollPos = window.scrollY + 250;
  let activeHref = "#";

  for (const s of navLinkSections) {
    const el = document.getElementById(s.sectionId);
    if (el && el.offsetTop <= scrollPos) {
      activeHref = s.href;
    }
  }

  desktopLinks.forEach((l) => {
    if (l.getAttribute("href") === activeHref) l.classList.add("active");
  });
  mobileLinks.forEach((l) => {
    if (l.getAttribute("href") === activeHref) l.classList.add("active");
  });
}

let isNavbarScrolled = null;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function handleScroll() {
  if (!navbar) return;

  const scrolled = window.scrollY > 50;

  if (scrolled) {
    navbar.classList.add(...navbarScrolledClasses);
    navbar.classList.remove(...navbarTopClasses);
  } else {
    navbar.classList.add(...navbarTopClasses);
    navbar.classList.remove(...navbarScrolledClasses);
  }

  updateActiveNavLink();

  if (window.gsap && !prefersReducedMotion && scrolled !== isNavbarScrolled) {
    isNavbarScrolled = scrolled;
    gsap.to(navbar, {
      scale: scrolled ? 0.98 : 1,
      y: 0,
      xPercent: -50,
      duration: 0.25,
      ease: "power2.out",
      overwrite: "auto",
    });
  }
}

window.addEventListener("scroll", handleScroll);
handleScroll();

// Logika untuk tombol Back to Top
const backToTop = document.getElementById("back-to-top");

function handleBackToTop() {
  if (!backToTop) return;

  if (window.scrollY > 300) {
    backToTop.classList.remove("opacity-0", "invisible");
    backToTop.classList.add("opacity-100", "visible");
  } else {
    backToTop.classList.add("opacity-0", "invisible");
    backToTop.classList.remove("opacity-100", "visible");
  }
}

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

window.addEventListener("scroll", handleBackToTop);
handleBackToTop();

// Logika untuk Loading Screen
const loadingScreen = document.getElementById("loading-screen");

if (loadingScreen) {
  setTimeout(() => {
    loadingScreen.classList.add("opacity-0", "pointer-events-none");
    loadingScreen.addEventListener(
      "transitionend",
      () => {
        loadingScreen.classList.add("hidden");
      },
      { once: true },
    );
  }, 700);
}

// Logika untuk Lightbox Galeri
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");
const galleryItems = document.querySelectorAll(".gallery-item");

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || "Gambar galeri";
  lightbox.classList.remove("hidden");
  lightbox.classList.add("flex");
  document.body.classList.add("overflow-hidden");
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.add("hidden");
  lightbox.classList.remove("flex");
  document.body.classList.remove("overflow-hidden");
}

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    if (img) openLightbox(img.src, img.alt);
  });
});

if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
if (lightbox) lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox && !lightbox.classList.contains("hidden")) {
    closeLightbox();
  }
});
