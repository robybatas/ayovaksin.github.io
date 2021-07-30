function cariJadwal(puskesmas) {
    if(puskesmas === 'Beji') {
        return 'Jadwal untuk vaksin adalah tanggal 2 Agustus jam 8:00-16:00'
    } else if(puskesmas === 'Pancoran Mas') {
        return 'Jadwal untuk vaksin adalah tanggal 3 Agustus jam 8:00-16:00'
    } else if(puskesmas === 'Cipayung') {
        return 'Jadwal untuk vaksin adalah tanggal 4 Agustus jam 8:00-16:00'
    } else if(puskesmas === 'Sukmajaya') {
        return 'Jadwal untuk vaksin adalah tanggal 5 Agustus jam 8:00-16:00'
    } else if(puskesmas === 'Cilodong') {
        return 'Jadwal untuk vaksin adalah tanggal 30 Juli jam 8:00-16:00'
    } else if(puskesmas === 'Limo') {
        return 'Jadwal untuk vaksin adalah tanggal 6 Agustus jam 8:00-16:00'
    } else if(puskesmas === 'Cinere') {
        return 'Jadwal untuk vaksin adalah tanggal 31 Juli jam 8:00-16:00'
    } else if(puskesmas === 'Cimanggis') {
        return 'Jadwal untuk vaksin adalah tanggal 7 Agustus jam 8:00-16:00'
    } else if(puskesmas === 'Tapos') {
        return 'Jadwal untuk vaksin adalah tanggal 8 Agustus jam 8:00-16:00'
    } else if(puskesmas === 'Sawangan') {
        return 'Jadwal untuk vaksin adalah tanggal 9 Agustus jam 8:00-16:00'
    } else {
        return 'Jadwal untuk vaksin adalah tanggal 10 Agustus jam 8:00-16:00'
    }
}
console.log(cariJadwal('Beji'))