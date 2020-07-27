'use strict';

const accordionCalc = () => {
  const btn = document.querySelectorAll('.panel-heading'),
    btnAccordion = document.querySelectorAll(`a[data-parent="#accordion"]`),
    collapseOne = document.getElementById('collapseOne'),
    collapseTwo = document.getElementById('collapseTwo'),
    collapseThree = document.getElementById('collapseThree');
  let collapseFour = document.getElementById('collapseFour');

  collapseOne.style.maxHeight = collapseOne.scrollHeight + "px";



  btnAccordion.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      //One
      if (elem.closest('#headingOne')) {
        if (collapseOne.style.display === 'none') {
          collapseOne.style.display = 'block';
          collapseTwo.style.display = 'none';
          collapseThree.style.display = 'none';
          collapseFour.style.display = 'none';

        } else {
          collapseOne.style.display = 'block';
        }
      }
      //Two
      if (elem.closest('#headingTwo') || elem.matches('.btnOne')) {

        if (collapseTwo.style.display === 'block') {
          collapseTwo.style.display = 'block';

        } else {
          collapseOne.style.display = 'none';
          collapseTwo.style.display = 'block';
          collapseThree.style.display = 'none';
          collapseFour.style.display = 'none';
        }
      }
      //Three
      if (elem.closest('#headingThree') || elem.matches('.btnTwo')) {

        if (collapseThree.style.display === 'block') {
          collapseThree.style.display = 'block';

        } else {
          collapseOne.style.display = 'none';
          collapseTwo.style.display = 'none';
          collapseThree.style.display = 'block';
          collapseFour.style.display = 'none';
        }
      }
      //Four
      if (elem.closest('#headingFour') || elem.matches('.btnThree')) {

        if (collapseFour.style.display === 'block') {
          collapseFour.style.display = 'block';

        } else {
          collapseOne.style.display = 'none';
          collapseTwo.style.display = 'none';
          collapseThree.style.display = 'none';
          collapseFour.style.display = 'block';
        }
      }

    });

  });

};

export default accordionCalc;