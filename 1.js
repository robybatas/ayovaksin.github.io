let submitUsia = document.getElementById('input-submit');

submitUsia.addEventListener('click', function() {
    let inputAge = document.getElementById("input-age").value
    if (Number(inputAge) <= 11) {
        let test = document.getElementById('test')
        let next = document.getElementById('next')
        test.innerHTML = 'Usia kamu belum masuk kriteria untuk mendapatkan vaksin.'
        next.innerHTML = ''
    } else {
        let test = document.getElementById('test')
        let next = document.getElementById('next')
        test.innerHTML = 'Usia kamu sudah masuk kriteria untuk mendapatkan vaksin. Silahkan cek lokasi vaksin dan jadwal yang tersedia.'
        next.innerHTML = `<a href="selectLocation.html">Lanjutkan</a>`
    }
})
