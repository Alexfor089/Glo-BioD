const tabsCalc = () => {

   const headingPanelTabsAcс = document.querySelectorAll(`a[data-parent="#accordion"]`),
      collapseFirst = document.getElementById('collapseOne'),
      collapseSecond = document.getElementById('collapseTwo'),
      collapseThird = document.getElementById('collapseThree'),
      collapseFourth = document.getElementById('collapseFour'),
      constructBtn = document.querySelectorAll('.construct-btn');

   const foo = (first, second, third, fourth) => {
      if (first.style.display === 'block') {
         third.style.display = 'none';
         fourth.style.display = 'none';
         second.style.display = 'none';

      } else {
         first.style.display = 'block';
         third.style.display = 'none';
         fourth.style.display = 'none';
         second.style.display = 'none';

      }
   };

   headingPanelTabsAcс.forEach(elem => {
      elem.addEventListener('click', () => {
         //first
         if (elem.closest('#headingOne')) {
            foo(collapseFirst, collapseSecond, collapseThird, collapseFourth);
         }
         //second
         if (elem.closest('#headingTwo')) {
            foo(collapseSecond, collapseFirst, collapseThird, collapseFourth);
         }
         //third
         if (elem.closest('#headingThree')) {
            foo(collapseThird, collapseSecond, collapseFourth, collapseFirst);
         }
         //Fourth
         if (elem.closest('#headingFour')) {
            foo(collapseFourth, collapseThird, collapseSecond, collapseFirst);
         }

      });
   });
   // constructBtn.forEach(elem => {
   //    elem.addEventListener('click', () => {
   //       if (collapseFirst.style.display = 'block') {
   //          collapseSecond.style.display = 'block';
   //          collapseFirst.style.display = 'none';

   //       };
   //       if (collapseSecond.style.display === 'block') {
   //          collapseThird.style.display = 'block';
   //          collapseSecond.style.display = 'none';;
   //       };
   //       if (collapseThird.style.display === 'block') {
   //          collapseFourth.style.display = 'block';
   //          collapseThird.style.display = 'none';

   //       };
   //    })
   // });


};

export default tabsCalc;