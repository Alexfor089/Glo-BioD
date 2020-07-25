const popupToogleCallForm = () => {
  let popupCall = document.querySelector(".popup-call"),
    callBtns = document.querySelectorAll(".call-btn");
  callBtns.forEach((item) => {
    item.addEventListener("click", () => {
      popupCall.style.cssText = `
      
       opacity: 0;
       transition: all .4s;
       display: block;
       `;
      document.body.style.cssText = `overflow: hidden;`;
      setTimeout(() => {
        popupCall.style.opacity = "1";
      }, 50);
    });
  });

  popupCall.addEventListener("click", (e) => {


    e.preventDefault();
    document.body.style.cssText = `overflow: scroll;`;
    let target = e.target;
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