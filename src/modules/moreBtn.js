const moreBtn = () => {
   const
      addBtnMore = document.querySelector('.add-sentence-btn'),
      forNumberCart = document.querySelector('.visible-sm-block'),
      oneCart = document.querySelector('.hidden'),
      twoCart = document.querySelector('.hidden-xs');

   addBtnMore.addEventListener('click', event => {
      event.preventDefault();

      addBtnMore.style.display = 'none';

      forNumberCart.style.cssText = `display: block!important`;
      oneCart.style.cssText = `display: block!important`;
      twoCart.style.cssText = `display: block!important`;



   });


};
export default moreBtn;