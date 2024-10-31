```md
my-nextui-project/
├── public/
│   └── favicon.ico                 # Favicon proyek
├── src/
│   ├── assets/                     # Media atau aset statis
│   │   ├── images/                 # Folder untuk menyimpan gambar
│   │   └── styles/                 # Folder untuk stylesheet khusus
│   │       └── globals.css         # Style global atau tambahan CSS
│   ├── components/                 # Komponen umum yang dapat digunakan kembali
│   │   ├── Button.tsx              # Contoh komponen button dengan TypeScript
│   │   ├── Navbar.tsx              # Komponen navbar
│   │   └── DarkModeToggle.tsx      # Komponen toggle untuk dark mode
│   ├── context/                    # Context API untuk state global
│   │   └── ThemeContext.tsx        # Context untuk dark mode dan tema
│   ├── hooks/                      # Custom hooks
│   │   └── useDarkMode.ts          # Custom hook untuk mengelola dark mode
│   ├── layouts/                    # Layout umum untuk halaman
│   │   └── MainLayout.tsx          # Layout utama untuk tampilan
│   ├── pages/                      # Halaman utama aplikasi
│   │   ├── Home.tsx                # Halaman utama (home)
│   │   └── About.tsx               # Halaman tentang (about)
│   ├── types/                      # Definisi tipe atau antarmuka
│   │   └── theme.d.ts              # Tipe terkait tema atau dark mode
│   ├── utils/                      # Fungsi utilitas atau konstanta
│   │   └── constants.ts            # Konstanta seperti tema warna
│   ├── App.tsx                     # Komponen utama aplikasi
│   ├── main.tsx                    # Entry point React
│   └── index.css                   # File Tailwind CSS utama (mengimpor direktif Tailwind)
├── .gitignore                      # Mengabaikan file atau folder tertentu dari git
├── tsconfig.json                   # Konfigurasi TypeScript
├── package.json                    # Daftar dependensi proyek
├── postcss.config.js               # Konfigurasi PostCSS
├── tailwind.config.js              # Konfigurasi Tailwind CSS (termasuk dark mode dan tema)
└── vite.config.ts                  # Konfigurasi Vite dalam TypeScript
```