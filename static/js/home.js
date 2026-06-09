document.addEventListener('DOMContentLoaded', function(){
	// Mobile nav toggle
	const mobileToggle = document.getElementById('mobileToggle');
	const navLinks = document.querySelector('.nav-links');
	mobileToggle && mobileToggle.addEventListener('click', ()=>{
		if(navLinks.style.display === 'flex'){
			navLinks.style.display = '';
		} else {
			navLinks.style.display = 'flex';
			navLinks.style.flexDirection = 'column';
			navLinks.style.gap = '12px';
			navLinks.style.position = 'absolute';
			navLinks.style.left = '20px';
			navLinks.style.right = '20px';
			navLinks.style.top = '64px';
			navLinks.style.background = 'white';
			navLinks.style.padding = '12px';
			navLinks.style.borderRadius = '8px';
			navLinks.style.boxShadow = '0 6px 20px rgba(16,24,40,0.08)';
		}
	});

	// Carousel
	const carousel = document.getElementById('carousel');
	if(carousel){
		const slidesWrap = carousel.querySelector('.slides');
		const slides = carousel.querySelectorAll('.slide');
		const prevBtn = carousel.querySelector('.carousel-prev');
		const nextBtn = carousel.querySelector('.carousel-next');
		const dotsWrap = carousel.querySelector('.carousel-dots');
		let index = 0;
		const total = slides.length;

		// build dots
		for(let i=0;i<total;i++){
			const d = document.createElement('button'); d.className='carousel-dot'; if(i===0) d.classList.add('active'); d.dataset.index=i; dotsWrap.appendChild(d);
		}
		const dots = dotsWrap.querySelectorAll('.carousel-dot');

		function goTo(i){
			index = (i+total)%total;
			slidesWrap.style.transform = `translateX(-${index*100}%)`;
			dots.forEach(d=>d.classList.toggle('active', +d.dataset.index === index));
		}

		prevBtn.addEventListener('click', ()=> goTo(index-1));
		nextBtn.addEventListener('click', ()=> goTo(index+1));
		dots.forEach(d=>d.addEventListener('click', ()=> goTo(+d.dataset.index)));

		let auto = setInterval(()=> goTo(index+1), 4500);
		carousel.addEventListener('mouseenter', ()=> clearInterval(auto));
		carousel.addEventListener('mouseleave', ()=> auto = setInterval(()=> goTo(index+1), 4500));
	}

	// Smooth scroll for internal links
	document.querySelectorAll('a[href^="#"]').forEach(a=>{
		a.addEventListener('click', function(e){
			const target = this.getAttribute('href');
			if(target.length>1){
				const el = document.querySelector(target);
				if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
			}
		})
	});

	// Stats counter (when visible)
	const counters = document.querySelectorAll('.stat-num');
	const animate = (el,target)=>{
		let start=0; const dur=1400; const step = Math.max(1, Math.floor(target/(dur/30)));
		const t = setInterval(()=>{
			start += step; if(start>=target){ el.textContent = target.toLocaleString(); clearInterval(t);} else el.textContent = start.toLocaleString();
		}, 30);
	};
	if('IntersectionObserver' in window){
		const obs = new IntersectionObserver((entries,io)=>{
			entries.forEach(ent=>{
				if(ent.isIntersecting){ const el = ent.target; animate(el, +el.dataset.target || 0); io.unobserve(el); }
			})
		},{threshold:0.3});
		counters.forEach(c=>obs.observe(c));
	} else { counters.forEach(c=>animate(c, +c.dataset.target || 0)); }

	// Footer year
	const yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent = new Date().getFullYear();
});

 

