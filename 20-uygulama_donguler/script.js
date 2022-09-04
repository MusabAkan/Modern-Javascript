// let sayilar = [1,5,7,15,3,25,12,24];

// // 1- sayilar listesindeki her bir elemanın karesini yazdırınız.

// // for (let sayi of sayilar) {
// //     console.log(sayi * sayi);
// // }

// // 2- sayilar listesindeki hangi sayılar 5' in katıdır?
// // for(let i=0; i<sayilar.length; i++) {
// //     if(sayilar[i] % 5 == 0) {
// //         console.log(sayilar[i]);
// //     }
// // }

// // 3- sayilar listesindeki çift sayıların toplamını bulunuz.

// // let toplam = 0;
// // for(let i in sayilar) {
// //     if (sayilar[i]%2==0) {
// //         toplam += sayilar[i];
// //     }
// // }
// // console.log(toplam);

// let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23","samsung s20"];

// // 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

// // for(let urun of urunler) {
// //     console.log(urun.toUpperCase());
// // }

// // 5- urunler listesinde samsung geçen kaç ürün vardır?

// // let adet = 0;

// // for(let urun of urunler) {
// //     if(urun.includes("samsung")) {
// //         adet++;
// //     }
// // }

// // console.log(adet);

// let ogrenciler = [
//     {"ad":"yiğit", "soyad": "bilgi", "notlar": [60,70,60]},
//     {"ad":"ada", "soyad": "bilgi", "notlar": [80,70,80]},
//     {"ad":"çınar", "soyad": "turan", "notlar": [10,20,60]}
// ];

// // ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.

// for(let ogrenci of ogrenciler) {
//     let not_toplam = 0;
//     let ortalama = 0;
//     let adet = 0;
//     for(let not of ogrenci.notlar) {
//         not_toplam += not;
//         adet++;
//     }
//     ortalama = not_toplam / adet;

//     console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrencimnin not ortalaması : ${ortalama}.`);

//     if(ortalama>=50) {
//         console.log("başarılı.");
//     } else {
//         console.log("başarısız.");
//     }    
// }

// // tüm öğrencilerin not ortalaması kaçtır?


// const sayilar = [1, 5, 7, 15, 3, 25, 2, 6, 4, 21, 8];

// let cift = 0;

// for (let sayi of sayilar) {
//   console.log(`${sayi} sayının karesi : ${sayi * sayi}`);

//   if (sayi % 5 == 0) {
//     console.log(`${sayi} sayısı 5'nin katıdır.`);
//   }

//   if (sayi % 2 == 0) {
//     cift += sayi;
//   }
// }

console.log("Çift Sayılar toplamı : " + cift);

let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];

let sayac = 0;
for (let urun of urunler) {
  console.log(urun.toUpperCase());

  if (urun.indexOf("samsung") != -1) {
    sayac++;
  }
}

// console.log(sayac);

const ogrenciler = [
  { ad: "yiğit", soyad: "bilgi", notlar: [60, 70, 60] },
  { ad: "ada", soyad: "bilgi", notlar: [80, 70, 80] },
  { ad: "çınar", soyad: "turan", notlar: [70, 70, 60] },
  { ad: "ayşe", soyad: "çelik", notlar: [40, 10, 60] },
];

let topOrt = 0;
for (let ogrenci of ogrenciler) {
  let top = 0;
  for (let not of ogrenci.notlar) {
    top += not;
  }
  let ort = top / ogrenci.notlar.length;
  topOrt += ort;

  console.log(`${ogrenci.ad + " " + ogrenci.soyad} adlı öğrenci not ortalaması : ${ort.toFixed(2)} olup sınıfı ${ort > 50 ? "geçmiştir." : "kalmıştır."}`);
}

console.log("Tüm öğrencileri not ortalaması :  "+ (topOrt / ogrenciler.length).toFixed(2))