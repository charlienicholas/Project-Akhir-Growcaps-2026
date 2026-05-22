# Penjelasan Kode — Project Akhir Growcaps 2026

Dokumen ini menjelaskan secara detail bagaimana kode dalam project ini bekerja. Dibuat agar seluruh anggota tim dan siapa pun yang ingin berkontribusi dapat memahami alur, struktur, dan logika di balik website ini.

---

## Daftar Isi

1. [Gambaran Umum](#1-gambaran-umum)
2. [Struktur Folder](#2-struktur-folder)
3. [Konfigurasi Proyek (package.json)](#3-konfigurasi-proyek-packagejson)
4. [CSS & Tailwind (input.css)](#4-css--tailwind-inputcss)
5. [Halaman Utama (index.html)](#5-halaman-utama-indexhtml)
6. [Halaman Profil Anggota](#6-halaman-profil-anggota)
7. [JavaScript (script.js)](#7-javascript-scriptjs)
8. [Dark Mode](#8-dark-mode)
9. [Responsive Design](#9-responsive-design)
10. [Cara Menambahkan Anggota Baru](#10-cara-menambahkan-anggota-baru)
11. [Alur Navigasi](#11-alur-navigasi)

---

## 1. Gambaran Umum

Project ini adalah website portofolio kelompok **SapuSapu** yang dibuat sebagai project akhir program **Growcaps 2026**. Website ini menampilkan:

- Halaman utama dengan hero, about, anggota tim, dan project
- Halaman profil individu untuk setiap anggota tim
- Navigasi responsif (desktop navbar & mobile sidebar)
- Dark mode yang bisa di-toggle dan tersimpan di localStorage
- Efek scroll pada navbar

**Tech stack:** HTML5, Tailwind CSS v4, JavaScript vanilla.

---

## 2. Struktur Folder

```
Project-Akhir-Growcaps/
│
├── index.html                 # Halaman utama website
├── package.json               # Konfigurasi npm & dependency
├── package-lock.json          # Lock file dependency (jangan diedit manual)
├── .gitignore                 # File yang diabaikan git
│
├── src/
│   ├── css/
│   │   ├── input.css          # Source CSS — Tailwind + custom theme
│   │   └── style.css          # Output CSS — hasil build Tailwind
│   │
│   ├── js/
│   │   └── script.js          # JavaScript utama (semua halaman)
│   │
│   └── html/
│       └── member/
│           ├── charlie.html   # Profil Charlie Nicholas
│           ├── zaki.html      # Profil Zaki
│           └── zaskia.html    # Profil Zaskia
│
├── assets/
│   └── img/
│       └── contoh_tim.jpeg    # Contoh foto anggota (sementara)
│
└── node_modules/              # Dependency (otomatis, jangan diedit)
```

### Penjelasan tiap folder/file:

| Path | Fungsi |
|------|--------|
| `index.html` | Halaman utama website. Berisi hero section, about, team cards, project section, dan footer. |
| `src/css/input.css` | File sumber CSS tempat Tailwind diimpor dan tema kustom didefinisikan. |
| `src/css/style.css` | Hasil build dari Tailwind. **Jangan diedit langsung** — selalu edit `input.css` lalu build ulang. |
| `src/js/script.js` | JavaScript yang digunakan di semua halaman (index.html maupun halaman profil member). |
| `src/html/member/*.html` | Halaman profil masing-masing anggota tim. |
| `assets/img/` | Folder untuk menyimpan gambar (foto anggota, dll). |

---

## 3. Konfigurasi Proyek (package.json)

```json
{
  "devDependencies": {
    "@tailwindcss/cli": "^4.3.0",
    "tailwindcss": "^4.3.0"
  }
}
```

Project ini menggunakan **Tailwind CSS v4** dengan CLI sebagai build tool. Tidak ada framework JavaScript (React/Vue) — semuanya vanilla.

### Scripts yang tersedia:

| Perintah | Fungsi |
|----------|--------|
| `npm run build` | Build CSS Tailwind satu kali (input.css → style.css) |
| `npm run watch` | Build CSS Tailwind dan terus memantau perubahan file |

Cara kerja: Tailwind membaca `src/css/input.css`, memproses semua utility class yang terdeteksi di file HTML/JS, lalu menghasilkan file `src/css/style.css` yang sudah siap pakai.

---

## 4. CSS & Tailwind (input.css)

File: `src/css/input.css`

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

### Penjelasan per baris:

1. **`@import "tailwindcss"`** — Mengimpor Tailwind CSS v4. Berbeda dengan v3 yang menggunakan `@tailwind base/components/utilities`, di v4 cukup satu baris ini.

2. **`@import url(...)`** — Mengimpor font **Montserrat** dari Google Fonts. Ini adalah font utama website.

3. **`@custom-variant dark (&:where(.dark, .dark *))`** — Mendefinisikan variant kustom `dark:` untuk dark mode. Artinya, class `dark:` akan aktif ketika elemen induk memiliki class `.dark`. Ini standar Tailwind v4.

4. **`@theme { ... }`** — Blok untuk mendefinisikan tema kustom:
   - **`--font-main`** — Font utama yang digunakan di seluruh website. Dipanggil dengan class `font-main` di HTML.
   - **`--color-sky-blue`** — Warna biru langit (#088395) sebagai warna aksen utama. Dipanggil dengan class seperti `bg-sky-blue`, `text-sky-blue`.
   - **`--color-dark-blue`** — Warna biru gelap (#003285) untuk aksen sekunder.
   - **`--color-light-gray`** — Warna abu-abu terang (#f5f5f5) untuk latar belakang section.

> **Catatan:** Di Tailwind v4, kustomisasi tema dilakukan lewat CSS variables di blok `@theme`, bukan lewat `tailwind.config.js`.

---

## 5. Halaman Utama (index.html)

Halaman utama terdiri dari beberapa section besar. Setiap section punya peran dan struktur sendiri.

### 5.1 Struktur Dasar HTML

```html
<html lang="id" class="scroll-smooth">
```

- `lang="id"` — Menandakan konten dalam Bahasa Indonesia.
- `class="scroll-smooth"` — Membuat scroll antar section menjadi halus (CSS `scroll-behavior: smooth`).

```html
<body class="bg-white font-main text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white">
```

- `font-main` — Menggunakan font Montserrat (dari CSS).
- `transition-colors duration-300` — Animasi transisi warna saat beralih dark/light mode.

### 5.2 Navbar

Terletak di bagian atas halaman. Ada dua versi:

**Desktop Navbar** (visible di layar ≥1024px):
```html
<nav id="navbar" class="fixed left-1/2 top-4 z-50 ... rounded-full ...">
```
- `fixed` — Navbar tetap di posisi atas meskipun halaman di-scroll.
- `left-1/2` + `-translate-x-1/2` — Membuat navbar berada di tengah secara horizontal.
- `rounded-full` — Navbar berbentuk pill (pinggiran melengkung penuh).
- Awalnya transparan (`bg-transparent`), lalu berubah saat scroll (diatur oleh JavaScript).

**Mobile Sidebar** (visible di layar <1024px):
```html
<div id="mobile-menu" class="fixed right-0 top-0 z-50 h-full w-[65%] max-w-sm translate-x-full ...">
```
- `translate-x-full` — Sidebar tersembunyi di luar layar (ke kanan).
- JavaScript akan toggle class ini untuk membuka/menutup sidebar.
- `w-[65%]` — Lebar 65% dari layar. `max-w-sm` membatasi maksimal.

**Overlay** (background gelap saat sidebar terbuka):
```html
<div id="menu-overlay" class="fixed inset-0 z-40 hidden cursor-pointer bg-black/50 ..."></div>
```
- `hidden` — Tersembunyi default. JavaScript akan menampilkannya saat sidebar dibuka.
- `bg-black/50` — Latar hitam 50% transparan.
- Diklik → menutup sidebar.

**Tombol Theme Toggle:**
```html
<button id="theme-toggle" ...>
  <!-- SVG bulan (dark mode) -->
</button>
```
- Icon bulan (moon) untuk mengindikasikan dark mode.
- Diklik → JavaScript men-toggle dark mode dan mengganti icon.

**Tombol Hamburger:**
```html
<button id="hamburger" class="... lg:hidden" aria-controls="mobile-menu" aria-expanded="false">
```
- `lg:hidden` — Hanya muncul di layar kecil (<1024px).
- `aria-controls` dan `aria-expanded` — Untuk aksesibilitas.

### 5.3 Hero Section

```html
<section id="hero-section" class="relative m-2 min-h-[80vh] ... rounded-4xl bg-linear-to-b from-sky-blue to-sky-blue/30 ...">
```

- `m-2` — Memberi jarak 8px di semua sisi (ada efek "card").
- `min-h-[80vh]` — Minimal tinggi 80% viewport.
- `rounded-4xl` — Sudut sangat melengkung.
- `bg-linear-to-b from-sky-blue to-sky-blue/30` — Gradien vertikal dari biru pekat ke biru transparan.
- Di dark mode: `dark:bg-none dark:rounded-none` — Gradien dihilangkan karena background body sudah gelap.

### 5.4 About Section

```html
<section id="about" class="py-20 md:py-28 mt-12">
```

- `py-20 md:py-28` — Padding vertikal: 80px di mobile, 112px di desktop.
- Berisi teks tentang tim SapuSapu dengan tautan "Kenali Lebih Lanjut" yang mengarah ke section team.

### 5.5 Team Section

```html
<section id="team" class="py-20 md:py-28 bg-white dark:bg-slate-900">
```

Grid 3 kolom (1 kolom di mobile, 3 kolom di desktop):
```html
<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
```

Setiap kartu anggota memiliki:
- **Foto** — `aspect-square` untuk rasio 1:1
- **Nama** — `<h3>` tebal
- **Deskripsi** — `<p>` dengan warna lebih redup
- **Tombol "Lihat Profile"** — Link ke halaman profil masing-masing

Efek hover:
- `hover:-translate-y-1` — Kartu naik sedikit saat di-hover
- `group-hover:scale-105` — Foto membesar saat kartu di-hover
- `group-hover:shadow-xl` — Bayangan membesar

### 5.6 Project Section

```html
<section id="project" class="py-20 md:py-28 bg-light-gray dark:bg-slate-800">
```

Menampilkan informasi project dengan:
- Judul project
- Deskripsi singkat
- Tech stack badges (HTML, Tailwind CSS, JavaScript)
- Tombol link ke repository GitHub

Badges menggunakan:
```html
<span class="bg-sky-blue/20 text-dark-blue dark:text-white dark:bg-dark-blue px-4 py-2 rounded-full text-sm font-medium">
  HTML
</span>
```
- `bg-sky-blue/20` — Background biru 20% opacity
- `rounded-full` — Bentuk pill

### 5.7 Footer

```html
<footer class="bg-sky-blue py-8 text-white ... dark:bg-slate-950">
```

Footer sederhana dengan nama tim dan copyright. Warna menyesuaikan dark mode.

---

## 6. Halaman Profil Anggota

Setiap anggota punya file HTML masing-masing di `src/html/member/`. Struktur halaman profil:

### 6.1 Navbar & Mobile Menu

Sama persis dengan halaman utama, tapi link navigasi mengarah kembali ke `index.html`:
```html
<a href="../../../index.html#team">Team</a>
```

Path relatif: dari `src/html/member/charlie.html` ke `index.html` = naik 3 folder (`../../../`).

### 6.2 Hero Profil

Mirip dengan hero utama tapi menampilkan foto profil lingkaran:
```html
<div class="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto mb-6 overflow-hidden shadow-lg border-4 border-white/20">
  <img src="../../../assets/img/contoh_tim.jpeg" alt="Charlie Nicholas" class="w-full h-full object-cover" />
</div>
```

- `rounded-full` — Foto berbentuk lingkaran
- `border-4 border-white/20` — Border putih transparan di sekeliling foto
- `object-cover` — Gambar memenuhi container tanpa distorsi

Setiap anggota memiliki **quote** pribadi:
- Charlie: *"Code is poetry"*
- Zaki: *"Design with passion"*
- Zaskia: *"Simplicity is the ultimate sophistication"*

### 6.3 Informasi Pribadi

Grid 2 kolom berisi data:
- Nama Lengkap
- Peran
- Lokasi
- Jurusan

Menggunakan card dengan background `bg-light-gray` (atau `dark:bg-slate-800` di mode gelap).

### 6.4 Pendidikan

Informasi kampus: Politeknik Negeri Medan, Program Studi Manajemen Informatika.

### 6.5 Keahlian (Skills)

Grid 2-3 kolom dengan ikon SVG dan nama skill. Setiap skill card memiliki:
- Ikon dalam container `w-12 h-12 bg-sky-blue/20 rounded-xl`
- `group-hover:scale-110` — Ikon membesar saat di-hover

**Charlie** punya 3 skill: HTML & CSS, JavaScript, PHP.
**Zaki & Zaskia** punya 2 skill: HTML & CSS, JavaScript.

### 6.6 Hobi & Minat

Dua kolom, masing-masing berisi tag (badge) yang relevan:
- Hobi: Coding, Scrolling Fesnuk, Reading, Roasting Orang
- Minat: Web Development, Artificial Intelligence, Server

### 6.7 Target Belajar

Kotak dengan border kiri (`border-l-4 border-dark-blue`) berisi teks target belajar. Saat ini masih placeholder (Lorem ipsum).

### 6.8 Galeri Pribadi

Grid 3 kolom untuk foto-foto pribadi. Saat ini masih placeholder (img kosong).

### 6.9 Kontak

Tombol-tombol link sosial:
- **Email** — `mailto:` link
- **GitHub** — Link ke GitHub
- **Instagram** — Link ke Instagram

### 6.10 Review Teman

Dua kartu review dari anggota lain, lengkap dengan rating bintang dan tanda kutip.

### 6.11 Tombol Kembali

```html
<a href="../../../index.html#team">Kembali ke Tim</a>
```

Mengarahkan kembali ke section Team di halaman utama. Ada ikon panah kiri.

---

## 7. JavaScript (script.js)

File: `src/js/script.js` — Satu file JavaScript digunakan untuk **semua halaman** (index.html dan halaman profil member).

### 7.1 Mobile Menu (Baris 1-37)

```javascript
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const menuOverlay = document.getElementById("menu-overlay");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
```

**Mengambil elemen-elemen DOM** yang diperlukan. Jika elemen tidak ditemukan (misal di halaman yang berbeda), fungsi akan return early (safe guard).

**Fungsi `openMobileMenu()`:**

```javascript
function openMobileMenu() {
  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");
  menuOverlay.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
  hamburger?.setAttribute("aria-expanded", "true");
}
```

1. Menghilangkan class `translate-x-full` (sidebar di luar layar)
2. Menambahkan class `translate-x-0` (sidebar masuk ke layar)
3. Menampilkan overlay dengan menghapus `hidden`
4. Mencegah scroll body dengan `overflow-hidden`
5. Update atribut aksesibilitas `aria-expanded`

**Fungsi `closeMobileMenu()`:**

Kebalikan dari `openMobileMenu()` — menyembunyikan sidebar, overlay, mengembalikan scroll, dan update aria-expanded.

**Event listeners:**
- Klik hamburger → buka menu
- Klik tombol close → tutup menu
- Klik overlay → tutup menu
- Klik link navigasi mobile → tutup menu

**Resize handler:**
```javascript
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) closeMobileMenu();
});
```
Saat layar melebihi 1024px (breakpoint lg), menu mobile dipastikan tertutup.

### 7.2 Dark Mode (Baris 39-65)

```javascript
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;
```

**Fungsi `loadThemePreference()`:**

```javascript
function loadThemePreference() {
  const theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    html.classList.add("dark");
  }
  updateThemeIcon(theme === "dark");
}
```

1. Membaca preferensi theme dari `localStorage`
2. Jika tidak ada, default ke "light"
3. Jika "dark", tambahkan class `dark` ke elemen `<html>`
4. Update icon sesuai theme

**Fungsi `toggleTheme()`:**

```javascript
function toggleTheme() {
  const isDark = html.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeIcon(isDark);
}
```

1. Toggle class `dark` pada `<html>` (Tailwind akan menyesuaikan)
2. Simpan preferensi ke `localStorage`
3. Update icon

**Fungsi `updateThemeIcon(isDark)`:**

Mengganti icon tombol:
- **Mode gelap:** Icon matahari (sun) — memberi opsi untuk beralih ke terang
- **Mode terang:** Icon bulan (moon) — memberi opsi untuk beralih ke gelap

### 7.3 Navbar Scroll Effect (Baris 67-85)

```javascript
const navbar = document.getElementById("navbar");
const navbarTopClasses = ["bg-transparent", "text-white"];
const navbarScrolledClasses = [
  "bg-white/80", "text-slate-900", "shadow-lg",
  "backdrop-blur-md", "dark:bg-slate-900/80", "dark:text-white"
];
```

Dua set class yang akan ditukar:
- **Saat di atas (top):** Transparan, teks putih
- **Saat di-scroll:** Background putih semi-transparan (dengan efek blur), teks gelap, bayangan

**Fungsi `handleScroll()`:**

```javascript
function handleScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add(...navbarScrolledClasses);
    navbar.classList.remove(...navbarTopClasses);
  } else {
    navbar.classList.add(...navbarTopClasses);
    navbar.classList.remove(...navbarScrolledClasses);
  }
}
```

- Jika scroll > 50px → tampilkan navbar solid
- Jika scroll ≤ 50px → tampilkan navbar transparan

`window.addEventListener("scroll", handleScroll)` memanggil fungsi setiap kali user scroll.
`handleScroll()` dipanggil sekali di awal (baris 85) untuk set state awal yang benar.

---

## 8. Dark Mode

### 8.1 Cara Kerja

1. User klik tombol theme-toggle.
2. JavaScript toggle class `dark` pada elemen `<html>`.
3. Tailwind CSS membaca class `.dark` pada parent dan mengaktifkan variant `dark:`.
4. Semua elemen dengan class `dark:*` akan berubah style.
5. Preferensi disimpan di localStorage, jadi bertahan meskipun halaman di-refresh.

### 8.2 Di HTML

Setiap elemen yang perlu berubah di mode gelap punya class `dark:`:
```html
<body class="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
<div class="text-gray-600 dark:text-gray-400">
<section class="bg-white dark:bg-slate-800">
```

### 8.3 Di CSS

```css
@custom-variant dark (&:where(.dark, .dark *));
```

Ini memberitahu Tailwind bahwa variant `dark:` aktif ketika elemen memiliki class `.dark` (atau turunannya).

### 8.4 Icon yang Berubah

Di mode terang → icon bulan (mengajak ke mode gelap).
Di mode gelap → icon matahari (mengajak ke mode terang).

---

## 9. Responsive Design

Website ini menggunakan **mobile-first** approach (default style untuk mobile, lalu diperbesar untuk desktop).

### Breakpoints yang digunakan:

| Breakpoint | Ukuran Layar | Kegunaan |
|-----------|-------------|----------|
| Default | <768px | Mobile (sidebar, 1 kolom) |
| `md:` | ≥768px | Tablet (padding lebih besar) |
| `lg:` | ≥1024px | Desktop (navbar horizontal, 3 kolom) |

### Contoh responsive patterns:

**Grid anggota tim:**
```html
<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
```
- Mobile: 1 kolom
- Desktop (md+): 3 kolom

**Padding section:**
```html
<section class="py-20 md:py-28">
```
- Mobile: 80px padding vertikal
- Desktop: 112px padding vertikal

**Navbar:**
```html
<a class="hidden ... lg:flex">  <!-- Desktop: tampil -->
<button class="... lg:hidden">  <!-- Desktop: sembunyi -->
```

**Foto profil:**
```html
<div class="w-48 h-48 md:w-56 md:h-56">
```
- Mobile: 192px
- Desktop: 224px

---

## 10. Cara Menambahkan Anggota Baru

Untuk menambahkan anggota tim baru, lakukan langkah-langkah berikut:

### 10.1 Buat Halaman Profil

1. Copy file profil yang sudah ada (misal `charlie.html`) sebagai template.
2. Ubah konten:
   - `<title>` — Nama anggota
   - `alt` pada img — Nama anggota
   - Nama, quote, deskripsi di hero
   - Informasi Pribadi (nama, peran, lokasi, jurusan)
   - Pendidikan
   - Keahlian (skill cards)
   - Hobi & Minat
   - Target Belajar
   - Galeri Pribadi (ganti src gambar)
   - Kontak (email, GitHub, Instagram)
   - Review Teman

3. Simpan di `src/html/member/nama-anggota.html`.

### 10.2 Tambahkan di Halaman Utama

Di `index.html` dalam section `#team`, tambahkan card anggota baru di dalam grid:

```html
<div class="group bg-white dark:bg-slate-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
  <div class="aspect-square overflow-hidden bg-sky-blue/20">
    <img src="assets/img/foto_anggota.jpg" alt="Nama Anggota" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
  </div>
  <div class="p-6">
    <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-white">Nama Anggota</h3>
    <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">Deskripsi singkat.</p>
    <a href="src/html/member/nama-anggota.html" class="text-dark-blue dark:text-sky-blue font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
      Lihat Profile
      <svg ...>
    </a>
  </div>
</div>
```

### 10.3 Update Grid

Jika anggota melebihi 3, grid `md:grid-cols-3` otomatis menyesuaikan (Tailwind akan wrapping ke baris baru). Untuk jumlah anggota yang banyak, pertimbangkan mengganti ke `md:grid-cols-4` atau `lg:grid-cols-4`.

---

## 11. Alur Navigasi

### Dari halaman utama:
```
index.html
  ├── #hero        (hero section — scroll otomatis smooth)
  ├── #about       (tentang kami)
  ├── #team        (daftar anggota — klik "Lihat Profile" → halaman profil)
  │   ├── src/html/member/charlie.html  →  "Kembali ke Tim" → index.html#team
  │   ├── src/html/member/zaki.html     →  "Kembali ke Tim" → index.html#team
  │   └── src/html/member/zaskia.html   →  "Kembali ke Tim" → index.html#team
  └── #project     (project kami — link ke GitHub)
```

### Navigasi desktop:
Semua link navbar menggunakan anchor (`href="#about"`, `href="#team"`, dll.) yang membuat halaman scroll halus ke section terkait.

### Navigasi mobile:
Sama dengan navigasi desktop, tapi ditampilkan sebagai sidebar yang muncul dari kanan.

### Dari halaman profil:
Link navigasi mengarah ke `../../../index.html#section` — kembali ke halaman utama dengan anchor ke section tertentu.
Tombol "Kembali ke Tim" mengarah ke `../../../index.html#team`.

---

## Tips Pengembangan

1. **Setelah mengubah `input.css`**, jalankan `npm run build` atau `npm run watch` agar perubahan diterapkan ke `style.css`.

2. **Gunakan live server** (seperti Live Server di VS Code atau `python -m http.server`) saat mengembangkan. Membuka `index.html` langsung dari file system mungkin tidak memuat beberapa resource dengan benar.

3. **Untuk mengganti foto**, letakkan gambar di folder `assets/img/` dan update path `src` di tag `<img>`.

4. **Jika ingin menambah section baru**, ikuti pattern yang sudah ada: section dengan `id`, padding vertikal `py-20 md:py-28`, dan class dark mode `dark:bg-*`.

5. **Pastikan semua halaman** (index.html dan semua profil) tetap menggunakan `<script src="src/js/script.js"></script>` agar JavaScript berfungsi.
