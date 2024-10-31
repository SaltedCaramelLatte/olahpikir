# Penjelasan Struktur dan Fungsinya

### public/
Folder ini menyimpan favicon atau aset umum lainnya yang tidak dimodifikasi oleh proses build.

### src/assets/
Menyimpan gambar atau file CSS yang bisa digunakan di seluruh aplikasi, seperti `globals.css` untuk styling tambahan di luar Tailwind.

### src/components/
Menyimpan komponen-komponen **reusable** yang umum, seperti `Button`, `Navbar`, `Footer`, serta komponen khusus seperti `EventCard` dan `TestimonialCard` untuk menampilkan informasi acara dan testimoni.

### src/context/
Menyimpan konteks global seperti `ThemeContext` untuk mengelola **dark mode** di seluruh aplikasi.

### src/hooks/
Menyimpan custom hooks seperti `useDarkMode` untuk logika dark mode yang bisa digunakan di beberapa komponen.

### src/layouts/
Berisi layout utama aplikasi, seperti `MainLayout`, yang mengatur struktur dasar halaman dengan komponen `Navbar` dan `Footer`.

### src/pages/
Folder ini berisi file halaman untuk **navigasi utama**:

- **Home.tsx**: Halaman utama yang menampilkan `HeroSection`, `MenuSection`, `EventCalendarSection`, dan `TestimonialSection`.
- **Events.tsx**: Halaman untuk kalender acara mahasiswa, menampilkan semua event yang akan datang.
- **Menu.tsx**: Halaman yang menampilkan daftar menu lengkap.
- **About.tsx**: Halaman dengan informasi lebih mendalam tentang kedai kopi.
- **Contact.tsx**: Halaman kontak dengan informasi untuk reservasi acara atau menghubungi kedai.

### src/sections/
Bagian modular dari halaman yang dapat digunakan di berbagai halaman.

- **HeroSection.tsx**: Section utama atau banner dengan pesan selamat datang.
- **AboutSection.tsx**: Tentang kedai, termasuk misi dan tujuan.
- **MenuSection.tsx**: Menampilkan menu populer atau promo khusus.
- **EventCalendarSection.tsx**: Kalender acara mahasiswa yang bisa ditampilkan di halaman Home atau Events.
- **TestimonialSection.tsx**: Menampilkan testimoni atau review mahasiswa.
- **ReservationSection.tsx**: Kontak untuk reservasi, dengan link ke WhatsApp atau media sosial.

### src/types/
Menyimpan tipe atau antarmuka TypeScript, seperti `event.d.ts` yang mendefinisikan tipe untuk data acara atau testimoni.

### src/utils/
Menyimpan fungsi-fungsi utilitas atau konstanta yang sering digunakan di seluruh aplikasi, seperti **konstanta warna tema** atau **informasi kontak**.

### App.tsx
Komponen utama yang merender layout dan mengelola **routing** di aplikasi.

### main.tsx
Entry point untuk aplikasi React yang merender `App.tsx`.

### index.css
File utama untuk **Tailwind CSS** yang mengimpor direktif Tailwind (`@tailwind base;`, `@tailwind components;`, dan `@tailwind utilities;`).


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