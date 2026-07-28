// Data singkat tiap cabang lomba: ikon & deskripsi yang tampil di halaman detail.
// Silakan sunting teks deskripsi sesuai kebutuhan.
const LOMBA_DATA = {
    'Band Competition': {
        icon: '🎸',
        desc: 'Tampilkan performa terbaik band-mu di atas panggung Edufest 2026.',
        poster: 'poster-band.jpg'
    },
    'E-Sport Competition': {
        icon: '🎮',
        desc: 'Adu strategi dan skill bareng tim e-sport terbaik kampus.',
        poster: 'poster-esport.jpg'
    },
    'Futsal Competition': {
        icon: '⚽',
        desc: 'Kompak, kompetitif, dan penuh semangat sportivitas di lapangan.',
        poster: 'poster-futsal.png'
    }
};

// Fungsi untuk membuka halaman detail lomba sesuai yang diklik
function openDetail(namaLomba) {
    const data = LOMBA_DATA[namaLomba] || { icon: '🏆', desc: '' };

    // 1. Mengubah judul, ikon, dan deskripsi di halaman detail
    document.getElementById('lomba-title').innerText = namaLomba;
    document.getElementById('lomba-icon').innerText = data.icon;
    document.getElementById('lomba-desc').innerText = data.desc;

    // 1b. Mengganti gambar poster & link unduh sesuai lomba
    const posterImg = document.getElementById('lomba-poster');
    const posterDownload = document.getElementById('poster-download');
    posterImg.src = data.poster;
    posterImg.alt = 'Poster ' + namaLomba;
    posterDownload.href = data.poster;
    posterDownload.setAttribute('download', data.poster);

    // 2. Logika khusus untuk menampilkan "Pengumpulan Karya" HANYA di Lomba Band
    const menuPengumpulanKarya = document.getElementById('menu-pengumpulan-karya');

    if (namaLomba === 'Band Competition') {
        menuPengumpulanKarya.style.display = 'flex'; // Tampilkan menu
    } else {
        menuPengumpulanKarya.style.display = 'none'; // Sembunyikan menu
    }

    // 3. Menyembunyikan halaman awal dan memunculkan halaman detail
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('detail-page').classList.add('active');

    // 4. Auto scroll ke paling atas agar layar pengguna tidak tertinggal di bawah
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fungsi tombol kembali ke halaman utama
function goHome() {
    document.getElementById('detail-page').classList.remove('active');
    document.getElementById('home-page').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}