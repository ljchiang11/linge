 <script>
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.nav-dot');
    
    function goToSlide(索引) {
      幻灯片[当前幻灯片].classList.移除('active');
      圆点[当前幻灯片].classList.移除('active');
      currentSlide = index;
      幻灯片[当前幻灯片].classList.添加('active');
      圆点[当前幻灯片].classList.添加('active');
    }
    
    setInterval(() => { goToSlide((当前幻灯片 + 1) % slides.length); }, 5000);

    函数 openJoinModal() {
      document.getElementById('joinModal').classList.添加('打开');
      文档.主体.样式.溢出 = '隐藏';
    }

    函数 closeJoinModal(事件) {
      如果 (!事件 || 事件.目标 === 文档.getElementById('joinModal')) {
        document.getElementById('joinModal').classList.remove('打开');
        文档.主体.样式.溢出 = '';
      }
    }

    function showToast(message) {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.style.opacity = '1';
      toast.style.transform = 'translate(-50%, 0)';
      setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translate(-50%, 20px)'; }, 3000);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      锚点.addEventListener('点击', 函数(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        如果 (目标) 目标.scrollIntoView({ 行为: '平滑', 块: '开始' });
      });
    });
  </脚本>
