const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

//Required Validation tekniği kullanılmaktadır.

function error(input, messange) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling; // nextElementSibling kavramı aynı elementi hizasında olup  sonraki elementi getir
  div.innerText = messange;
  div.className = "invalid-feedback";
}

function success(input) {
  input.className = "form-control is-valid";
}

const checkEmail = (input) => {
  //email adresi doğruluğu teyit etmek için
  if (
    String(input.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    success(input);
  } else {
    error(input, "incorrect email address");
  }
};

function checkRequired(inputs) {
  inputs.forEach(function (input) {
    if (input.value === "") {
      error(input, `${input.id} is required.`);
    } else {
      success(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    error(input, `the ${input.id} must have a minimum of ${min} charactersr`);
  }
 if (input.value.length > max) {
    error(input, `the ${input.id} must have a maximum of ${max} charactersr`); 
 }
}

function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        error(input2,'The password does not match')
    }
}

function checkPhone(input){
    var exp  = /^\d{10}$/;//telefon numaraların teyitini almak için 
    if (!exp.test(input.value)) {
        error(input, 'The phone must have 10 characters')
    }

}

form.addEventListener("submit", function (e) {
  e.preventDefault(); //yenileme özelliğin kapatabilmek için yapılır.

  checkRequired([username, email, phone, password, repassword]); //burada dizi içerisine atılmıştır aksi takdide hata alınacaktr.
  checkEmail(email);
  checkLength(username, 7, 15);
  checkLength(password, 4, 8);
  checkLength(repassword, 4, 8);
  checkPasswords(password,repassword)
  checkPhone(phone)

  //Aşağıdaki kodların kapatılması sebebi daha düzenli bir şekilde yazılması içindir kapatılmıştır.
  /*
//   if (username.value === "") {
//     // username.className = "form-control error"//css tarafında error diye bir class mevcut
//     error(username, "username gerekli");
//   } else {
//     success(username);
//   }

//   //email regex javascript'de  emailin doğru girilip girilmediği kontrolü sağlamak için
//   if (email.value === "") {
//     error(email, "email gerekli");
//   } else if (!validateEmail(email.value)) {
//     error(email, "düzgün mail adresi giriniz. ");
//   } else {
//     success(email);
//   }

//   if (password.value === "") {
//     error(password, "password gerekli");
//   } else {
//     success(password);
//   }

//   if (repassword.value === "") {
//     error(repassword, "repassword gerekli");
//   } else {
//     success(repassword);
//   }

*/
})