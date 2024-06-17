let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop: true,
  });

// Feeback review 
// trgthuhg
var swiper = new Swiper(".review-slider",{
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        O: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    });

// Manh 
// Gioi thieu
// Cuộn mượt mà khi nhấn vào nút "Biết thêm"
document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Hiển thị thông báo khi nhấn vào các biểu tượng
document.querySelectorAll('.icons').forEach(function(icon) {
    icon.addEventListener('click', function() {
        alert(this.getAttribute('data-message'));
    });
});


//Tìm kiếm

document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('search-box');
    const suggestionsBox = document.getElementById('suggestions');

    const products = [
        { name: "SỮA RỬA MẶT", url: "SRM.html" },
        { name: "TONER", url: "Nuochoahong.html" },
        { name: "DƯỠNG ẨM", url: "Duongam.html" },
        { name: "SERUM", url: "Serum.html" },
        { name: "ỐP SON RHODE", url: "case.html" },
        { name: "SON DƯỠNG KHÔNG MÀU", url: "Sonduongkhongmau.html" },
        { name: "SON DƯỠNG", url: "Sonribbon.html" },
        { name: "SON DƯỠNG ribbon", url: "Sonribbon.html" },
        { name: "SON DƯỠNG vị bánh mì", url: "Sonvibanhmi.html" },
        { name: "SON DƯỠNG vị cà phê", url: "Sonvicaphe.html" },
        { name: "SON DƯỠNG vị mâm xôi", url: "Sonvimamxoi.html" },
        { name: "SON DƯỠNG vị thạch", url: "Sonvithach.html" },
        { name: "SON DƯỠNG sữa dâu", url: "Sonsanphamcuoi.html" }
    ];

    searchBox.addEventListener('input', () => {
        const query = searchBox.value.toLowerCase();
        suggestionsBox.innerHTML = '';

        if (query.length > 0) {
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(query)
            );

            filteredProducts.forEach(product => {
                const suggestionItem = document.createElement('div');
                suggestionItem.textContent = product.name;
                suggestionsBox.appendChild(suggestionItem);

                suggestionItem.addEventListener('click', () => {
                    searchBox.value = product.name;
                    suggestionsBox.innerHTML = '';
                    suggestionsBox.style.display = 'none';
                    window.location.href = product.url;
                });
            });

            suggestionsBox.style.display = 'block';
        } else {
            suggestionsBox.style.display = 'none';
        }
    });

    searchBox.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const query = searchBox.value.toLowerCase();
            const product = products.find(product => 
                product.name.toLowerCase() === query
            );

            if (product) {
                window.location.href = product.url;
            } else {
                alert("Không tìm thấy sản phẩm");
            }
        }
    });

    document.getElementById('close').addEventListener('click', () => {
        searchBox.value = '';
        suggestionsBox.innerHTML = '';
        suggestionsBox.style.display = 'none';
    });
});




// Manh
// Combo
document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const sections = document.querySelectorAll('.combo-subsection');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(button.dataset.target).classList.add('active');
        });
    });
});
// ends Combo Manh

// thêm vào giỏ hàng

// document.addEventListener("DOMContentLoaded", function() {
//     const cartButtons = document.querySelectorAll(".add-to-cart");

//     cartButtons.forEach(button => {
//         button.addEventListener("click", function(event) {
//             const name = this.getAttribute("data-name");
//             const price = this.getAttribute("data-price");
//             const image = this.getAttribute("data-image");
            
//             const product = {
//                 name: name,
//                 price: price,
//                 image: image,
//                 quantity: 1
//             };

//             let cart = JSON.parse(localStorage.getItem("cart")) || [];

//             // Kiểm tra nếu sản phẩm đã có trong giỏ hàng
//             const existingProductIndex = cart.findIndex(item => item.name === name);
//             if (existingProductIndex !== -1) {
//                 // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
//                 cart[existingProductIndex].quantity += 1;
//             } else {
//                 // Nếu sản phẩm chưa có trong giỏ hàng, thêm vào
//                 cart.push(product);
//             }

//             localStorage.setItem("cart", JSON.stringify(cart));

//             // Chuyển hướng đến trang giỏ hàng
//             window.location.href = "giohang.html";
//         });
//     });
// });


