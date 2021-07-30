let submitUsia = document.getElementById('input-submit');

submitUsia.addEventListener('click', function() {
    let inputAge = document.getElementById("input-age").value
    if (Number(inputAge) <= 11) {
        alert('Usia kamu belum masuk kriteria untuk mendapatkan vaksin.')
    } else {
        alert('Usia kamu sudah masuk kriteria untuk mendapatkan vaksin. Silahkan cek lokasi vaksin dan jadwal yang tersedia.')
    }
})

let test = document.getElementById('test');

test.addEventListener('click', function() {
    alert('test')
})