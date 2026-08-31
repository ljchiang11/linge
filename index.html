// 轮播图逻辑
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.nav-dot');
const totalSlides = slides.length;

// 切换幻灯片函数
function goToSlide(index) {
    // 移除当前激活状态
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    // 更新索引
    currentSlide = index;

    // 处理循环逻辑
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;

    // 添加新的激活状态
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// 自动播放 (可选，每5秒切换一次)
setInterval(() => {
    goToSlide(currentSlide + 1);
}, 5000);

// 模态框逻辑 (如果有"加入我们"弹窗)
const joinBtn = document.querySelector('.join-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('.close-modal'); // 假设你有关闭按钮

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
    
    // 点击关闭按钮关闭 (如果有的话)
    if(closeModalBtn){
        closeModalBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('open');
        });
    }
}

// 导航栏平滑滚动
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
