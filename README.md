# PROJECT-AKHIR-GROWCAPS

Website portofolio tim **SapuSapu** untuk project akhir Growcaps 2026. Project ini menampilkan profil tim, daftar anggota, project yang dikerjakan, serta halaman profil individu untuk setiap anggota.

## Gambaran Umum

Website ini dibuat sebagai landing page dan portofolio kelompok. Halaman utama berisi hero section, tentang tim, daftar anggota, ringkasan project, dan footer. Setiap anggota memiliki halaman profil sendiri yang menampilkan informasi pribadi, pendidikan, keahlian, hobi, galeri, kontak, dan review teman.

## Tech Stack

- **HTML5** untuk struktur halaman.
- **Tailwind CSS v4** untuk styling dan responsive design.
- **JavaScript vanilla** untuk menu mobile, dark mode, dan efek navbar saat scroll.
- **AOS (Animate On Scroll)** dari CDN untuk animasi saat elemen masuk viewport.
- **Google Fonts Montserrat** sebagai font utama.

## Fitur

- Halaman utama `index.html`.
- Halaman profil anggota:
  - `src/html/member/charlie.html`
  - `src/html/member/zaki.html`
  - `src/html/member/zaskia.html`
- Navigasi desktop dan mobile sidebar.
- Dark mode dengan preferensi yang tersimpan di `localStorage`.
- Navbar yang berubah tampilan saat halaman di-scroll.
- Active navigation link sesuai section yang sedang dibuka.
- Loading screen singkat saat halaman dibuka.
- Tombol back-to-top setelah user scroll.
- Lightbox galeri pada halaman profil anggota.
- Layout responsif untuk mobile, tablet, dan desktop.
- Galeri gambar anggota.
- Link kontak dan repository GitHub.

## Anggota Tim

| Nama | Peran |
| --- | --- |
| Charlie Nicholas | Project Lead |
| Zaki | Anggota Internal |
| Zaskia Nurul Khotami | Anggota |

## Struktur Folder

```text
Project-Akhir-Growcaps/
├── assets/
│   └── img/                  # Foto anggota dan gambar galeri
├── src/
│   ├── css/
│   │   ├── input.css         # Source Tailwind dan custom theme
│   │   └── style.css         # Output build Tailwind
│   ├── html/
│   │   └── member/           # Halaman profil anggota
│   └── js/
│       └── script.js         # Script menu, dark mode, dan navbar
├── index.html                # Halaman utama
├── package.json              # Script npm dan dependency
├── package-lock.json
└── README.md
```

## Instalasi

Pastikan Node.js dan npm sudah terpasang, lalu jalankan:

```bash
npm install
```

## Cara Menjalankan

Untuk development, jalankan Tailwind dalam watch mode:

```bash
npm run watch
```

Setelah itu buka `index.html` di browser. Disarankan menggunakan Live Server agar perubahan HTML/CSS/JS lebih mudah dicek.

Untuk build CSS satu kali:

```bash
npm run build
```

## Catatan Pengembangan

- Edit styling utama di `src/css/input.css`, lalu jalankan `npm run build` atau `npm run watch`.
- `src/css/style.css` adalah file hasil build Tailwind. Jangan edit manual kecuali benar-benar diperlukan.
- Jika menambah class Tailwind baru di HTML/JS, build ulang CSS agar class tersebut masuk ke output.
- Style tambahan untuk active navigation link berada di `src/css/input.css`.
- Gambar project dan anggota disimpan di `assets/img/`.
- Script interaksi global ada di `src/js/script.js`.

## Repository

GitHub: <https://github.com/charlienicholas/Project-Akhir-Growcaps-2026>

## Lisensi

Project ini menggunakan lisensi **ISC**.

---

# Penjelasan Kode Lengkap

Bagian ini menjelaskan secara detail bagaimana kode dalam project ini bekerja. Dokumentasi ini dibuat agar seluruh anggota tim dapat memahami alur, struktur, dan logika di balik website ini.

## Daftar Isi Penjelasan Kode

