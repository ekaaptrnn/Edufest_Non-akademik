// Fungsi untuk membuka halaman detail lomba sesuai yang diklik
function openDetail(namaLomba) {
    // Mengubah judul lomba di halaman detail
    document.getElementById('lomba-title').innerText = namaLomba;
    
    // Menyembunyikan halaman awal dan memunculkan halaman detail
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('detail-page').classList.add('active');
    
    // Auto scroll ke paling atas (penting terutama di HP)
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fungsi tombol kembali ke halaman utama
function goHome() {
    document.getElementById('detail-page').classList.remove('active');
    document.getElementById('home-page').classList.add('active');
}