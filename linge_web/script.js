 <script>
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.nav-dot');
    
    function goToSlide(index) {
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');
      currentSlide = index;
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }
    
    setInterval(() => { goToSlide((currentSlide + 1) % slides.length); }, 5000);

    function openJoinModal() {
      document.getElementById('joinModal').classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    函数 closeJoinModal(事件) {
      如果 (!事件 || 事件.目标 === 文档.getElementById('joinModal')) {
        document.getElementById('joinModal').classList.remove('open');
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
