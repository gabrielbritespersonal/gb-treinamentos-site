// Efeito suave ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

// FAQ toggle
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const p = item.querySelector('p');
        p.style.display = p.style.display === "block" ? "none" : "block";
    });
});

// BEFORE & AFTER SLIDER SCRIPT
document.querySelectorAll('.before-after').forEach(container => {
    const afterImg = container.querySelector('.img-after');
    const handle = container.querySelector('.slider-handle');

    const move = (x) => {
        const rect = container.getBoundingClientRect();
        let pos = Math.min(Math.max(x - rect.left, 0), rect.width);
        let percent = (pos / rect.width) * 100;
        afterImg.style.clipPath = `inset(0 0 0 ${percent}%)`;
        handle.style.left = `${percent}%`;
    };

    container.addEventListener('mousemove', (e) => move(e.clientX));
    container.addEventListener('touchmove', (e) => move(e.touches[0].clientX));
});


// ANIMAÇÃO DE REVELAR AO ROLAR
function reveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', reveal);
reveal(); // executa logo ao carregar

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            // Mantém a animação se quiser que repita sempre:
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
    const header = document.querySelector(".topo");
    if (window.scrollY > 60) {
        header.style.padding = "12px 50px";
        header.style.background = "#000000ee";
    } else {
        header.style.padding = "22px 60px";
        header.style.background = "#000000d5";
    }
});

// MENU QUE SOME AO ROLAR PARA BAIXO E APARECE AO ROLAR PARA CIMA
let ultimoScroll = 0;
const topo = document.querySelector('.topo');

window.addEventListener('scroll', () => {
    const scrollAtual = window.scrollY;

    // se desceu e passou 120px → esconde
    if (scrollAtual > ultimoScroll && scrollAtual > 120) {
        topo.classList.add('escondido');
    } 
    // se subiu → mostra
    else {
        topo.classList.remove('escondido');
    }

    ultimoScroll = scrollAtual;
});

// Carrossel arrastável com mouse
document.querySelectorAll('.depo-carousel').forEach(carousel => {
    let isDown = false;
    let startX, scrollLeft;

    carousel.addEventListener('mousedown', e => {
        isDown = true;
        carousel.classList.add('grabbing');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => isDown = false);
    carousel.addEventListener('mouseup', () => isDown = false);

    carousel.addEventListener('mousemove', e => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });
});

// Slider Depoimentos com botões
const depoCarousel = document.querySelector('.depo-carousel');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

btnPrev.addEventListener('click', () => {
    depoCarousel.scrollBy({ left: -330, behavior: 'smooth' });
});

btnNext.addEventListener('click', () => {
    depoCarousel.scrollBy({ left: 330, behavior: 'smooth' });
});

const btnTransformacoes = document.getElementById("btn-transformacoes");
const secTransformacoes = document.getElementById("transformacoes");

btnTransformacoes.addEventListener("click", () => {
    secTransformacoes.classList.add("ativo");

    // Rolagem suave até a seção
    secTransformacoes.scrollIntoView({ behavior: "smooth" });

    // Troca o texto do botão (opcional)
    btnTransformacoes.textContent = "Resultados liberados ✅";
    btnTransformacoes.disabled = true;
    btnTransformacoes.style.opacity = "0.6";

});

const menuBtn = document.getElementById("menu-btn");
const menuMobile = document.getElementById("menu-mobile");

menuBtn.addEventListener("click", () => {
    menuMobile.classList.toggle("ativo");
});

const menuBtn = document.getElementById("menu-btn").onclick = function() {
const menuMobile = document.getElementById("menu-mobile").classList.toggle("ativo");
}

