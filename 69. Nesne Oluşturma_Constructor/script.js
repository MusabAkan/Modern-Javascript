//OOP : Nesne Tabanlı Progralama
//object

// let sayilar = [1, 2, 4];
// let soru1 = {
//   soruMetni: "Hangisi javascript paket yönetim  uygulamasıdır ?",
//   cevapSecenekleri: {
//     a: "Node.js",
//     b: "Typescript",
//     c: "Npm",
//   },
//   dogruCevap: "c",
//   cevabiKontrolEt: function (cevap) {
//     return cevap === this.dogruCevap;
//   },
// };

// let soru2 = {
//   soruMetni: "Hangisi .net paket yönetim  uygulamasıdır ?",
//   cevapSecenekleri: {
//     a: "Node.js",
//     b: "nuget",
//     c: "Npm",
//   },
//   dogruCevap: "b",
//   cevabiKontrolEt: function (cevap) {
//     return cevap === this.dogruCevap;
//   },
// };

// console.log(soru2.soruMetni);
// console.log(soru2.cevabiKontrolEt("b"));

//sınıf, Constructro => nesne * 30
//ES5(söz dizimi), Es6, es7
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap,
  this.cevabiKontrolEt = function (cevap) {
        return cevap === this.dogruCevap;
      }
}

let soru1 = new Soru("Hangisi javascript paket yönetim  uygulamasıdır ?", { a: "Node.js",  b: "Typescript",  c: "Npm"}, "c");
let soru2 = new Soru("Hangisi .net paket yönetim  uygulamasıdır ?", { a: "Node.js",  b: "nuget",  c: "Npm"}, "b");

// yada dizi halinde atabilirsin

let sorular=[
  new Soru("Hangisi javascript paket yönetim  uygulamasıdır ?", { a: "Node.js",  b: "Typescript",  c: "Npm"}, "c"),
  new Soru("Hangisi javascript paket yönetim  uygulamasıdır ?", { a: "Node.js",  b: "Typescript",  c: "Npm"}, "c"),
  new Soru("Hangisi javascript paket yönetim  uygulamasıdır ?", { a: "Node.js",  b: "Typescript",  c: "Npm"}, "c"),
  new Soru("Hangisi javascript paket yönetim  uygulamasıdır ?", { a: "Node.js",  b: "Typescript",  c: "Npm"}, "c")
]

console.log(soru1.soruMetni)
console.log(soru1.dogruCevap)
console.log(soru1.cevabiKontrolEt("c"))
