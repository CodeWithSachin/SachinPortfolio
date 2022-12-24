const p_btns = document.querySelector(".folio_btns");
const p_btn = document.querySelectorAll(".folio_btn");
const p_img = document.querySelectorAll(".img_overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;

  p_btn.forEach((current_element) =>
    current_element.classList.remove("folio_btn_active")
  );

  p_btn_clicked.classList.add("folio_btn_active");

  const btn_num = p_btn_clicked.dataset.btnNum;

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img.forEach((current_element) =>
    current_element.classList.add("p_img_hidden")
  );

  img_active.forEach((current_element) =>
    current_element.classList.remove("p_img_hidden")
  );
});

// swiper js

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Scroll to top

const headerElement = document.querySelector(".hero_section");

const footerElement = document.querySelector(".footer_section");

const scrollElement = document.createElement("div");

scrollElement.classList.add("scrollTop");

scrollElement.innerHTML = `<i class="fas fa-arrow-alt-up scrollTop_icon"></i>`;

footerElement.after(scrollElement);



// responsive navbar component

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerEle = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerEle.classList.toggle("active");
});

// sticky navbar using intersectionObserver

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    !ent.isIntersecting ? document.body.classList.add("sticky"):document.body.classList.remove("sticky")
  },
  { root: null, threshold: 0 }
);

observer.observe(headerElement);

const workSection = document.querySelector('.section_work_data')
const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries
    if(!entry.isIntersecting) return;
    const scrollTop = () => {
      headerElement.scrollIntoView({ behavior: "smooth" });
    };
    
    scrollElement.addEventListener("click", scrollTop);
    
    const counterNum = document.querySelectorAll(".counter_number");
    
    const speed = 200;
    
    counterNum.forEach((currEle) => {
      const updateNum = () => {
        const targetNum = parseInt(currEle.dataset.number);
        console.log(targetNum);
        const initialNum = parseInt(currEle.innerText);
        console.log(initialNum);
        const incrementNum = Math.trunc(targetNum / speed);
    
        if (initialNum < targetNum) {
          currEle.innerText = `${initialNum + incrementNum}+`;
    
          setTimeout(updateNum, 5);
        }
      };
      updateNum();
    });
    observer.unobserve(workSection)
  },
  { root: null, threshold: 0 } 
);
workObserver.observe(workSection);
