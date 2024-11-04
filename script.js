const pdfs = {
    '241103052445': ['sumini.pdf', '241103052445 (1).pdf.crdownload.pdf'], 
    'abcde': ['path/to/your/pdf2.pdf'],
    '67890': ['path/to/your/pdf3.pdf', 'additional2.pdf'],
    '12345677899876': ['path/to/your/pdf4.pdf']
    // Tambahkan kode dan PDF sesuai kebutuhan
};

function checkCodes() {
    const userInput = document.getElementById('codeInput').value;
    const codes = userInput.split(',').map(code => code.trim());
    const imageSection = document.getElementById('imageSection');

    // Hapus konten sebelumnya
    imageSection.innerHTML = '';

    // Cek setiap kode yang dimasukkan
    codes.forEach(code => {
        if (pdfs[code]) {
            pdfs[code].forEach(pdf => {
                const embed = document.createElement('embed');
                embed.src = pdf;
                embed.type = 'application/pdf';
                embed.style.width = '100%'; // Sesuaikan lebar
                embed.style.height = '600px'; // Sesuaikan tinggi
                imageSection.appendChild(embed);
            });
        } else {
            alert(`Kode "${code}" salah! Silakan coba lagi.`);
        }
    });
}
