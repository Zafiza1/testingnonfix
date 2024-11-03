const images = {
    '12345': 'WhatsApp Image 2024-08-13 at 16.47.12_57df6dce.jpg',
    'abcde': 'OIP.jpg',
    '67890': 'gambar3.jpg',
    // Tambahkan kode dan gambar sesuai kebutuhan
};

function checkCode() {
    const userInput = document.getElementById('codeInput').value;
    const imageSection = document.getElementById('imageSection');

    // Hapus gambar yang sebelumnya ditampilkan
    imageSection.innerHTML = '';

    // Cek jika kode ada di objek
    if (images[userInput]) {
        const img = document.createElement('img');
        img.src = images[userInput];
        img.alt = `Gambar untuk kode ${userInput}`;
        img.style.display = 'block'; // Pastikan gambar ditampilkan
        imageSection.appendChild(img);
    } else {
        alert('Kode salah! Silakan coba lagi.');
    }
}
