const popupToogleCallForm = () => {
  let popupCall = document.querySelector('.popup-call'),
    callBtns = document.querySelectorAll('.call-btn')
  callBtns.forEach((item) => {
    item.addEventListener("click", () => {
      popupCall.style.cssText = `
       opacity: 0;
       transition: all .4s;
       display: block;
       `;
      setTimeout(() => {
        popupCall.style.opacity = "1";
      }, 50);

    });
  });


  popupCall.addEventListener("click", (event) => {
    event.preventDefault();
    let target = event.target;
    if (target.classList.contains("popup-close")) {
      popupCall.style.cssText = `display: none;`;
      setTimeout(() => {
        popupCall.style.opacity = "1";
      }, 50);

    } else {
      target = target.closest(".popup-content");
      if (!target) {
        popupCall.style.display = "none";
      }
    }
  });

};


export default popupToogleCallForm;