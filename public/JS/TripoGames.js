const banner_BG = document.getElementById('banner_BG');
const banner_BG2 = document.querySelector('#banner_BG img');

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            console.log('Css樣式改變了:', banner_BG.getAttribute('style'));
        }
    });
});
//監聽目標元素的屬性改變
observer.observe(banner_BG, {
    attributes: true, //監聽屬性變化
    attributeFilter: ['style'] //僅監聽 style 屬性
});



function banner_BG_RWD() {
    banner_BG.style.width = window.innerWidth + (Math.abs(banner_BG.offsetLeft * 2)) + 'px';
    banner_BG.style.height = 'auto';
    console.log(window.innerWidth);
}
banner_BG_RWD();
window.addEventListener('resize', function () {
    banner_BG_RWD();

});

// let scrolled = window.scrollY; //獲取垂直滾動的距離
// let backgroundPositionX = -102 + (scrolled * 0.3); //調整此倍數控制滾動速度

// document.querySelector('.banner__col').style.backgroundPosition = `-${backgroundPositionX}px center`

window.addEventListener('scroll', () => {

    const scrolled = window.scrollY; //獲取垂直滾動的距離
    const screenHeight = window.innerHeight; //獲取視窗高度

    const backgroundPositionX = scrolled * 0.15; //調整此倍數控制滾動速度
    document.querySelector('#banner_BG').style.transform = `translate3d(-${backgroundPositionX}px,0px,0px)`;

    const OurGames__BG = document.querySelector('.OurGames__BG');
    const OurGames__BGTOP = document.querySelector('.OurGames__BG').getBoundingClientRect().top; // 獲取元素相對於視窗頂部的位置
    const JoinTeam__BG1 = document.querySelector('.JoinTeam__topBG img');
    const JoinTeam__BG1TOP = document.querySelector('.JoinTeam__topBG').getBoundingClientRect().top;



    //計算透明度，當元素進入視窗時逐漸變得不透明
    if (OurGames__BGTOP < screenHeight) {
        let opacity = 1 - (OurGames__BGTOP / screenHeight) - 0.2; //根據滾動距離調整透明度
        OurGames__BG.style.opacity = opacity;
    } else {
        OurGames__BG.style.opacity = 0; //在世窗外時保持透明
    }

    //
    if (JoinTeam__BG1TOP < screenHeight) {
        let translateY = 200 + (JoinTeam__BG1TOP / screenHeight * - 400);
        JoinTeam__BG1.style.transform = `translate3d(0px, ${translateY}px, 0px)`;
    } else {
        JoinTeam__BG1.style.transform = `translate3d(0px, 98px, 0px)`;
    }


})


let OurGames__BG = document.querySelector('.OurGames__BG');
let OurGames__BGTOP = document.querySelector('.OurGames__BG').getBoundingClientRect().top; // 獲取元素相對於視窗頂部的位置
let screenHeight = window.innerHeight; //獲取視窗高度
let opacity = 1 - (OurGames__BGTOP / screenHeight) - 0.2; //根據滾動距離調整透明度
OurGames__BG.style.opacity = opacity;







