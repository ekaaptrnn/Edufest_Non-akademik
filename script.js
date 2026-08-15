const LOMBA_DATA = {
    'Band Competition': {
        icon: '🎸',
        desc: 'Tampilkan performa terbaik band-mu di atas panggung Edufest 2026.',
        poster: 'poster-band2.png',
        handbook: 'https://drive.google.com/file/d/1neTe08dH9wM7K89Nt7ma8CIFmBst93NE/view?usp=sharing',
        twibbon: 'https://uns.id/TwibbonPesertaEdufest2026',
        captionTwibbon: 'https://docs.google.com/document/d/1ye4zzjLJoAkknrJWbWTz_2bVsxm2Q03XJSYLtJ-Fwm4/edit?usp=sharing', // Sesuaikan link caption jika ada
        berkas: 'https://drive.google.com/drive/folders/1i7h4sSKd2YocMGT1zD2eqqoYOZB4WOEI?usp=drive_link',
        pendaftaran: 'https://docs.google.com/forms/d/e/1FAIpQLSeVWBjze6aAkp3yG7ErEJ42B79xbBAcaqSzD240r5gg4tm3bg/viewform?usp=publish-editor',
        pengumpulanKarya: 'https://uns.id/SubmitKaryaEdufest2026',
        contactPerson: 'https://wa.me/6285975001017'
    },
    'E-Sport Competition': {
        icon: '🎮',
        desc: 'Adu strategi dan skill bareng tim e-sport terbaik kampus.',
        poster: 'poster-esport2.png',
        handbook: 'https://drive.google.com/file/d/1f1Ob61mT67cf0zUBiZQyxIYyzpCQQrIj/view?usp=drive_link',
        twibbon: 'https://uns.id/TwibbonPesertaEdufest2026',
        captionTwibbon: 'https://docs.google.com/document/d/17CcVrTMRdipI5tFDmT5zJUx9FzkSYqB2/edit?usp=drive_link&ouid=108089471838212221847&rtpof=true&sd=true', // Sesuaikan link caption jika ada
        berkas: null,
        pendaftaran: 'https://forms.gle/gqCMSB1PSfaW9BnAA',
        pengumpulanKarya: null,
        contactPerson: 'https://wa.me/6285727326474'
    },
    'Futsal Competition': {
        icon: '⚽',
        desc: 'Kompak, kompetitif, dan penuh semangat sportivitas di lapangan.',
        poster: 'poster-futsal.jpg',
        handbook: 'https://drive.google.com/file/d/1-4nCgU9xSpizVpj-xoml0Q-55F1Zit9C/view?usp=drivesdk',
        twibbon: 'https://uns.id/TwibbonPesertaEdufest2026',
        captionTwibbon: 'https://docs.google.com/document/d/1g8L5ZNh20b46LKNJx8R9vrj47zsHfWMZFCV_Tsq8iz8/edit?usp=sharing', // Sesuaikan link caption jika ada
        berkas: 'https://docs.google.com/document/d/1QT8fAeAD3uDJNVT0v8ik20bGSm4w0oXg/edit?usp=drive_link&ouid=108089471838212221847&rtpof=true&sd=true',
        pendaftaran: 'https://docs.google.com/forms/d/e/1FAIpQLSeITvohk8OzVSDhu_P03fyoXMMgbyqyEKUF52KJlSNnob6lGQ/viewform?usp=header',
        pengumpulanKarya: null,
        contactPerson: 'https://wa.me/6285713942242'
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

    // 4. Menu "Caption Twibbon" diatur link dan kondisinya
    const menuCaptionTwibbon = document.getElementById('menu-caption-twibbon');
    if (data.captionTwibbon) {
        menuCaptionTwibbon.href = data.captionTwibbon;
        menuCaptionTwibbon.style.display = 'flex';
    } else {
        menuCaptionTwibbon.style.display = 'none';
    }

    const menuBerkas = document.getElementById('menu-berkas');
    if (data.berkas) {
        menuBerkas.href = data.berkas;
        menuBerkas.style.display = 'flex';
    } else {
        menuBerkas.style.display = 'none';
    }

    // 5. Menu "Pengumpulan Karya" hanya tampil kalau lomba punya link-nya (khusus Band)
    const menuPengumpulanKarya = document.getElementById('menu-pengumpulan-karya');
    if (data.pengumpulanKarya) {
        menuPengumpulanKarya.href = data.pengumpulanKarya;
        menuPengumpulanKarya.style.display = 'flex';
    } else {
        menuPengumpulanKarya.style.display = 'none';
    }

    // 6. Pindah halaman & scroll ke atas
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