// 等待整个页面加载完毕后再执行
document.addEventListener('DOMContentLoaded', () => {

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
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);

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

    // --- 3. 导航栏平滑滚动 (核心修复部分) ---
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // 阻止默认跳转
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            console.log("点击了链接:", targetId, "找到元素:", targetElement); // 调试用

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' 
                });
            } else {
                console.warn("未找到ID为 " + targetId + " 的元素");
            }
        });
    });

});
