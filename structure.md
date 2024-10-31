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
│   │   ├── Button.tsx              # Komponen tombol
│   │   ├── Navbar.tsx              # Komponen navbar
│   │   ├── Footer.tsx              # Komponen footer
│   │   ├── DarkModeToggle.tsx      # Komponen toggle untuk dark mode
│   │   ├── EventCard.tsx           # Komponen untuk kartu event di Kalender Acara
│   │   └── TestimonialCard.tsx     # Komponen untuk menampilkan testimoni
│   ├── context/                    # Context API untuk state global
│   │   └── ThemeContext.tsx        # Context untuk dark mode dan tema
│   ├── hooks/                      # Custom hooks
│   │   └── useDarkMode.ts          # Custom hook untuk mengelola dark mode
│   ├── layouts/                    # Layout umum untuk halaman
│   │   └── MainLayout.tsx          # Layout utama yang mengatur tampilan keseluruhan
│   ├── pages/                      # Halaman utama aplikasi
│   │   ├── Home.tsx                # Halaman utama (home)
│   │   ├── About.tsx               # Halaman tentang kedai kopi
│   │   ├── Events.tsx              # Halaman untuk kalender acara mahasiswa
│   │   ├── Menu.tsx                # Halaman untuk daftar menu
│   │   └── Contact.tsx             # Halaman kontak dan reservasi acara
│   ├── sections/                   # Section modular untuk setiap bagian halaman
│   │   ├── HeroSection.tsx         # Section hero untuk welcome banner
│   │   ├── AboutSection.tsx        # Section tentang kedai kopi
│   │   ├── MenuSection.tsx         # Section untuk menampilkan menu populer
│   │   ├── EventCalendarSection.tsx# Section untuk kalender acara mahasiswa
│   │   ├── TestimonialSection.tsx  # Section untuk testimoni mahasiswa
│   │   └── ReservationSection.tsx  # Section untuk kontak reservasi
│   ├── types/                      # Definisi tipe atau antarmuka
│   │   └── event.d.ts              # Tipe terkait data event atau testimoni
│   ├── utils/                      # Fungsi utilitas atau konstanta
│   │   └── constants.ts            # Konstanta seperti tema warna, informasi kontak
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