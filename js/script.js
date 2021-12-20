
function validasi() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if(email == "" || password == ""){
    alert("tidak boleh kosong");
  }
  else if(email == "JohnStore@bookstore.com" && password == "johnstore"){
    window.location.href="Katalog.html";
  }
  else{
    alert("email atau password yang anda masukkan salah");
  }
  
}
