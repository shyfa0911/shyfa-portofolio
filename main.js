 // penyimpan data produk
 var dataproduk = [];

 // kode produk
 var kodeincrement = 1;

 var modeEdit = false;

 var indexProdukEdit = null;


 // penyimpan produk
 function menyimpanproduk () {
     var kodeProduk = document.getElementById('kode-produk').value;
     var namaProduk = document.getElementById('nama-produk').value;
     var hargaProduk = document.getElementById('harga-produk').value;
     var satuanProduk = document.getElementById('satuan-produk').value;
     var kategoriProduk = document.getElementById('kategori-produk').value;
     var gambarProduk = document.getElementById('gambar-produk').value;
     var stokProduk = document.getElementById('stok-produk').value;

     if (modeEdit) {

         dataproduk[indexProdukEdit] = {
         kodeProduk,
         namaProduk,
         hargaProduk,
         satuanProduk,
         kategoriProduk,
         gambarProduk,
         stokProduk
     };

     modeEdit = false;


     indexProdukEdit = null;
         
     } else {

         dataproduk.push({
         kodeProduk,
         namaProduk,
         hargaProduk,
         satuanProduk,
         kategoriProduk,
         gambarProduk,
         stokProduk
     });

     kodeincrement++
         
     }


     document.getElementById("kode-produk").value = 'MD-' + String(kodeincrement).padStart(3, '0');

     // inii untuk render ulang formnya
     document.getElementById('nama-produk').value = '';
     document.getElementById('harga-produk').value = '';
     document.getElementById('satuan-produk').value = 'choose...';
     document.getElementById('kategori-produk').value = 'choose...';
     document.getElementById('gambar-produk').value = '';
     document.getElementById('stok-produk').value = '';

     console.log(dataproduk);

     menampilkanTabel();
 }


 function editData(index){
    var produkEdit = dataproduk[index];

    document.getElementById('kode-produk').value = produkEdit.kodeProduk;
     document.getElementById('nama-produk').value = produkEdit.namaProduk;
     document.getElementById('harga-produk').value = produkEdit.hargaProduk;
     document.getElementById('satuan-produk').value = produkEdit.satuanProduk;
     document.getElementById('kategori-produk').value = produkEdit.kategoriProduk;
     document.getElementById('gambar-produk').value = produkEdit.gambarProduk;
     document.getElementById('stok-produk').value = produkEdit.stokProduk;

     modeEdit = true;

     indexProdukEdit = index;
 }



// parameter "()" bentuk variabel
 function hapusproduk(index){
     dataproduk.splice(index, 1);
     // render ulang tabel
     menampilkanTabel();
 }

 // nampilin table
 function menampilkanTabel(){
     var tBody = document.getElementById("body-table");
     
     tBody.innerHTML = ``;

     dataproduk.forEach(function(dataProduk, index){
         
        var tr = tBody.insertRow();
    //pakai ``//
     var warning = 'white'

      if (dataProduk.stokProduk <= 5 ) {
      warning = 'red'
     }


        tr.innerHTML = `
        <td>${index + 1}</td>
         <td>${dataProduk.kodeProduk}</td>
         <td>${dataProduk.namaProduk}</td>
         <td>${dataProduk.hargaProduk}</td>
         <td>${dataProduk.satuanProduk}</td>
         <td>${dataProduk.kategoriProduk}</td>
         <td>${dataProduk.gambarProduk}</td>
         <td style= "background: ${warning}">${dataProduk.stokProduk}</td> 
         <td>
             <button onclick = "editData(${index})" > Edit </button><button onclick = "hapusproduk(${index})">delete</button>
         </td>
        `;
     });
 }

 document.getElementById("kode-produk").value = 'MD-' + String(kodeincrement).padStart(3, '0');
