class NavbarItems {
    constructor(mobileMenu, navbaritems, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navbaritems = document.querySelector(navbaritems);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
        this.navbaritems.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new NavbarItems(
    ".mobile-menu",
    "#navbar-items",
    "#navbar-items li",
);

mobileNavbar.init();