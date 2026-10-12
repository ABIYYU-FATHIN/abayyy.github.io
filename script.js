function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "aktif");
    } else {
        localStorage.setItem("darkMode", "nonaktif");
    }
}

if (localStorage.getItem("darkMode") === "aktif") {
    document.body.classList.add("dark-mode");
}


function sembunyikanFoto() {
    document.getElementById("fotoSaya").style.display = "none";
}


function tampilkanFoto() {
    document.getElementById("fotoSaya").style.display = "block";
}


function kirimPesan(event) {

    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;
    let hasil = document.getElementById("hasilPesan");

    if (nama === "" || email === "" || pesan === "") {

        hasil.innerText = "Semua data harus diisi!";
        hasil.style.color = "red";

    } else {

        hasil.innerText = "Pesan berhasil dikirim!";
        hasil.style.color = "green";

        document.getElementById("nama").value = "";
        document.getElementById("email").value = "";
        document.getElementById("pesan").value = "";
    }
}