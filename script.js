// script.js - 网站核心逻辑
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. 轮播图逻辑 (Carousel)
    // ==========================================
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.nav-dot');
    let currentIndex = 0;
    let slideInterval;

    // 核心切换函数
    const showSlide = (index) => {
        // 边界处理：如果是最后一张再点下一张，回到第一张
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        // 1. 移除所有 active 状态
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // 2. 给当前项添加 active 状态
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    };

    // 自动播放计时器
    const startTimer = () => {
        slideInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 5000); // 5秒切换一次
    };

    const resetTimer = () => {
        clearInterval(slideInterval);
        startTimer();
    };

    // 👇 关键修复：将函数挂载到 window 对象，让 HTML 的 onclick 能找到它
    window.goToSlide = (index) => {
        showSlide(index);
        resetTimer(); // 用户手动点击后，重置计时器
    };

    // 初始化轮播图
    if (slides.length > 0) {
        showSlide(0);
        startTimer();
    }


    // ==========================================
    // 2. 模态框逻辑 (Modal)
    // ==========================================
    const joinBtn = document.querySelector('.join-btn');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeModalBtn = document.querySelector('.close-modal');

    if (joinBtn && modalOverlay) {
        // 点击加入按钮 -> 打开弹窗
        joinBtn.addEventListener('click', () => {
            modalOverlay.classList.add('open');
        });

        // 点击背景遮罩 -> 关闭弹窗
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('open');
            }
        });

        // 点击关闭按钮(X) -> 关闭弹窗
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                modalOverlay.classList.remove('open');
            });
        }
    }


    // ==========================================
    // 3. 导航栏平滑滚动 (Smooth Scroll)
    // ==========================================
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
            }
        });
    });

}); // <--- 注意：这是 DOMContentLoaded 的最终闭合括号
