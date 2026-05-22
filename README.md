# Project Akhir Growcaps 2026 — SapuSapu

Website portofolio kelompok yang menampilkan profil tim, anggota, dan project yang dikerjakan. Dibangun oleh **Tim SapuSapu** sebagai project akhir program Growcaps 2026.

## Tech Stack

- **HTML5** — Struktur halaman
- **Tailwind CSS v4** — Utility-first CSS framework
- **JavaScript** — Interaktivitas (mobile menu, dark mode, navbar scroll)

## Fitur

- Tampilan responsif (mobile-first)
- Dark mode toggle (tersimpan di localStorage)
- Navigasi mobile dengan sidebar
- Navbar transparan yang berubah saat di-scroll
- Halaman profil masing-masing anggota tim

## Anggota Tim

| Nama              | Peran                       |
| ----------------- | --------------------------- |
| Charlie Nicholas  | Project Lead & Full Stack Dev |
| Zaki              | Anggota                     |
| Zaskia            | Anggota                     |

## Cara Menjalankan

1. Install dependencies:

```bash
npm install
```

2. Build CSS Tailwind:

```bash
npm run build
```

3. Atau jalankan watch mode untuk development:

```bash
npm run watch
```

4. Buka `index.html` di browser (gunakan live server untuk hot reload).

## Struktur Folder

```
Project-Akhir-Growcaps/
├── index.html                # Halaman utama
├── src/
│   ├── css/
│   │   ├── input.css         # Source CSS (Tailwind + custom)
│   │   └── style.css         # Output CSS (build)
│   ├── html/
│   │   └── member/           # Profil anggota tim
│   ├── js/
│   │   └── script.js         # JavaScript utama
├── assets/
│   └── img/                  # Gambar
├── package.json
└── README.md
```

## Lisensi

ISC
