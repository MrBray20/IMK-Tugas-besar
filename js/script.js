function checkForm(){
  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const em = admin;
  const pas = admin;
  if(username==="admin"&&password==="admin"){
    window.location.href="Katalog.html";
  }
  else{
    
    
  }
}



function cekEmail(nilai, pesan) {
  const email = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
  const em = nilai.value
  if (nilai.value.match(email)) {
    return true;
  } else {
    alert(pesan);
    nilai.focus();
    return false;
  }
}

function Password(nilai, pesan) {
  const alphaExp = /^[a-zA-Z]+$/;
  if(nilai == ""){
    alert("salah")
    return false
  }
  else if (nilai.value.match(alphaExp)) {
    return true;
  } else {
    alert(pesan);
    nilai.focus();
    return false;
  }
}

function validasi() {
  cekEmail(document.getElementById("email"), "Email tidak benar!!");
  Number(document.getElementById("password"), "Telp. hanya ber isi Number!!");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if(email == "" || password == ""){
    alert("tidak boleh kosong");
  }
  else if(email == "JohnStore@bookstore.com" && password == "johnstore"){
    window.location.href="Katalog.html";
  }
  else{
    document.getElementById('kosong').innerHTML = salah;
  }
  
}
