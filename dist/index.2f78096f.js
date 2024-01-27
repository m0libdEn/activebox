document.addEventListener("DOMContentLoaded", function() {
    var headerOptions = document.querySelectorAll(".header__option");
    var headerLine = document.querySelector(".header__wrapper");
    var hamburger = document.querySelector(".header__hamburger-icon");
    var logo = document.querySelectorAll(".box");
    function handleScroll() {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        if (scrollPosition > 650) {
            headerOptions.forEach(function(option) {
                option.classList.add("scrolled-color");
            });
            logo.forEach(function(option) {
                option.classList.add("scrolled-logo");
            });
            headerLine.classList.add("scrolled-line");
            hamburger.classList.add("scrolled-ham");
        } else {
            headerOptions.forEach(function(option) {
                option.classList.remove("scrolled-color");
            });
            logo.forEach(function(option) {
                option.classList.remove("scrolled-logo");
            });
            headerLine.classList.remove("scrolled-line");
            hamburger.classList.remove("scrolled-ham");
        }
    }
    window.addEventListener("scroll", handleScroll);
});

//# sourceMappingURL=index.2f78096f.js.map
