// 1. 轮播图与导航点逻辑
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.nav-dot');
let currentSlide = 0;
const totalSlides = slides.length;

// 切换幻灯片的核心函数
function goToSlide(index) {
    // 边界处理（循环播放）
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;

    // 移除旧的激活状态
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    // 更新索引并添加新的激活状态
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// 自动轮播：每 5 秒自动切换一次
setInterval(() => {
    goToSlide(currentSlide + 1);
}, 5000);

// 2. 顶部导航栏平滑滚动跳转逻辑
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止默认的锚点跳转
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // 如果找到了目标区域，则平滑滚动过去
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
