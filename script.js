// --- Sequence Control ---

// Start: Big Intro
document.getElementById('startJourneyBtn').onclick = function() {
    document.getElementById('introSection').style.display = 'none';
    document.body.style.background = "linear-gradient(120deg, #fff7fa 0%, #ffe4ec 60%, #fff8fc 100%)";
    setTimeout(() => {
        document.getElementById('cakeSection').style.display = 'flex';
    }, 600);
};

// Cake Cutting
document.getElementById('cutCakeBtn').onclick = function() {
    document.getElementById('cutCakeBtn').style.display = 'none';
    document.getElementById('cakeMessage').innerHTML =
        "Wishing you the sweetest year ahead! 🍰<br>Make a wish, Rabina!";
    setTimeout(() => {
        document.getElementById('cakeSection').style.display = 'none';
        showSlideshowSection();
    }, 2500);
};

// --- Slideshow Data ---
const slideshowPhotos = [
    {src: "assets/photo1.jpg", caption: "lokking awesome and incredible!"},
    {src: "assets/photo2.jpg", caption: "Smiles that light up every day."},
    {src: "assets/photo3.jpg", caption: "Unforgettable moments that you maked in your life."},
    {src: "assets/photo4.jpg", caption: "make every moment of your life special."},
    // Add more {src, caption} as you like!
];
let slideIdx = 0;

// Slideshow Logic
function showSlideshowSection() {
    document.body.style.background = "linear-gradient(120deg,#e3f6ff 0%, #fce4ec 100%)";
    document.getElementById('slideshowSection').style.display = 'flex';
    showSlide(slideIdx);
}

function showSlide(idx) {
    const img = document.getElementById('slideshowImg');
    const cap = document.getElementById('slideshowCaption');
    img.src = slideshowPhotos[idx].src;
    cap.textContent = slideshowPhotos[idx].caption;
    if (idx >= slideshowPhotos.length - 1) {
        document.getElementById('slideshowNextBtn').textContent = "Continue";
    } else {
        document.getElementById('slideshowNextBtn').textContent = "Next Photo";
    }
}

document.getElementById('slideshowNextBtn').onclick = function() {
    slideIdx++;
    if (slideIdx < slideshowPhotos.length) {
        showSlide(slideIdx);
    } else {
        document.getElementById('slideshowSection').style.display = 'none';
        showPopBalloonsStep();
    }
};

// --- Balloon Pop Step ---
function showPopBalloonsStep() {
    document.body.style.background = "linear-gradient(120deg, #fffdf2 0%, #fee4ec 40%, #b2f7ff 100%)";
    document.getElementById('popBalloonsStep').style.display = 'flex';
    document.getElementById('supportiveMessage').style.display = 'none';
    document.getElementById('heartfeltMessage').style.display = 'none';
    document.getElementById('finalMessage').style.display = 'none';
    const area = document.getElementById('popBalloonsArea');
    area.innerHTML = '';
    const balloonCount = 12;
    let popped = 0;
    const popSound = document.getElementById('popSound');
    for (let i = 0; i < balloonCount; i++) {
        let b = document.createElement('div');
        b.className = 'pop-balloon';
        b.style.left = (10 + Math.random() * 80) + 'vw';
        b.style.top = (10 + Math.random() * 45) + 'vh';
        b.style.background = i%3===0
          ? 'radial-gradient(circle at 60% 40%, #e91e63 60%, #2196f3 100%)'
          : (i%3===1
            ? 'radial-gradient(circle at 40% 70%, #9ad6fc 60%, #fcb6e0 100%)'
            : 'radial-gradient(circle at 60% 20%, #f7fa7b 60%, #e91e63 100%)');
        b.onclick = function() {
            if (!b.classList.contains('popped')) {
                b.classList.add('popped');
                popSound.currentTime = 0;
                popSound.play();
                popped++;
                if (popped === balloonCount) {
                    setTimeout(showSupportiveMessage, 700);
                }
            }
        };
        area.appendChild(b);
    }
}

// --- Supportive Message ---
function showSupportiveMessage() {
    document.body.style.background = "linear-gradient(120deg,#e3f6ff 0%, #fce4ec 100%)";
    document.getElementById('popBalloonsStep').style.display = 'none';
    document.getElementById('supportiveMessage').style.display = 'flex';
    document.getElementById('supportiveText').textContent = supportiveMessage100Lines();
}

// --- Heartfelt Message ---
function showHeartfeltMessage() {
    document.body.style.background = "linear-gradient(120deg,#fcb6e0 0%, #9ad6fc 100%)";
    document.getElementById('supportiveMessage').style.display = 'none';
    document.getElementById('heartfeltMessage').style.display = 'flex';
    document.getElementById('heartfeltText').textContent = heartfeltMessage();
}

