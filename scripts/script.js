let daftar_mahasiswa=JSON.parse(localStorage.getItem("data")) || [];

displayData();

function checkObject(data) {
    for (const key in data) {
      if (data[key] === null || data[key] === '') {
        return false;
      }
    }
    return true;
  }

function addData(){
    const inputName=document.querySelector(".nama");
    const nama=inputName.value;
    const inputNIM=document.querySelector(".nim");
    const NIM=inputNIM.value;
    const inputProdi=document.querySelector(".prodi");
    const prodi=inputProdi.value;
    const inputEmail=document.querySelector(".email");
    const email=inputEmail.value;
    const inputPass=document.querySelector(".password");
    const password=inputPass.value;
    const inputGender=document.querySelector(".gender");
    const gender=inputGender.value;
    const inputTTL=document.querySelector(".ttl");
    const ttl=inputTTL.value;
    const inputAlamat=document.querySelector(".alamat");
    const alamat=inputAlamat.value;

    data={
        nama:nama,
        NIM:NIM,
        prodi:prodi,
        email:email,
        password:password,
        gender:gender,
        ttl:ttl,
        alamat:alamat,
    }
    const validasi=checkObject(data);

    if(validasi){
        daftar_mahasiswa.push(data);
        localStorage.setItem("data", JSON.stringify(daftar_mahasiswa));
        alert("Data Berhasil Di Input");
    }
}

function displayData(){
    let dataHTML = "";
  
    for (let i = 0; i < daftar_mahasiswa.length; i++) {
      const nama = daftar_mahasiswa[i].nama;
      const NIM = daftar_mahasiswa[i].NIM;
      const prodi = daftar_mahasiswa[i].prodi;
      const email = daftar_mahasiswa[i].email;
      const password = daftar_mahasiswa[i].password;
      const gender = daftar_mahasiswa[i].gender;
      const ttl = daftar_mahasiswa[i].ttl;
      const alamat = daftar_mahasiswa[i].alamat;
      
      const html = `<tr><td>${nama}</td><td>${NIM}</td><td>${prodi}</td><td>${email}</td><td>${password}</td><td>${gender}</td><td>${ttl}</td><td>${alamat}</td></tr>`;
      dataHTML += html;
    }
    document.querySelector(".table_mahasiswa").innerHTML += dataHTML;
}

function clearData(){
    localStorage.clear();
    location.reload();
}