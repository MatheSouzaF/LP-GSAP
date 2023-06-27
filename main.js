const nameLoad = document.querySelector('.name')
const bloc = document.querySelector('.overlay')
const title = document.querySelector('.title-ms')
const linkT = document.querySelectorAll('.link-t')
const accountA = document.querySelectorAll('.account-a')
const lineT = document.querySelector('.line')
const textT = document.querySelector('.text')
const titleT = document.querySelector('.title')
const scrollD = document.querySelectorAll('.scroll-d')
const socialM = document.querySelectorAll('.social-m')
const softSkil = document.querySelector('.soft-skill')
const svgColor = document.querySelectorAll('.svg-color')
const socialIndex = document.querySelector('.social-media')
const sectionSoft2 = document.querySelector('.softB')




window.addEventListener('load', revealAnim);

function revealAnim() {
    const TLFADE = gsap.timeline();

    TLFADE
        .to(nameLoad, {
            duration: 2,
            opacity: 0,
            y: -60,
            ease: Expo.easeInOut,
        })
        .to(bloc, {
            duration: 2,
            top: "-100%",
            ease: Expo.easeInOut,
        }, '-=0.8')
        .to(bloc, {
            opacity: 0,
        })
        .from(title, {
            autoAlpha: 0,
            duration: .5,
            y: 100,
        })
        .from(linkT, {
            autoAlpha: 0,
            duration: .5,
            y: 100,
            stagger: 0.2,
        })
        .from(accountA, {
            autoAlpha: 0,
            duration: .5,
            y: 100,
            stagger: 0.2,
        }, '-=0.5')
        .to(lineT, {
            width: '4.5rem',
            duration: 1,
        })
        .from(textT, {
            autoAlpha: 0,
            x: -50,
            delay: 0.3,
        }, '-=0.8')
        .from(titleT, {
            autoAlpha: 0,
            x: 300,
            duration: 1.5,
        }, '-=0.8')
        .from(scrollD, {
            autoAlpha: 0,
            duration: .5,
            y: 100,
            stagger: 0.2,
        }, '-=0.9')
        .from(socialM, {
            autoAlpha: 0,
            duration: .5,
            x: -100,
            stagger: 0.2,

            // color: "black"
        }, '-=0.9')
        .to(socialIndex, {
            css: {
                zIndex: 10
            },
        })


    // gsap.to(socialM, {
    //     scrollTrigger: {
    //         trigger: softSkil,
    //         start: 'top+=3% center',
    //         end: "bottom-=20% ",
    //         scrub: true, // Animação suave conforme rola
    //         // markers: true, // Mostra marcadores para depuração
    //     },
    //     color: "#fff",

    // }),]
    function createScrollTrigger(elements, triggerSelector) {
        elements.forEach(function (elem) {
            const attributeValue = elem.getAttribute('data-color') || elem.getAttribute('data-fill');
            const property = elem.getAttribute('data-color') ? 'color' : 'fill';
            const color = attributeValue || '#000000';

            ScrollTrigger.create({
                trigger: triggerSelector,
                start: 'top 50%',
                end: 'bottom 50%',
                onEnter: () => gsap.to(elem, { [property]: color }),
                onLeave: () => gsap.to(elem, { [property]: '#000000' }),
                onLeaveBack: () => gsap.to(elem, { [property]: '#000000' }),
                onEnterBack: () => gsap.to(elem, { [property]: color }),
                // markers: true
            });
        });
    }

    const followElements = gsap.utils.toArray(".follow[data-color]");
    const svgColorElements = gsap.utils.toArray(".svg-color[data-fill]");

    createScrollTrigger(followElements, ".soft-skill-1.softA");
    createScrollTrigger(svgColorElements, ".soft-skill-1.softA");
    createScrollTrigger(followElements, ".soft-skill-1.softC");
    createScrollTrigger(svgColorElements, ".soft-skill-1.softC");

    gsap.utils.toArray(".softB[data-color]").forEach(function (elem) {
        var color = elem.getAttribute('data-color');

        ScrollTrigger.create({
            trigger: elem,
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter: () => gsap.to(sectionSoft2, { backgroundColor: color }),
            onLeave: () => gsap.to(sectionSoft2, { backgroundColor: '#0a1d26' }),
            onLeaveBack: () => gsap.to(sectionSoft2, { backgroundColor: '#0a1d26' }),
            onEnterBack: () => gsap.to(sectionSoft2, { backgroundColor: color }),
            // markers: true
        });
    });


    gsap.utils.toArray(".softC[data-color]").forEach(function (elem) {
        var color = elem.getAttribute('data-color');

        ScrollTrigger.create({
            trigger: elem,
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter: () => gsap.to('.softC', { backgroundColor: color }),
            onLeave: () => gsap.to('.softC', { backgroundColor: '#0a1d26' }),
            onLeaveBack: () => gsap.to('.softC', { backgroundColor: '#0a1d26' }),
            onEnterBack: () => gsap.to('.softC', { backgroundColor: color }),
            // markers: true
        });
    });


}


document.querySelector('.scroll-d').addEventListener('click', function(e) {
    // Impede o comportamento padrão do link (navegar para a âncora diretamente)
    e.preventDefault();

    // Obtém o elemento de destino com base no atributo href do link
    const targetElement = document.querySelector(this.getAttribute('href'));

    // Verifica se o elemento de destino existe
    if (targetElement) {
      // Obtém a posição do elemento de destino em relação ao topo da página
      const targetPosition = targetElement.getBoundingClientRect().top;

      // Realiza o scroll suave para o elemento de destino
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });