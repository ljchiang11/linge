// script.js - 网站核心逻辑 (最终修复版)

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
        if (!slides.length) return; // 防止没有图片时报错

        // 边界处理：循环播放
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        // 1. 移除所有 active 状态
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // 2. 给当前项添加 active 状态
        slides[currentIndex].classList.add('active');
        if(dots[currentIndex]) {
            dots[currentIndex].classList.add('active');
        }
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
        resetTimer(); 
    };

    // 初始化轮播图
    if (slides.length > 0) {
        showSlide(0);
        startTimer();
    }


    // ==========================================
    // 2. 模态框逻辑 (Modal) - 增加存在性检查
    // ==========================================
    const joinBtn = document.querySelector('.join-btn');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeModalBtn = document.querySelector('.close-modal');

    // 只有当这些元素都存在时才添加监听器，防止报错
    if (joinBtn && modalOverlay) {
        joinBtn.addEventListener('click', () => {
            modalOverlay.classList.add('open');
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('open');
            }
        });

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
            
            // 修复：如果链接只是 "#" (例如空的社交链接)，则不执行滚动
            if (targetId === '#' || targetId === '') return; 

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' 
                });
            }
        });
    });

}); // <--- 确保这个括号是文件的最后一行！
