if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.addEventListener('load', function () {
    window.scrollTo(0, 0);
    const GameNav = document.querySelector('.Navbar');
    GameNav.classList.add('visible');
})


let isScrolling = false;
let navState = { collapseUp: 0, collapseDown: 0 }
let NavCollapse_Off = -2;
let NavCollapse_On = 3;
let GameNav = document.querySelector('.GameNav');

window.addEventListener('wheel', (event) => {

    handleScroll(event.deltaY);


})

function handleScroll(deltaY) {
    if (deltaY > 0) {
        // console.log("collapseUp:"+navState.collapseUp);
        // console.log("collapseDown:"+navState.collapseDown);


        // 滾輪向下滾動一次時執行
        navState.collapseDown--;
        if (navState.collapseDown <= NavCollapse_Off) {
            // console.log(navState.collapseDown);
            // GameNav.style.display = `none`;
            // GameNav.style.opacity = 0;
            // GameNav.style.visibility = `hidden`;
            GameNav.classList.add('close');


            resetNavState();
        }

    } else {
        // console.log("collapseUp:"+navState.collapseUp);
        // console.log("collapseDown:"+navState.collapseDown);


        // 滾輪向上滾動一次持執行
        navState.collapseUp++;

        if (navState.collapseUp >= NavCollapse_On) {
            // console.log(navState.collapseUp);
            // GameNav.style.display = `flex`;
            // GameNav.style.opacity = 1;
            // GameNav.style.visibility = `visible`;
            GameNav.classList.remove('close');

            resetNavState();
        }
    }
}

function resetNavState() {
    // 重置計數器
    navState.collapseUp = 0;
    navState.collapseDown = 0;
}