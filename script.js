const LOMBA_DATA = {
    'Band Competition': {
        icon: '🎸',
        desc: 'Tampilkan performa terbaik band-mu di atas panggung Edufest 2026.',
        poster: 'poster-band.jpg',
        handbook: 'MASUKKAN_LINK_HANDBOOK_BAND_DISINI',
        twibbon: 'https://uns.id/TwibbonPesertaEdufest2026',
        berkas: 'MASUKKAN_LINK_BERKAS_BAND_DISINI',
        pendaftaran: 'https://docs.google.com/forms/d/e/1FAIpQLSeVWBjze6aAkp3yG7ErEJ42B79xbBAcaqSzD240r5gg4tm3bg/viewform?usp=publish-editor',
        pengumpulanKarya: 'https://uns.id/SubmitKaryaEdufest2026',
        contactPerson: 'https://wa.me/6285975001017'
    },
    'E-Sport Competition': {
        icon: '🎮',
        desc: 'Adu strategi dan skill bareng tim e-sport terbaik kampus.',
        poster: 'poster-esport.jpg',
        handbook: 'MASUKKAN_LINK_HANDBOOK_ESPORT_DISINI',
        twibbon: 'https://uns.id/TwibbonPesertaEdufest2026',
        berkas: 'MASUKKAN_LINK_BERKAS_ESPORT_DISINI',
        pendaftaran: 'https://forms.gle/gqCMSB1PSfaW9BnAA',
        pengumpulanKarya: null,
        contactPerson: 'MASUKKAN_LINK_WA_CP_ESPORT_DISINI'
    },
    'Futsal Competition': {
        icon: '⚽',
        desc: 'Kompak, kompetitif, dan penuh semangat sportivitas di lapangan.',
        poster: 'poster-futsal.png',
        handbook: 'MASUKKAN_LINK_HANDBOOK_FUTSAL_DISINI',
        twibbon: 'https://uns.id/TwibbonPesertaEdufest2026',
        berkas: 'MASUKKAN_LINK_BERKAS_FUTSAL_DISINI',
        pendaftaran: 'https://docs.google.com/forms/d/e/1FAIpQLSeITvohk8OzVSDhu_P03fyoXMMgbyqyEKUF52KJlSNnob6lGQ/viewform?usp=header',
        pengumpulanKarya: null,
        contactPerson: 'MASUKKAN_LINK_WA_CP_FUTSAL_DISINI'
    }
};

// Fungsi untuk membuka halaman detail lomba sesuai yang diklik
function openDetail(namaLomba) {
    const data = LOMBA_DATA[namaLomba];
    if (!data) return;

    // 1. Judul, ikon, dan deskripsi
    document.getElementById('lomba-title').innerText = namaLomba;
    document.getElementById('lomba-icon').innerText = data.icon;
    document.getElementById('lomba-desc').innerText = data.desc;

    // 2. Poster & tombol unduh — beda tiap lomba
    const posterImg = document.getElementById('lomba-poster');
    const posterDownload = document.getElementById('poster-download');
    posterImg.src = data.poster;
    posterImg.alt = 'Poster ' + namaLomba;
    posterDownload.href = data.poster;
    posterDownload.setAttribute('download', data.poster);

    // 3. Semua link menu — beda tiap lomba
    document.getElementById('menu-handbook').href = data.handbook;
    document.getElementById('menu-twibbon').href = data.twibbon;
    document.getElementById('menu-berkas').href = data.berkas;
    document.getElementById('menu-pendaftaran').href = data.pendaftaran;
    document.getElementById('menu-contact-person').href = data.contactPerson;

    // 4. Menu "Pengumpulan Karya" hanya tampil kalau lomba punya link-nya (khusus Band)
    const menuPengumpulanKarya = document.getElementById('menu-pengumpulan-karya');
    if (data.pengumpulanKarya) {
        menuPengumpulanKarya.href = data.pengumpulanKarya;
        menuPengumpulanKarya.style.display = 'flex';
    } else {
        menuPengumpulanKarya.style.display = 'none';
    }

    // 5. Pindah halaman & scroll ke atas
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('detail-page').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fungsi tombol kembali ke halaman utama
function goHome() {
    document.getElementById('detail-page').classList.remove('active');
    document.getElementById('home-page').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}