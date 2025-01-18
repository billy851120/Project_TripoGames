const scrolled = window.scrollY;
document.querySelector('.About_paragraph img').style.transform = `translate3d(${-100 + scrolled}px,0px,0px)`;

window.addEventListener('scroll', () => {

    const scrolled = window.scrollY;
    const screenHeight = window.innerHeight;

    const backgroundPositionX = scrolled * 0.08;
    document.querySelector('.About_paragraph img').style.transform = `translate3d(${-100 + backgroundPositionX}px,0px,0px)`;
});

// const About_paragraphIMG = document.querySelector('About_paragraphIMG');
// const About_paragraphIMG2 = document.querySelector('About_paragraphIMG img');

// const observer = new MutationObserver(mutations => {
//     mutations.forEach(mutation => {
//         if (mutation.type === `attributes` && mutation.attributeName === `style`) {
//             console.log('CSS樣式改變了:', About_paragraphIMG.getAttribute('style'));
//         }
//     });
// });

// observer.observe(About_paragraphIMG, {
//     attributes: true,
//     attributeFilter: ['style']
// });

// function About_paragraphIMG_RWD (){
//     About_paragraphIMG.style.width =

// }