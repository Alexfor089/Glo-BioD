const popupToogleConsulForm = () => {
   let popupConsult = document.querySelector('.popup-consultation'),
      consultBtn = document.querySelectorAll('.director-btn')
   consultBtn.forEach((item) => {
      item.addEventListener("click", () => {
         event.preventDefault();
         popupConsult.style.cssText = `
        opacity: 0;
        transition: all .4s;
        display: block;
        `;
         document.body.style.cssText = `overflow: hidden;`
         setTimeout(() => {
            popupConsult.style.opacity = "1";
         }, 50);

      });
   });


   popupConsult.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.style.cssText = `overflow: scroll;`
      let target = event.target;
      if (target.classList.contains("popup-close")) {
         popupConsult.style.cssText = `display: none;`;
         setTimeout(() => {
            popupConsult.style.opacity = "1";
         }, 50);

      } else {
         target = target.closest(".popup-content");
         if (!target) {
            popupConsult.style.display = "none";
         }
      }
   });

};


export default popupToogleConsulForm;