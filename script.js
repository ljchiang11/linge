// 等待页面加载完成
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. 轮播图逻辑 ---
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.nav-dot');
    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;

    // 切换幻灯片函数
    function goToSlide(index) {
        // 移除当前激活状态
        if (slides[currentSlide]) slides[currentSlide].classList.remove('active');
        if (dots[currentSlide]) dots[currentSlide].classList.remove('active');

        // 更新索引（处理循环）
        currentSlide = index;
        if (currentSlide >= totalSlides) currentSlide = 0;
        if (currentSlide < 0) currentSlide = totalSlides - 1;

        // 添加新的激活状态
        if (slides[currentSlide]) slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    // 自动播放功能
    function startAutoPlay() {
        slideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000); // 5秒切换一次
    }

    // 初始化轮播图
    if (totalSlides > 0) {
        goToSlide(0);
        startAutoPlay();
    }

    // 将 goToSlide 暴露给全局，以便 HTML 中的 onclick="goToSlide(0)" 能调用
    window.goToSlide = goToSlide;


    // --- 2. 导航栏平滑滚动跳转 ---
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认跳转

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // 平滑滚动到目标位置
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- 3. 模态框（弹窗）逻辑（如果有的话） ---
    const joinBtn = document.querySelector('.join-btn');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.modal-close'); // 假设有关闭按钮

    if (joinBtn && modalOverlay) {
        joinBtn.addEventListener('click', () => {
            modalOverlay.classList.add('open');
        });

        // 点击遮罩层关闭
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('open');
            }
        });
    }
});
