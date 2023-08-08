//Haz tú validación en javascript acá

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_4vlmztq";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      //   alert('Sent!');

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Tu mensaje a sido enviado exitosamente !!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});

var Foo = () => {};
var foo = new Foo(); // TypeError: Foo no es un constructor
console.log(foo);
