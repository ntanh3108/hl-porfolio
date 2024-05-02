let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset+height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let darkBtn = document.getElementById('dark');

darkBtn.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        darkBtn.className = "fa-regular fa-sun";
    }
    else{
        darkBtn.className = "fa-solid fa-moon";
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtns = document.querySelectorAll(".read-more-btn");
  
    readMoreBtns.forEach(function(btn) {
      btn.addEventListener("click", function() {
        const content = this.previousElementSibling;
        const box = this.parentElement;
  
        if (content.classList.contains("show")) {
          content.classList.remove("show");
          this.textContent = "Read More";
          box.style.height = "350px"; // Reset lại chiều cao khi ẩn nội dung
        } else {
          content.classList.add("show");
          this.textContent = "Read Less";
          box.style.height = 400 + content.offsetHeight + "px"; // Thiết lập chiều cao bằng chiều cao thực của nội dung
        }
      });
    });
  });