1. [Gambaran Umum Kode](#1-gambaran-umum-kode)
2. [Struktur Folder Detail](#2-struktur-folder-detail)
3. [Konfigurasi Proyek](#3-konfigurasi-proyek)
4. [CSS dan Tailwind](#4-css-dan-tailwind)
5. [Halaman Utama](#5-halaman-utama)
6. [Halaman Profil Anggota](#6-halaman-profil-anggota)
7. [JavaScript](#7-javascript)
8. [Dark Mode](#8-dark-mode)
9. [Responsive Design](#9-responsive-design)
10. [Cara Menambahkan Anggota Baru](#10-cara-menambahkan-anggota-baru)
11. [Alur Navigasi](#11-alur-navigasi)
12. [Tips Pengembangan](#12-tips-pengembangan)

## 1. Gambaran Umum Kode

Project ini adalah website portofolio kelompok **SapuSapu** yang dibuat sebagai project akhir program **Growcaps 2026**. Website ini menampilkan:

- Halaman utama dengan hero, about, anggota tim, dan project.
- Halaman profil individu untuk setiap anggota tim.
- Navigasi responsif dengan desktop navbar dan mobile sidebar.
- Dark mode yang bisa di-toggle dan tersimpan di `localStorage`.
- Efek scroll pada navbar.
- Active nav link, loading screen, back-to-top, dan lightbox galeri.

Tech stack utama yang digunakan adalah HTML5, Tailwind CSS v4, dan JavaScript vanilla.

## 2. Struktur Folder Detail

```text
Project-Akhir-Growcaps/
│
├── index.html                 # Halaman utama website
├── package.json               # Konfigurasi npm dan dependency
├── package-lock.json          # Lock file dependency
│
├── src/
│   ├── css/
│   │   ├── input.css          # Source CSS Tailwind dan custom theme
│   │   └── style.css          # Output CSS hasil build Tailwind
│   │
│   ├── js/
│   │   └── script.js          # JavaScript utama untuk semua halaman
│   │
│   └── html/
│       └── member/
│           ├── charlie.html   # Profil Charlie Nicholas
│           ├── zaki.html      # Profil Zaki
│           └── zaskia.html    # Profil Zaskia
│
└── assets/
    └── img/                   # Foto anggota dan gambar galeri
```

| Path | Fungsi |
| --- | --- |
| `index.html` | Halaman utama website. Berisi hero section, about, team cards, project section, dan footer. |
| `src/css/input.css` | File sumber CSS tempat Tailwind diimpor dan tema kustom didefinisikan. |
| `src/css/style.css` | Hasil build dari Tailwind. Jangan diedit langsung; edit `input.css` lalu build ulang. |
| `src/js/script.js` | JavaScript yang digunakan di halaman utama dan halaman profil anggota. |
| `src/html/member/*.html` | Halaman profil masing-masing anggota tim. |
| `assets/img/` | Folder untuk menyimpan gambar, foto profil, dan galeri. |

## 3. Konfigurasi Proyek

Project ini menggunakan Tailwind CSS v4 dengan CLI sebagai build tool. Tidak ada framework JavaScript seperti React atau Vue; semua interaksi menggunakan JavaScript vanilla.

Dependency utama ada di `package.json`:

```json
{
  "devDependencies": {
    "@tailwindcss/cli": "^4.3.0",
    "tailwindcss": "^4.3.0"
  }
}
```

Scripts yang tersedia:

| Perintah | Fungsi |
| --- | --- |
| `npm run build` | Build CSS Tailwind satu kali dari `input.css` ke `style.css`. |
| `npm run watch` | Build CSS Tailwind dan terus memantau perubahan file. |

Tailwind membaca `src/css/input.css`, memproses utility class yang digunakan di HTML dan JavaScript, lalu menghasilkan file `src/css/style.css` yang siap dipakai oleh halaman website.

## 4. CSS dan Tailwind

File utama CSS berada di `src/css/input.css`.

```css
@import "tailwindcss";

@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --font-main: "Montserrat", sans-serif;
  --color-sky-blue: #088395;
  --color-dark-blue: #003285;
  --color-light-gray: #f5f5f5;
}
```

Penjelasan:

- `@import "tailwindcss";` mengimpor Tailwind CSS v4.
- `@import url(...)` mengimpor font Montserrat dari Google Fonts.
- `@custom-variant dark (&:where(.dark, .dark *));` membuat class `dark:` aktif ketika elemen induk memiliki class `.dark`.
- `@theme` mendefinisikan font dan warna custom yang bisa dipakai sebagai utility Tailwind.

Warna custom:

| Token | Nilai | Fungsi |
| --- | --- | --- |
| `--font-main` | `"Montserrat", sans-serif` | Font utama website. |
| `--color-sky-blue` | `#088395` | Warna aksen utama. |
| `--color-dark-blue` | `#003285` | Warna aksen sekunder. |
| `--color-light-gray` | `#f5f5f5` | Background section terang. |

Di Tailwind v4, kustomisasi tema dilakukan lewat CSS variables di blok `@theme`, bukan lewat `tailwind.config.js`.

Selain theme, `input.css` juga menyimpan style kecil untuk state navigasi aktif:

```css
.nav-link.active {
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
}

.mobile-nav-link.active {
  color: var(--color-dark-blue);
  font-weight: 600;
}

.dark .mobile-nav-link.active {
  color: var(--color-sky-blue);
}
```

Class `active` ditambahkan dan dihapus lewat JavaScript berdasarkan posisi scroll halaman.

## 5. Halaman Utama

Halaman utama berada di `index.html`. File ini menjadi entry point website dan memuat beberapa section besar.

### 5.1 Struktur Dasar HTML

```html
<html lang="id" class="scroll-smooth">
```

- `lang="id"` menandakan konten menggunakan Bahasa Indonesia.
- `scroll-smooth` membuat perpindahan anchor antar section menjadi halus.

```html
<body class="bg-white font-main text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white">
```

- `font-main` memakai font Montserrat dari custom theme.
- `transition-colors duration-300` memberi transisi warna saat theme berubah.
- `dark:bg-slate-900 dark:text-white` mengatur tampilan saat dark mode aktif.

### 5.2 Navbar

Navbar berada di bagian atas halaman dan dibuat fixed.

```html
<nav id="navbar" class="fixed left-1/2 top-4 z-50 ...">
```

Class penting:

- `fixed` membuat navbar tetap berada di atas saat halaman di-scroll.
- `left-1/2` dan `-translate-x-1/2` membuat navbar berada di tengah secara horizontal.
- `rounded-full` membuat navbar berbentuk pill.
- `bg-transparent` dan `text-white` digunakan saat posisi scroll masih di atas.

Saat halaman di-scroll lebih dari 50px, JavaScript akan mengganti class navbar menjadi background solid dengan blur dan shadow.

Link navbar memakai class `nav-link`, sedangkan link di sidebar mobile memakai class `mobile-nav-link`. JavaScript akan menambahkan class `active` ke link yang sesuai dengan section saat ini. Pada halaman profil anggota, link `Team` otomatis dibuat aktif karena halaman profil berasal dari section anggota.

### 5.3 Mobile Menu

Mobile sidebar berada di elemen dengan id `mobile-menu`.

```html
<div id="mobile-menu" class="fixed right-0 top-0 z-50 h-full w-[65%] max-w-sm translate-x-full ...">
```

Class penting:

- `translate-x-full` membuat sidebar tersembunyi di luar layar sebelah kanan.
- `translate-x-0` ditambahkan JavaScript saat menu dibuka.
- `w-[65%]` mengatur lebar sidebar di mobile.
- `max-w-sm` membatasi lebar maksimal.

Overlay berada di elemen dengan id `menu-overlay`.

```html
<div id="menu-overlay" class="fixed inset-0 z-40 hidden cursor-pointer bg-black/50 ..."></div>
```

Overlay ditampilkan saat menu mobile terbuka dan bisa diklik untuk menutup menu.

### 5.4 Loading Screen

Setiap halaman memiliki loading screen di awal body.

```html
<div id="loading-screen" class="fixed inset-0 z-9999 flex flex-col items-center justify-center ...">
```

Loading screen menampilkan teks `SapuSapu` dan spinner. JavaScript menyembunyikannya setelah 700ms dengan menambahkan `opacity-0` dan `pointer-events-none`, lalu memberi class `hidden` setelah transisi selesai.

### 5.5 Hero Section

Hero section berada di elemen `#hero-section`.

```html
<section id="hero-section" class="relative m-2 flex min-h-[80vh] items-center justify-center ...">
```

Hero menampilkan nama tim, deskripsi singkat, dan tombol menuju section about. Background menggunakan gradient dari `sky-blue` ke `sky-blue/40`. Saat dark mode aktif, background gradient dihilangkan dengan class `dark:bg-none`.

### 5.6 About Section

Section `#about` berisi penjelasan singkat tentang tim SapuSapu dan link menuju section anggota.

```html
<section id="about" class="py-20 md:py-28 scroll-mt-24" data-aos="fade-up">
```

- `py-20 md:py-28` memberi padding vertikal yang responsif.
- `scroll-mt-24` memberi jarak saat section dituju lewat anchor.
- `data-aos="fade-up"` mengaktifkan animasi AOS.

### 5.7 Team Section

Section `#team` menampilkan kartu anggota tim.

```html
<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
```

Grid menggunakan 1 kolom di mobile dan 3 kolom mulai breakpoint `md`.

Setiap kartu anggota memiliki:

- Foto dengan rasio `aspect-square`.
- Nama anggota.
- Deskripsi singkat.
- Link `Lihat Profile` ke halaman profil masing-masing.

Efek hover:

- `hover:-translate-y-1` membuat kartu naik sedikit.
- `group-hover:scale-105` membuat foto membesar saat kartu di-hover.
- `hover:shadow-xl` memperkuat shadow.

### 5.8 Project Section

Section `#project` menampilkan ringkasan project akhir.

Isi section:

- Judul project.
- Deskripsi project.
- Badge tech stack.
- Tombol link ke repository GitHub.

Badge tech stack memakai class seperti:

```html
<span class="bg-sky-blue/20 text-dark-blue dark:text-white dark:bg-dark-blue px-4 py-2 rounded-full text-sm font-medium">
  HTML
</span>
```

### 5.9 Footer

Footer menampilkan nama tim dan copyright.

```html
<footer class="bg-sky-blue py-8 text-white transition-colors duration-300 dark:bg-slate-950">
```

Footer juga mendukung dark mode lewat `dark:bg-slate-950`.

### 5.10 Back to Top

Halaman utama dan halaman profil memiliki tombol `#back-to-top`.

```html
<button id="back-to-top" aria-label="Back to top" class="fixed bottom-6 right-6 ...">
```

Tombol ini tersembunyi secara default dengan `opacity-0 invisible`. Setelah user scroll lebih dari 300px, JavaScript menggantinya menjadi `opacity-100 visible`. Saat diklik, halaman akan scroll halus kembali ke atas.

## 6. Halaman Profil Anggota

Setiap anggota memiliki halaman profil di `src/html/member/`.

File yang tersedia:

- `charlie.html`
- `zaki.html`
- `zaskia.html`

### 6.1 Navbar dan Path Relatif

Navbar pada halaman profil mirip dengan halaman utama, tetapi link navigasinya kembali ke `index.html`.

```html
<a href="../../../index.html#team">Team</a>
```

Dari file `src/html/member/charlie.html`, path ke `index.html` harus naik tiga folder dengan `../../../`.

### 6.2 Hero Profil

Hero profil menampilkan foto anggota dalam bentuk lingkaran, nama, quote, dan deskripsi singkat.

```html
<div class="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto mb-6 overflow-hidden shadow-lg border-4 border-white/20">
  <img src="../../../assets/img/Charlie.jpeg" alt="Charlie Nicholas" class="w-full h-full object-cover" />
</div>
```

Class penting:

- `rounded-full` membuat foto berbentuk lingkaran.
- `overflow-hidden` memastikan foto tidak keluar dari lingkaran.
- `object-cover` membuat gambar memenuhi container tanpa distorsi.

### 6.3 Informasi Pribadi

Section informasi pribadi menggunakan grid responsif dua kolom di desktop.

Data yang ditampilkan:

- Nama lengkap.
- Peran.
- Lokasi.
- Jurusan.

Setiap item menggunakan card kecil dengan background `bg-light-gray` dan `dark:bg-slate-800`.

### 6.4 Pendidikan

Section pendidikan menampilkan kampus, program studi, dan tahun pendidikan.

### 6.5 Keahlian

Section keahlian memakai grid card berisi ikon SVG dan nama skill.

Contoh skill:

- HTML & CSS.
- JavaScript.
- PHP.

Ikon skill menggunakan container dengan background `bg-sky-blue/20`, warna `text-dark-blue`, dan transisi hover.

### 6.6 Hobi dan Minat

Hobi dan minat ditampilkan dalam bentuk badge agar mudah dibaca.

Badge memakai pola class:

```html
<span class="bg-sky-blue/30 text-dark-blue dark:text-sky-blue px-3 py-1 rounded-full text-sm">
  Coding
</span>
```

### 6.7 Target Belajar

Target belajar ditampilkan dalam kotak dengan border kiri.

```html
<div class="bg-sky-blue/20 dark:bg-slate-800 p-6 rounded-xl border-l-4 border-dark-blue dark:border-sky-blue">
```

### 6.8 Galeri Pribadi

Galeri pribadi menggunakan grid gambar dan setiap item galeri dibungkus dengan tombol `.gallery-item`.

```html
<button class="gallery-item group relative aspect-square overflow-hidden rounded-xl ...">
  <img src="../../../assets/img/Charlie-2.jpg" alt="Charlie" />
</button>
```

Mobile menampilkan 2 kolom, desktop menampilkan 3 kolom. Saat item galeri diklik, JavaScript membuka lightbox.

Setiap halaman profil juga memiliki elemen lightbox:

```html
<div id="lightbox" class="fixed inset-0 z-9998 hidden items-center justify-center ...">
  <button id="lightbox-close" aria-label="Tutup">...</button>
  <img id="lightbox-img" src="" alt="" />
</div>
```

Lightbox bisa ditutup lewat tombol close, klik area overlay, atau tombol `Escape`.

### 6.9 Kontak

Section kontak menampilkan link seperti:

- Email dengan `mailto:`.
- GitHub.
- Instagram.

Setiap link dibuat seperti tombol dengan ikon SVG.

### 6.10 Review Teman

Review teman ditampilkan dalam card dengan border kiri dan teks italic.

### 6.11 Tombol Kembali

Halaman profil menyediakan tombol kembali ke section team.

```html
<a href="../../../index.html#team">Kembali ke Tim</a>
```

## 7. JavaScript

File JavaScript utama berada di `src/js/script.js`. File ini dipakai oleh halaman utama dan halaman profil anggota.

### 7.1 Mobile Menu

Elemen yang digunakan:

```javascript
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const menuOverlay = document.getElementById("menu-overlay");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
```

Fungsi `openMobileMenu()` membuka sidebar:

```javascript
function openMobileMenu() {
  if (!mobileMenu || !menuOverlay) return;

  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");
  menuOverlay.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
  hamburger?.setAttribute("aria-expanded", "true");
}
```

Yang dilakukan:

1. Menghapus `translate-x-full`.
2. Menambahkan `translate-x-0`.
3. Menampilkan overlay.
4. Mengunci scroll body.
5. Mengubah `aria-expanded` menjadi `true`.

Fungsi `closeMobileMenu()` menutup sidebar:

```javascript
function closeMobileMenu() {
  if (!mobileMenu || !menuOverlay) return;

  mobileMenu.classList.add("translate-x-full");
  mobileMenu.classList.remove("translate-x-0");
  menuOverlay.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  hamburger?.setAttribute("aria-expanded", "false");
}
```

Event listener:

- Klik hamburger membuka menu.
- Klik tombol close menutup menu.
- Klik overlay menutup menu.
- Klik link mobile menutup menu.
- Resize ke layar desktop menutup menu.

### 7.2 Dark Mode

Elemen yang digunakan:

```javascript
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;
```

Fungsi `loadThemePreference()` membaca theme dari `localStorage`.

```javascript
function loadThemePreference() {
  const theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    html.classList.add("dark");
  }
  updateThemeIcon(theme === "dark");
}
```

Fungsi `toggleTheme()` mengganti theme.

```javascript
function toggleTheme() {
  const isDark = html.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeIcon(isDark);
}
```

Fungsi `updateThemeIcon(isDark)` mengganti isi SVG tombol theme:

- Mode terang menampilkan ikon bulan.
- Mode gelap menampilkan ikon matahari.

### 7.3 Navbar Scroll Effect

Elemen navbar:

```javascript
const navbar = document.getElementById("navbar");
```

Class saat navbar berada di atas:

```javascript
const navbarTopClasses = ["bg-transparent", "text-white"];
```

Class saat halaman di-scroll:

```javascript
const navbarScrolledClasses = ["bg-white/80", "text-slate-900", "shadow-lg", "backdrop-blur-md", "dark:bg-slate-900/80", "dark:text-white"];
```

Fungsi `handleScroll()`:

```javascript
function handleScroll() {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add(...navbarScrolledClasses);
    navbar.classList.remove(...navbarTopClasses);
  } else {
    navbar.classList.add(...navbarTopClasses);
    navbar.classList.remove(...navbarScrolledClasses);
  }

  updateActiveNavLink();
}
```

Jika scroll lebih dari 50px, navbar berubah menjadi solid. Jika kembali ke atas, navbar menjadi transparan lagi. Fungsi ini juga memanggil `updateActiveNavLink()` untuk memperbarui link navigasi aktif.

### 7.4 Active Navigation Link

JavaScript menyimpan daftar section utama di `navLinkSections`.

```javascript
const navLinkSections = [
  { href: "#", sectionId: "hero-section" },
  { href: "#about", sectionId: "about" },
  { href: "#team", sectionId: "team" },
  { href: "#project", sectionId: "project" },
];
```

Fungsi `updateActiveNavLink()` menghapus class `active` dari semua link, lalu menambahkannya ke link yang sesuai dengan posisi scroll. Pada halaman profil anggota, fungsi ini langsung mengaktifkan link `Team`.

### 7.5 Back to Top

Tombol back-to-top menggunakan elemen `#back-to-top`.

```javascript
const backToTop = document.getElementById("back-to-top");
```

Fungsi `handleBackToTop()` menampilkan tombol ketika `window.scrollY > 300`, dan menyembunyikannya kembali saat user berada di bagian atas halaman.

Saat tombol diklik:

```javascript
window.scrollTo({ top: 0, behavior: "smooth" });
```

### 7.6 Loading Screen

Loading screen memakai elemen `#loading-screen`.

```javascript
const loadingScreen = document.getElementById("loading-screen");
```

Jika elemen tersedia, script menunggu 700ms, menambahkan class fade-out, lalu menyembunyikan elemen setelah transisi selesai.

### 7.7 Lightbox Galeri

Lightbox menggunakan elemen berikut:

```javascript
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");
const galleryItems = document.querySelectorAll(".gallery-item");
```

Saat `.gallery-item` diklik, script mengambil `src` dan `alt` dari gambar di dalamnya, lalu mengisi `#lightbox-img`. Lightbox ditampilkan dengan class `flex` dan body dikunci memakai `overflow-hidden`.

Lightbox bisa ditutup dengan:

- Klik tombol `#lightbox-close`.
- Klik area overlay lightbox.
- Tekan tombol `Escape`.

## 8. Dark Mode

Dark mode bekerja dengan menambahkan class `dark` pada elemen `<html>`.

Alurnya:

1. User klik tombol theme toggle.
2. JavaScript toggle class `dark`.
3. Tailwind mengaktifkan semua class dengan variant `dark:`.
4. Preferensi disimpan di `localStorage`.
5. Saat halaman dibuka ulang, theme terakhir dimuat kembali.

Contoh class dark mode:

```html
<body class="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
```

Custom variant dark mode didefinisikan di `src/css/input.css`:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

## 9. Responsive Design

Website ini menggunakan pendekatan mobile-first. Style default ditujukan untuk mobile, lalu diperbesar dengan breakpoint Tailwind.

Breakpoint yang sering digunakan:

| Breakpoint | Ukuran Layar | Kegunaan |
| --- | --- | --- |
| Default | kurang dari 768px | Mobile. |
| `md:` | 768px ke atas | Tablet dan desktop kecil. |
| `lg:` | 1024px ke atas | Desktop, navbar horizontal. |

Contoh pola responsif:

```html
<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
```

Mobile memakai 1 kolom, sedangkan breakpoint `md` memakai 3 kolom.

```html
<section class="py-20 md:py-28">
```

Mobile memakai padding vertikal 80px, breakpoint `md` memakai 112px.

```html
<button class="lg:hidden">
```

Tombol hamburger tampil di mobile dan hilang di breakpoint `lg`.

## 10. Cara Menambahkan Anggota Baru

Untuk menambahkan anggota baru:

1. Duplikat salah satu halaman profil dari `src/html/member/`.
2. Rename file sesuai nama anggota, misalnya `nama.html`.
3. Ubah title, foto, nama, quote, deskripsi, informasi pribadi, skill, hobi, galeri, kontak, dan review.
4. Tambahkan foto anggota ke `assets/img/`.
5. Tambahkan card anggota baru di section `#team` pada `index.html`.
6. Pastikan link card mengarah ke file profil yang benar.
7. Jika menambahkan galeri, gunakan class `.gallery-item` agar lightbox aktif.
8. Jalankan `npm run build` jika ada class Tailwind baru.
9. Cek tampilan mobile, desktop, dark mode, active nav, back-to-top, dan lightbox.

Contoh card anggota:

```html
<div class="group bg-white dark:bg-slate-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
  <div class="aspect-square overflow-hidden bg-sky-blue/20">
    <img src="assets/img/foto_anggota.jpg" alt="Nama Anggota" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
  </div>
  <div class="p-6">
    <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-white">Nama Anggota</h3>
    <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">Deskripsi singkat.</p>
    <a href="src/html/member/nama.html" class="text-dark-blue dark:text-sky-blue font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
      Lihat Profile
    </a>
  </div>
</div>
```

## 11. Alur Navigasi

Dari halaman utama:

```text
index.html
  ├── #hero-section
  ├── #about
  ├── #team
  │   ├── src/html/member/charlie.html
  │   ├── src/html/member/zaki.html
  │   └── src/html/member/zaskia.html
  └── #project
```

Dari halaman profil:

- Link navbar mengarah ke `../../../index.html#section`.
- Tombol `Kembali ke Tim` mengarah ke `../../../index.html#team`.
- Path `../../../` diperlukan karena file profil berada di `src/html/member/`.

## 12. Tips Pengembangan

1. Setelah mengubah `src/css/input.css`, jalankan `npm run build` atau `npm run watch`.
2. Gunakan Live Server saat mengembangkan agar reload halaman lebih mudah.
3. Untuk mengganti foto, letakkan gambar di `assets/img/` lalu update atribut `src`.
4. Jika menambah section baru, ikuti pola section yang sudah ada: punya `id`, padding vertikal, dan class dark mode jika perlu.
5. Pastikan halaman utama dan semua halaman profil tetap memuat `src/js/script.js` dengan path yang benar.
6. Jika menambah link navbar atau section baru, update `navLinkSections` di `src/js/script.js`.
7. Cek ulang mobile menu, dark mode, active nav, back-to-top, loading screen, lightbox, dan link navigasi setelah perubahan HTML.
