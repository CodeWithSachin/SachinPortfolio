const p_btns = document.querySelector('.folio_btns');
const p_btn = document.querySelectorAll('.folio_btn');
const p_img = document.querySelectorAll('.img_overlay');

p_btns.addEventListener('click', (e) => {
    const p_btn_clicked = e.target;

    p_btn.forEach((current_element) => current_element.classList.remove("folio_btn_active"));

    p_btn_clicked.classList.add('folio_btn_active');


    const btn_num = p_btn_clicked.dataset.btnNum;

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)

    p_img.forEach((current_element) => current_element.classList.add('p_img_hidden'))

    img_active.forEach((current_element) => current_element.classList.remove('p_img_hidden'))
})



// swiper js 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
        delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });