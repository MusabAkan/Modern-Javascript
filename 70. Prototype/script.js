//OOP : Nesne Tabanlı Progralama
//object

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
  console.log(this);
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
  /*sürekli çalıştırmamak adına yapılmıtır.
   */
};

let soru1 = new Soru(
  "Hangisi javascript paket yönetim  uygulamasıdır ?",
  { a: "Node.js", b: "Typescript", c: "Npm" },
  "c"
);
let soru2 = new Soru(
  "Hangisi .net paket yönetim  uygulamasıdır ?",
  { a: "Node.js", b: "nuget", c: "Npm" },
  "b"
);

// yada dizi halinde atabilirsin

let sorular = [
  new Soru(
    "Hangisi javascript paket yönetim  uygulamasıdır ?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "Hangisi javascript paket yönetim  uygulamasıdır ?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "Hangisi javascript paket yönetim  uygulamasıdır ?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "Hangisi javascript paket yönetim  uygulamasıdır ?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
];

 
