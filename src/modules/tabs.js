const tabs = () => {
   const headingPanelTabs = document.querySelectorAll('.panel-heading'),
      collapseFirst = document.getElementById('collapseOne-two'),
      collapseSecond = document.getElementById('collapseTwo-two'),
      collapseThird = document.getElementById('collapseThree-two');

   headingPanelTabs.forEach(elem => {
      elem.addEventListener('click', () => {
         const foo = (first, second, third) => {
            if (first.style.display === 'block') {
               third.style.display = 'none';
               second.style.display = 'none';

            } else {
               first.style.display = 'block';
               third.style.display = 'none';
               second.style.display = 'none';
            }
         };
         //first
         if (elem.closest('#headingOne-two')) {
            foo(collapseFirst, collapseSecond, collapseThird);
         }
         //second
         if (elem.closest('#headingTwo-two')) {
            foo(collapseSecond, collapseFirst, collapseThird);
         }
         //third
         if (elem.closest('#headingThree-two')) {
            foo(collapseThird, collapseSecond, collapseFirst);
         }

      });

   });
};




export default tabs;