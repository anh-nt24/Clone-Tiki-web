
// HISTORY
// open search box
var input = document.getElementsByClassName("input-search");
var search_container = document.getElementsByClassName("search-history");

input[0].addEventListener("click", function() {
    var history = document.getElementsByClassName('search-history');
    history[0].classList.add('open');
})

// close search box
search_container[0].addEventListener("click", function() {
    var history = document.getElementsByClassName('search-history');
    history[0].classList.remove('open');
})

var main_search = document.getElementsByClassName("search-history__main");
main_search[0].addEventListener("click", function(event) {
    event.stopPropagation(); // prevent event from main-search
})



// LOG FORM
// Open log form
const usr_acc = document.querySelector('.upper-header__user-acc');
const log_form = document.querySelector('.user-acc__log-form');
const closeButton = document.querySelector('.log-form__close');
const containerSection = document.querySelector('.js-container');

function open_form() {
    // show the login form when clicking the icons
    log_form.classList.add('open');
}

function close_form() {
    // close the form when clicking X
    log_form.classList.remove('open');
}

// get action from the user
usr_acc.addEventListener('click',open_form);

closeButton.addEventListener('click', close_form);

log_form.addEventListener('click',close_form);

containerSection.addEventListener('click',function(event) {
    event.stopPropagation(); // prevent
})

// Check whether Logging in or not
const acc_name = document.querySelector("#user-acc-name").firstChild.textContent;
if (acc_name != "Account") {
    // dont open log form after logging in
    usr_acc.removeEventListener("click", open_form);
}
else {
    // dont show menu when not logging in
    const acc_menu = document.querySelectorAll(".user-acc__menu");
    acc_menu[0].style.display = "none";
}



// SLIDER
currentSlide = 1;
var prev = document.getElementsByClassName("prev");
var next = document.getElementsByClassName("next");

prev[0].addEventListener("click", function() {
    showSlide(-1);
});

next[0].addEventListener("click", function() {
    showSlide(0);
});
function showSlide(n=0) {
    if (n == 0) {
        document.getElementById('rd' + currentSlide).checked = true;
        currentSlide ++;
        if (currentSlide>4) {
            currentSlide = 1;
        }
    }
    else {
        currentSlide --;
        if (currentSlide<1) {
            currentSlide = 4;
        }
        document.getElementById('rd' + currentSlide).checked = true;
    }
}
var timer = setInterval(showSlide, 2000);

var slide = document.getElementsByClassName("slide");

// Stop the current timer when mouseover
for (i=0; i< slide.length; ++i) {
    slide[i].addEventListener("mouseover", function(){ 
        clearInterval(timer);
    });

    // Start a new timer when mouse out
    slide[i].addEventListener("mouseout", function(){ 
        timer = setInterval(showSlide, 2000);
    });
}



// PRODUCT
// Load more
$(function() {
    $(".grid__column-6").slice(0,12).show();
    $("#loadmore").on("click", function(e){
        e.preventDefault();
        $(".grid__column-6:hidden").slice(0,6).slideDown();
        if($(".grid__column-6:hidden").length == 0) {
            $("#loadmore").text("No More Products").addClass("noContent");
        }
    });
});

// Like and unlike
const likes = document.querySelectorAll('.home-product__item__favorite');

for (const like of likes) {
    like.addEventListener('click', function() {
        if (like.classList.contains("home-product__item__favorite--liked")) {
            like.classList.remove("home-product__item__favorite--liked");
        }
        else {
            like.classList.add("home-product__item__favorite--liked");
        }
    });
}

// Has discount or not
const discount = document.querySelectorAll('.home-product__item__price');
const selling_price = document.querySelectorAll('.home-product__item__selling-price');
var d = document.getElementsByClassName("home-product__item__price");
for (i=0;i<d.length;++i) {
    if (d[i].children.length < 2 || d[i].children[1].className != "home-product__item__price-discount")
        selling_price[i].style.color = "black";
}

// Check if the product has not been sold
// AND mark popular label
var text = document.getElementsByClassName("home-product__item__sold-number");
const rating_star = document.querySelectorAll('.home-product__item__rating-stars');
for (i=0;i<text.length;++i) {
    if ((+text[i].innerHTML) == 0) {
        rating_star[i].style.display = "none";
    }
    else if ((+text[i].innerHTML) >= 5000 || text[i].innerHTML.includes("K", -1) || text[i].innerHTML.includes("M", -1)) {
        var popular = document.getElementsByClassName("home-product__item__popular")[i];
        popular.classList.add("home-product__item--is-popular");
    }
}

// Tag selected
const tags = document.querySelectorAll(".header__suggestion-tag");
for (const tag of tags) {
    tag.addEventListener("click", function() {
        for (i=0;i<tags.length;++i) {
            tags[i].classList.remove("header__suggestions--tag-selected");
        }
        tag.classList.add("header__suggestions--tag-selected");
    })
}