var marqueeContent = document.querySelector('.marquee-content');

marqueeContent.addEventListener('mouseover', function() {
    marqueeContent.style.animationPlayState = 'paused';
});

marqueeContent.addEventListener('mouseout', function() {
    marqueeContent.style.animationPlayState = 'running';
});