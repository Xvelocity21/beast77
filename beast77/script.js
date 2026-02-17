// 1. Poll Interactivity
const pollOptions = document.querySelectorAll('.poll-option');
pollOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Remove selected class from all
        pollOptions.forEach(opt => opt.classList.remove('selected'));
        // Add to clicked
        option.classList.add('selected');
        // Trigger mini confetti
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#2563eb', '#ffffff']
        });
    });
});

// 2. Subscribe Button Celebration
const subBtn = document.querySelector('.subscribe-btn');
if(subBtn) {
    subBtn.addEventListener('click', (e) => {
        // Play Sound
        const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-09.mp3');
        audio.play().catch(e => console.log("Audio play failed (user interaction needed first)"));

        // Fire confetti
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#cc0000', '#ffffff']
        });
    });
}

// 3. Page Load Celebration
window.addEventListener('load', () => {
     setTimeout(() => {
         confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#2563eb', '#cc0000', '#ffffff']
        });
     }, 500);
});

// 4. Dark Mode Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
    });
}

// 5. Newsletter Sign Up Logic
const newsletterBtn = document.getElementById('newsletter-btn');
const newsletterInput = document.getElementById('newsletter-email');

if (newsletterBtn && newsletterInput) {
    newsletterBtn.addEventListener('click', () => {
        const email = newsletterInput.value.trim();
        if (email) {
            const subject = "Newsletter Sign Up";
            const body = `Please sign me up for the Beast Club!\n\nMy Email: ${email}`;
            window.location.href = `mailto:contact@mrbeastbusiness.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            alert("Opening your email app to send the request!");
        } else {
            alert("Please enter an email address first!");
        }
    });
}

// 6. Beast Clicker Logic
const clickerBtn = document.getElementById('clicker-btn');
const clickerCount = document.getElementById('clicker-count');
let money = 0;

if(clickerBtn && clickerCount) {
    clickerBtn.addEventListener('click', (e) => {
        money += 10000;
        clickerCount.innerText = money.toLocaleString();
        
        // Floating text effect
        const floatText = document.createElement('div');
        floatText.innerText = "+$10,000";
        floatText.style.position = 'absolute';
        floatText.style.color = '#4ade80';
        floatText.style.fontWeight = 'bold';
        floatText.style.left = e.pageX + 'px';
        floatText.style.top = e.pageY + 'px';
        floatText.style.pointerEvents = 'none';
        floatText.style.zIndex = '1000';
        floatText.style.transition = 'all 1s ease';
        document.body.appendChild(floatText);
        
        requestAnimationFrame(() => {
            floatText.style.top = (e.pageY - 50) + 'px';
            floatText.style.opacity = 0;
        });
        
        setTimeout(() => {
            floatText.remove();
        }, 1000);

        // Confetti every $100k
        if(money % 100000 === 0) {
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.7 },
                colors: ['#10b981', '#ffffff']
            });
        }
    });
}

// 7. Live Subscriber Counter Simulation
const subCounter = document.getElementById('live-sub-count');
if (subCounter) {
    let currentSubs = 300000000;

    // Update every 2 seconds
    setInterval(() => {
        // Add random amount between 1 and 50
        const increase = Math.floor(Math.random() * 50) + 1;
        currentSubs += increase;
        subCounter.innerText = currentSubs.toLocaleString();
    }, 2000);
}

// 7. Scroll To Top Button Logic
const scrollBtn = document.getElementById("scrollTopBtn");
if (scrollBtn) {
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}
