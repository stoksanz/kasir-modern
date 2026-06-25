# Guardian Family - Aplikasi Keluarga

Aplikasi mobile-first untuk menghubungkan anggota keluarga dalam satu sistem dengan fitur lokasi, status, dan komunikasi dasar.

## 🚀 Fitur

### 1. Autentikasi
- Login
- Register
- Profil pengguna

### 2. Sistem Keluarga
- Buat keluarga baru
- Gabung keluarga dengan kode undangan
- Gabung keluarga dengan QR Code
- Daftar anggota keluarga
- Lihat detail anggota

### 3. Dashboard
- Total anggota keluarga
- Status online/offline
- Kontak darurat
- Aktivitas terbaru

### 4. Navigasi
- Bottom Navigation dengan 3 menu utama
- Home - Dashboard
- Keluarga - Daftar anggota
- Profil - Data pengguna

## 📦 Stack Teknologi

- **React** ^18.2.0
- **React Router DOM** ^6.14.0
- **Lucide React** (Icons) ^0.263.1
- **QRCode.react** (QR Code generator) ^1.0.1

## 🛠️ Struktur Folder

```
src/
├── components/          # Komponen reusable
│   ├── Button.js
│   ├── Card.js
│   ├── Header.js
│   ├── BottomNavigation.js
│   ├── MemberCard.js
│   └── ActivityItem.js
├── pages/              # Halaman aplikasi
│   ├── SplashScreen.js
│   ├── Login.js
│   ├── Register.js
│   ├── Home.js
│   ├── Family.js
│   ├── FamilyDetail.js
│   ├── CreateFamily.js
│   ├── JoinFamily.js
│   └── Profile.js
├── data/               # Mock data
│   └── mockData.js
├── styles/            # CSS files
│   ├── index.css
│   ├── App.css
│   ├── components/
│   └── pages/
├── App.js             # Root component
└── index.js           # Entry point
```

## 🎨 Desain

- **Tema Warna**: Biru (#0066cc) dan Putih
- **Style**: Material Design 3
- **Responsive**: Mobile-first approach
- **Layout**: Card-based

## 📝 Mock Data

Aplikasi ini menggunakan mock data yang bisa dengan mudah diganti dengan Firebase atau backend API lain.

Data mock ada di `src/data/mockData.js`:
- User data
- Family data
- Members
- Activities
- Emergency contacts

## 🚀 Cara Menjalankan

1. Install dependencies
```bash
npm install
```

2. Jalankan development server
```bash
npm start
```

3. Build untuk production
```bash
npm run build
```

## 🔄 Integrasi Firebase (Masa Depan)

Struktur kode sudah disiapkan untuk integrasi Firebase:
- Data di `mockData.js` bisa langsung diganti dengan Firestore queries
- Authentication bisa menggunakan Firebase Auth
- Real-time updates bisa menggunakan Firestore listeners

## 📱 Halaman

1. **Splash Screen** - Loading screen 2 detik
2. **Login** - Masuk dengan email & password
3. **Register** - Daftar akun baru
4. **Home** - Dashboard dengan statistik dan aktivitas
5. **Keluarga** - Daftar anggota keluarga
6. **Detail Anggota** - Info detail anggota
7. **Buat Keluarga** - Membuat keluarga baru + QR code
8. **Gabung Keluarga** - Bergabung dengan kode atau QR
9. **Profil** - Data profil pengguna

## 📋 TODO (Fitur ke Depan)

- [ ] Integrasi Firebase
- [ ] Real-time location tracking
- [ ] Messaging system
- [ ] Push notifications
- [ ] Emergency SOS
- [ ] Chat messaging
- [ ] Call integration

## 📄 Lisensi

MIT License
