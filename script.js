// script.js - 专门存放动作指令

document.addEventListener('DOMContentLoaded', () => {
    console.log("脚本已加载，开始运行..."); // 这是一个检查点

    // --- 1. 轮播图逻辑 ---
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.nav-dot');
    let currentSlide = 0;
    const totalSlides = slides.length;

    function goToSlide(index) {
        if (slides[currentSlide]) slides[currentSlide].classList.remove('active');
        if (dots[currentSlide]) dots[currentSlide].classList.remove('active');

        currentSlide = index;
        if (currentSlide >= totalSlides) currentSlide = 0;
        if (currentSlide < 0) currentSlide = totalSlides - 1;

        if (slides[currentSlide]) slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    // 自动播放
    if(totalSlides > 0) {
        setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    }

    // --- 2. 模态框逻辑 ---
    const joinBtn = document.querySelector('.join-btn');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeModalBtn = document.querySelector('.close-modal');

    if (joinBtn && modalOverlay) {
        joinBtn.addEventListener('click', () => {
            modalOverlay.classList.add('open');
        });
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('open');
            }
        });
        if(closeModalBtn){
            closeModalBtn.addEventListener('click', () => {
                modalOverlay.classList.remove('open');
            });
        }
    }

    // --- 3. 导航栏平滑滚动 ---
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' 
                });
            } else {
                console.warn("找不到ID为 " + targetId + " 的区域，请检查HTML中的id是否匹配");
            }
        });
    });
});
