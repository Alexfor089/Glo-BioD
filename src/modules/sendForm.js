const sendForm = () => {
   const errorMessage = "Что-то пошло не так...",
      loadMessage = "Подождите,пожалуйста,идет отправка...",
      successMessage = "Спасибо! Мы скоро с вами свяжемся!";
   const mainForm = document.querySelector(".main-form"),
      captureForm = document.querySelector(".capture-form"),
      fdirectorFormorm3 = document.querySelector(".director-form");

   const statusMessage = document.createElement("div");
   statusMessage.style.cssText = `font-size: 2rem;`;

   //Валидация данных
   const valideDataPhone = (form) => {
      if (form.querySelector(".phone-user")) {
         form.querySelector(".phone-user").addEventListener("input", (e) => {
            if (e.target.value.length < 11 || e.target.value.length > 13) {
               form.querySelector("button").setAttribute("disabled", "disabled");
            } else {
               form.querySelector("button").removeAttribute("disabled");
            }
            e.target.value = e.target.value.replace(/[^[^+\d]*(\+|\d)|\D/g, "$1");
         });
      }

      if (form.querySelector(".name-user")) {
         form.querySelector(".name-user").addEventListener("input", (e) => {
            if (e.target.value.length < 2 || e.target.value.length > 12) {
               form.querySelector("button").setAttribute("disabled", "disabled");
            } else {
               form.querySelector("button").removeAttribute("disabled");
            }
            e.target.value = e.target.value.replace(/[^а-яА-Я ]/g, "");
         });
      }

   };
   valideDataPhone(mainForm);
   valideDataPhone(captureForm);
   console.log(captureForm);
   console.log(mainForm);
   // valideDataPhone(form3);

   //Слушатели при отправке
   mainForm.addEventListener("submit", (e) => {

      e.preventDefault();

      mainForm.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;
      const formData = new FormData(mainForm);
      let body = {};
      formData.forEach((value, key) => (body[key] = value));
      postData(body)
         .then((response) => {
            if (response.status !== 200) {
               throw new Error("status network not 200");
            }
            statusMessage.textContent = successMessage;
         })
         .catch((error) => {
            console.error(error);
            statusMessage.textContent = errorMessage;
         });
      setTimeout(() => {
         statusMessage.textContent = "";
      }, 3000);


      mainForm.querySelectorAll("input").forEach((item) => (item.value = ""));
   });

   captureForm.addEventListener("submit", (e) => {
      e.preventDefault();
      captureForm.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;
      const formData = new FormData(captureForm);
      let body = {};
      formData.forEach((value, key) => (body[key] = value));
      postData(body)
         .then((response) => {
            if (response.status !== 200) {
               throw new Error("status network not 200");
            }
         })
         .catch((error) => {
            console.error(error);
            statusMessage.textContent = errorMessage;
         });
      setTimeout(() => {
         statusMessage.textContent = "";
      }, 3000);

      captureForm.querySelectorAll("input").forEach((item) => (item.value = ""));
   });

   // form3.addEventListener("submit", (e) => {
   //    e.preventDefault();
   //    form3.appendChild(statusMessage);
   //    statusMessage.style.color = "#fff";
   //    statusMessage.textContent = loadMessage;

   //    const formData = new FormData(form3);
   //    let body = {};
   //    formData.forEach((value, key) => (body[key] = value));
   //    postData(body)
   //       .then((response) => {
   //          if (response.status !== 200) {
   //             throw new Error("status network not 200");
   //          }
   //          statusMessage.textContent = successMessage;

   //       })
   //       .catch((error) => {
   //          console.error(error);
   //          statusMessage.textContent = errorMessage;
   //       });
   //    setTimeout(() => {
   //       statusMessage.textContent = "";
   //    }, 3000);

   //    form3.querySelectorAll("input").forEach((item) => (item.value = ""));
   // });

   //Отправка данных на сервер

   const postData = (body) => {
      return fetch("./server.php", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(body),
         credentials: "include",
      });
   };
};
export default sendForm;