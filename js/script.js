const header = document.querySelector('header');
const menuBarIncon = document.querySelector('.menu_bar');


menuBarIncon.addEventListener('click', () =>{
	header.classList.toggle('active');
})

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'top'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})

sr.reveal('.about-text',{delay:350, origin:'left'})
sr.reveal('.about-img',{delay:350, origin:'top'})