const popupTooglePriceForm = () => {
   let popupDiscount = document.querySelector('.popup-discount'),
      discontBtn = document.querySelectorAll('.discount-btn', )
   discontBtn.forEach((item) => {
      item.addEventListener("click", () => {
         popupDiscount.style.cssText = `
        opacity: 0;
        transition: all .4s;
        display: block;
        `;
         setTimeout(() => {
            popupDiscount.style.opacity = "1";
         }, 50);

      });
   });


   popupDiscount.addEventListener("click", (event) => {
      event.preventDefault();
      let target = event.target;
      if (target.classList.contains("popup-close")) {
         popupDiscount.style.cssText = `display: none;`;
         setTimeout(() => {
            popupDiscount.style.opacity = "1";
         }, 50);

      } else {
         target = target.closest(".popup-content");
         if (!target) {
            popupDiscount.style.display = "none";
         }
      }
   });

};


export default popupTooglePriceForm;