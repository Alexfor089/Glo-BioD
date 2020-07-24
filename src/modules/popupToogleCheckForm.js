const popupToogleCheckForm = () => {
   let popupCheck = document.querySelector('.popup-check'),
      checkBtn = document.querySelectorAll('.check-btn')
   checkBtn.forEach((item) => {
      item.addEventListener("click", () => {
         popupCheck.style.cssText = `
        opacity: 0;
        transition: all .4s;
        display: block;
        `;
         document.body.style.cssText = `overflow: hidden;`
         setTimeout(() => {
            popupCheck.style.opacity = "1";
         }, 50);

      });
   });


   popupCheck.addEventListener("click", (event) => {
      event.preventDefault();
      let target = event.target;
      document.body.style.cssText = `overflow: scroll;`
      if (target.classList.contains("popup-close")) {
         popupCheck.style.cssText = `display: none;`;
         setTimeout(() => {
            popupCheck.style.opacity = "1";
         }, 50);

      } else {
         target = target.closest(".popup-content");
         if (!target) {
            popupCheck.style.display = "none";
         }
      }
   });

};


export default popupToogleCheckForm;