function supportiveMessage100Lines() {
return `
Family is the heart where love begins and never ends.
No matter what happens, I will stand by you and your family.
The care you show for your loved ones inspires me every day.
I promise to be there, through every joy and every challenge.
Because together we are stronger, and I care for you deeply.

I admire the way you support your parents and siblings.
Your kindness lifts everyone around you.
Even on hard days, you find a way to bring smiles and hope.
You are never alone—your family is your shelter, and I am yours too.
Every moment shared with you and your family is a blessing.

I care about you, about your happiness, your health, your dreams.
I care about the small things, the big things, and everything in between.
You deserve a life filled with love, laughter, and peace.
No matter the distance, my care for you and those you love never fades.
Your family's happiness is always important to me.

I promise to always listen, to encourage, to understand.
Your worries are my worries. When your heart aches, I feel it too.
When you celebrate, I am celebrating with you.
I will always support your family, as much as I support you.
You are all precious to me.

I am grateful for your family's trust and warmth in you.
The stories, the laughter, the shared meals—each one is a treasure.
I admire your family's strength, their resilience, and their spirit.
You have taught me the true meaning of home.
I care about every member of your family, just as I care for you.

When you need someone, I am here. When your family needs help, I will help.
No challenge is too great when we face it together.
I believe in your dreams, and I believe in your family's dreams.
Your care for your family makes you shine even brighter.
You are a guardian angel to those you love.

I will always respect your family's choices, traditions, and values.
You are never a burden—your family is never a burden.
I cherish your family's strengths, and I will support their growth.
Your love for your family inspires me to love more deeply.
You are all beautiful souls.

In times of joy, I will celebrate with you.
In times of sorrow, I will comfort you.
No matter what life brings, my support remains.
You are never alone. Your family is never alone.
I care about your well-being, your family's well-being, always.

Thank you for trusting me. Thank you for letting me be part of your world.
I promise to be kind, to be patient, to be loyal.
Your family's happiness is my happiness.
Your family's safety is my concern.
Your family's dreams are my encouragement.

Let us build beautiful memories together.
Let us share stories, laughter, and love.
I promise to be your strength when you are tired,
to bring hope when you feel lost,
to offer comfort when you need a friend.

Your family is my family, in my heart.
I will always defend you, protect you, and lift you up.
You are a treasure, and your family is a treasure.
I care about your future, and your family's future.
I see greatness in you and those you love.

You have a heart of gold, and your family shines with you.
I will always be honest, always be gentle, always be thoughtful.
You are surrounded by love, and I am proud to be part of it.
Thank you for caring about me. Thank you for letting me care for you.

May your family always have peace, health, and joy.
May every day bring new blessings.
May your family grow in love and strength.
I believe in you, and I believe in your family.

I am always here—your supporter, your friend, your partner.
I care about you, and I care about your family.
No matter what, we are together.
No matter what, my care never ends.

Thank you for sharing your kindness.
Thank you for trusting me with your dreams.
I am honored to walk this journey with you and your family.
You are loved beyond measure, and so is your family.
May you be blessed in every way.

You inspire me to be better, to care more, to love more.
I promise to always look out for you and those you love.
You are never alone—my care is with you always.
Your family is always in my thoughts and prayers.
I care about your happiness, your peace, your dreams.

You are strong, you are brave, you are loving.
Your family is a reflection of your beautiful soul.
I will always support you, always encourage you, always stand by you.
You are my sunshine, and your family is my light.

Thank you for being you. Thank you for being caring, generous, and true.
Your family is lucky to have you, and I am lucky to have you.
I promise to always care, always listen, always understand.
May your family know joy, safety, and endless love.

Every day, I am grateful for you and your family.
Together, we can overcome anything.
My care for you is forever, and my support for your family is forever.
You are loved, you are cherished, you are never alone.

With all my heart, I care for you and your family.
Now and always.
`.repeat(2);
}

function heartfeltMessage() {
return `Rabina, you are the heart and soul of every happy moment in my life. Your kindness, strength, and unwavering support for your family inspire everyone around you, especially me. I care deeply for you and the people you love. Your happiness means the world to me, and I promise to always stand by your side, to encourage your dreams, and to bring comfort when you need it. You are never alone—my love and care are with you always, and together we will build a lifetime of beautiful memories. Happy birthday, my sunshine! 💙`;
}

// --- Final Message & Fireworks ---
function showFinalMessage() {
    document.body.style.background = "linear-gradient(120deg,#e3f6ff 0%, #fce4ec 100%)";
    document.getElementById('heartfeltMessage').style.display = 'none';
    document.getElementById('finalMessage').style.display = 'flex';
    startFireworks();
}

// Fireworks animation
function startFireworks() {
    let canvas = document.getElementById('fireworks');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ctx = canvas.getContext('2d');
    let fireworks = [];
    function launchFirework() {
        let colors = ['#e91e63','#2196f3','#fff','#fce4ec','#f7fa7b','#3a1c71','#d76d77','#ffaf7b'];
        let x = Math.random()*canvas.width*0.8 + canvas.width*0.1;
        let y = Math.random()*canvas.height*0.4 + canvas.height*0.2;
        let particles = [];
        for(let i=0;i<40;i++){
            let angle = (Math.PI*2*i)/40;
            let speed = 2 + Math.random()*3.2;
            particles.push({
                x: x,
                y: y,
                dx: Math.cos(angle)*speed,
                dy: Math.sin(angle)*speed,
                color: colors[Math.floor(Math.random()*colors.length)],
                alpha: 1
            });
        }
        fireworks.push(particles);
    }
    setInterval(launchFirework, 1200);
    function animate() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for(let f=0;f<fireworks.length;f++){
            let particles = fireworks[f];
            for(let p=0;p<particles.length;p++){
                let part = particles[p];
                ctx.save();
                ctx.globalAlpha = part.alpha;
                ctx.beginPath();
                ctx.arc(part.x,part.y,6,0,2*Math.PI);
                ctx.fillStyle = part.color;
                ctx.shadowColor = part.color;
                ctx.shadowBlur = 14;
                ctx.fill();
                ctx.restore();
                part.x += part.dx;
                part.y += part.dy;
                part.alpha -= 0.013;
            }
        }
        fireworks = fireworks.filter(particles => particles[0].alpha > 0);
        requestAnimationFrame(animate);
    }
    animate();
}