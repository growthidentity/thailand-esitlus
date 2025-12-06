let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('totalSlides').textContent = totalSlides;

// 5-minute countdown timer
let timeLeft = 300; // 5 minutes in seconds
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer-display').textContent = '0:00';
            document.getElementById('timer-display').style.color = '#ff4444';
            return;
        }

        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timer-display').textContent =
            `${minutes}:${seconds.toString().padStart(2, '0')}`;

        // Change color when less than 1 minute
        if (timeLeft < 60) {
            document.getElementById('timer-display').style.color = '#ffaa00';
        }
    }, 1000);
}

// Start timer when presentation loads
window.addEventListener('load', startTimer);

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    document.getElementById('currentSlide').textContent = currentSlide + 1;

    // Update presenter photos from localStorage
    updateAllPresenterPhotos();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Go to specific slide (for setup page)
function goToSlide(n) {
    showSlide(n);
}

// Update all presenter photos from localStorage
function updateAllPresenterPhotos() {
    const savedPhoto = localStorage.getItem('presenterPhoto');
    if (savedPhoto) {
        document.querySelectorAll('.presenter-photo').forEach(img => {
            img.src = savedPhoto;
        });
    }
}

// Update photos on load
window.addEventListener('load', updateAllPresenterPhotos);

document.addEventListener('keydown', (e) => {
    // Don't change slides if typing in an input field
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        return;
    }

    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
    }
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        nextSlide();
    }
    if (touchEndX > touchStartX + 50) {
        prevSlide();
    }
}
