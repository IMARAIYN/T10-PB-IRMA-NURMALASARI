const mahasiswaNim = '202220040127';
const updateData = {
    nama: 'IRMA NURMALASARI',
    gender: 'P',
    prodi: 'TI',
    alamat: 'JL.RAYA PARUNGKUDA'
};

fetch (`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringfy(updateData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));