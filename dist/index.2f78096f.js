document.addEventListener("DOMContentLoaded", function() {
    var headerOptions = document.querySelectorAll(".header__option");
    var headerLine = document.querySelector(".header__wrapper");
    function handleScroll() {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        if (scrollPosition > 650) {
            headerOptions.forEach(function(option) {
                option.classList.add("scrolled-color");
            });
            headerLine.classList.add("scrolled-line");
        } else {
            headerOptions.forEach(function(option) {
                option.classList.remove("scrolled-color");
            });
            headerLine.classList.remove("scrolled-line");
        }
    }
    window.addEventListener("scroll", handleScroll);
});

//# sourceMappingURL=index.2f78096f.js.map
