<?php
//Fungsi Hapus
    global $conn; //Panggil Koneksi
    mysqli_query($conn,"DELETE FROM namatable WHERE id = $id"); //Eksekusi Berdasarkan ID Melalui Table
    return mysqli_affected_rows($conn); //Jalankan Koneksi
?>