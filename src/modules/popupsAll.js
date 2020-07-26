const popupsAll = () => {
   const popup = document.querySelector('.popup');
   const popupContent = document.querySelector('.popup-content');
   const popupBtn = document.querySelectorAll('.discount-btn');
   const popupBtn2 = document.querySelectorAll('.call-btn');
   const popupBtn3 = document.querySelectorAll('.check-btn');
   const popupBtn4 = document.querySelectorAll('.consultation-btn');

   popup.addEventListener('click', event => {
      event.preventDefault();
      let target = event.target;
      document.body.style.cssText = `overflow: scroll;`;
      if (target.classList.contains('popup-close')) {
         popup.style.display = 'none';
      } else {
         target = target.closest('.popup-content');
         if (!target) {
            popup.style.display = 'none';
         }
      }
   });
   const opens = elems => {
      elems.forEach(elem => {
         elem.addEventListener('click', () => {
            popup.style.display = 'block';

         });
      });
   };
   opens(popupBtn);
   opens(popupBtn2);
   opens(popupBtn3);
   opens(popupBtn4);
};
export default popupsAll;