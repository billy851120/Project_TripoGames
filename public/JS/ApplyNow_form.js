// function ApplyNowDropdown() {
//     document.getElementById('select-container').classList.toggle('show');
// }

var ApplyNow = document.querySelector('.ApplyNow');
var ApplyNow_selected = document.querySelector('.ApplyNow_selected');
var ApplyNow_selected_items = document.querySelector('.ApplyNow_selected_items');
var ApplyNow_selected_options = ApplyNow_selected_items.getElementsByTagName('div');
var ApplyNow_arrow = document.querySelector('.select-arrow');
var ApplyNow_btn = document.querySelector('.QA_TesterTXT_btn a');
var ApplyNow_close = document.querySelector('.ApplyNow_top .ApplyNow_xmark');

ApplyNow_selected.addEventListener('click', function () {
    this.classList.toggle('active');
    ApplyNow_arrow.classList.toggle('active');
    // ApplyNow_selected_items.classList.toggle('show');
});


for (var i = 0; i < ApplyNow_selected_options.length; i++) {
    ApplyNow_selected_options[i].addEventListener('click', function () {
        for (var j = 0; j < ApplyNow_selected_options.length; j++) {
            ApplyNow_selected_options[j].classList.remove('selected_option');
        }
        this.classList.add('selected_option');
        ApplyNow_selected.textContent = this.textContent;
        ApplyNow_selected.style.color = '#272443'
        ApplyNow_selected.classList.remove('active');
        ApplyNow_arrow.classList.remove('active');


    });
}
if (ApplyNow_btn) {
    ApplyNow_btn.addEventListener('click', function () {

        ApplyNow.classList.toggle('active');
    });
}




// ApplyNow_close.addEventListener('click', function () {
//     ApplyNow.classList.remove('active');
//     console.log('jijsaiodsa');

// });


window.addEventListener('click', function (event) {
    if (!event.target.matches('.ApplyNow_selected')) {
        ApplyNow_selected.classList.remove('active');
        ApplyNow_arrow.classList.remove('active');
    }
    if (!ApplyNow_btn.contains(event.target) && !ApplyNow.contains(event.target)) {
        ApplyNow.classList.remove('active');
    }

    if (ApplyNow_close.contains(event.target)) {
        ApplyNow.classList.remove('active');
    }

});


