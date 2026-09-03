// script.js - 专门存放动作指令
// --- 1. 轮播图逻辑 ---
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.nav-dot');
    let currentIndex = 0;
    let slideInterval;

    // 核心切换逻辑
    const showSlide = (index) => {
        // 边界处理
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        // 清除所有 active
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        // 激活当前项
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    };

    // 👇 关键：把函数挂到 window 上，HTML 的 onclick 才能找到它
    window.goToSlide = (index) => {
        showSlide(index);
        resetTimer(); // 手动点击后重置自动播放，防止刚点完马上又跳
    };

    // 自动播放
    const startTimer = () => {
        slideInterval = setInterval(() => showSlide(currentIndex + 1), 5000);
    };

    const resetTimer = () => {
        clearInterval(slideInterval);
        startTimer();
    };

    // 初始化
    showSlide(0);
    startTimer();
});

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
