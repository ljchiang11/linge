// script.js - 网站核心逻辑 (修复版)

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
        if (!slides.length) return; // 防止报错

        // 边界处理
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        // 移除所有 active 状态
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // 给当前项添加 active 状态
        slides[currentIndex].classList.add('active');
        if(dots[currentIndex]) dots[currentIndex].classList.add('active');
    };

    // 自动播放计时器
    const startTimer = () => {
        slideInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 5000); 
    };

    const resetTimer = () => {
        clearInterval(slideInterval);
        startTimer();
    };

    // 挂载到 window 供 HTML onclick 调用
    window.goToSlide = (index) => {
        showSlide(index);
        resetTimer();
    };

    // 初始化
    if (slides.length > 0) {
        showSlide(0);
        startTimer();
    }


    // ==========================================
    // 2. 模态框逻辑 (Modal) - 防止因找不到元素报错
    // ==========================================
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
            // 处理 href="#" 的空链接情况
            if (targetId === '#') return; 

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' 
                });
            }
        });
    });

    // ==========================================
    // 4. [新增] 滚轮穿透逻辑 (解决首屏无法滚动问题)
    // ==========================================
    const carouselSection = document.getElementById('carousel');
    if (carouselSection) {
        carouselSection.addEventListener('wheel', (e) => {
            // 如果正在看第一张图且向上滚，或者看最后一张图且向下滚，
            // 这里我们简单处理：只要鼠标在轮播图上，就允许页面滚动
            // 除非你想做那种“必须滑完图片才能走”的效果，否则直接放行即可
            
            // 这里的逻辑是：不做任何阻止，让浏览器默认行为发生（即滚动页面）
            // 如果你的CSS里写了 overflow:hidden 导致不能滚，那是CSS的问题。
            // 但通常 h-screen + overflow-hidden 会吞掉事件。
            
            // 简单的修复：如果用户想往下滚去 About 区域
            if (e.deltaY > 0) { 
               // 向下滚，尝试滚动到 about
               // 这里其实不需要JS干预，只要CSS没写死就行。
               // 但如果CSS写了 overflow-hidden，JS可以强制跳转：
               /* 
               e.preventDefault(); 
               document.getElementById('about').scrollIntoView({behavior: 'smooth'});
               */
            }
        }, { passive: true }); // passive: true 保证滚动流畅
    }

}); // <--- 确保这个括号是文件的最后一行！
