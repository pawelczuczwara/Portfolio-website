'use strict'

const navButton = document.querySelector('.header__button');
const navMenu = document.querySelector('.nav');
const viewSize = document.querySelector('.view__size');
let viewX;
let viewY;
let sizing;
let viewW;

const bigProjects = [
    {
        p_des: 'Github resources',
        url: 'https://github.com/pawelczuczwara',
        url_txt: '',
        img_src: 'p_idea_650.jpg',
        img_alt: 'github resources',
        img_srcset: 'img/p_idea_325.jpg 325w, img/p_idea_650.jpg 650w, img/p_idea_1024.jpg 1024w',
        git: 'https://github.com/pawelczuczwara',
        git_txt: '//github.com/pawelczuczwara'
    } ];

const allProjects = [
    {
        p_des: 'Drone services website',
        url: 'https://pablos.eu/wp/',
        url_txt: '//pablos.eu/wp/',
        img_src: 'p_dron_450.jpg',
        img_alt: 'drone',
        git: '',
        git_txt: ''
    },
    {
        p_des: 'Mobile application design',
        url: 'https://www.behance.net/gallery/29794267/Safe-Gluten-Free-Travel/',
        url_txt: '//behance.net/',
        img_src: 'p_mobile_450.jpg',
        img_alt: 'mobile',
        git: '',
        git_txt: ''
    },
    {
        p_des: 'Memory Game',
        url: 'https://pawelc.eu/program/memory/',
        url_txt: '//pawelc.eu/memory/',
        img_src: 'p_memory_450.jpg',
        img_alt: 'memory game',
        git: 'https://github.com/pawelczuczwara/MemoryGame',
        git_txt: '//github.com/memory/'
    },
    {
        p_des: 'Commercial photography',
        url: 'https://www.shutterstock.com/g/Pawel+Czuczwara/',
        url_txt: '//shutterstock.com/',
        img_src: 'p_photo_450.jpg',
        img_alt: 'photography',
        git: '',
        git_txt: ''
    },
    {
        p_des: 'E-commerce shop',
        url: 'https://pablos.eu/st/',
        url_txt: '//pablos.eu/st/',
        img_src: 'p_shop_450.jpg',
        img_alt: 'e-commerce shop',
        git: '',
        git_txt: ''
    }
    // {
    //     p_des: '',
    //     url: '',
    //     url_txt: '',
    //     img_src: '',
    //     img_alt: '',
    //     git: '',
    //     git_txt: ''
    // },
];
class CreateContent
{
    constructor(data, template, entry) {
        this.data           = data;
        this.template_class = template;
        this.entry_node     = document.querySelector(entry);
    }

    _getTemplate() {
        let tepmlate_HTML = document.querySelector(this.template_class).innerHTML;
        return Handlebars.compile(tepmlate_HTML);
    }

    _insertHTML(compiled_html) {
        this.entry_node.insertAdjacentHTML('beforeend', compiled_html);
    }

    createHTML() {
        let compiled_html       = '';
        const compiled_template = this._getTemplate();

        for (let content of this.data) {
            compiled_html = compiled_html + compiled_template(content);
        }

        this._insertHTML(compiled_html);
    }

}

const big_prj = new CreateContent(bigProjects, '.big_entry_template', '.section');
const sma_prj = new CreateContent(allProjects, '.entry_template',     '.section');


// Provides information about window size
function startSize() {
    viewY = window.innerHeight;
    viewX = window.innerWidth;

    if (viewX > 400) {
        sizing = 'px';
        viewW = 'window size ';
    } else {
        sizing = '';
        viewW = '';
    }
    viewSize.innerHTML = viewW + viewX + sizing + ' : ' + viewY + sizing;
}

// Opens nav menu class and rotates button
navButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navButton.classList.toggle('button_rotate');
});
window.addEventListener('resize', () => startSize());

(function init() {
    big_prj.createHTML();
    sma_prj.createHTML();
    startSize();
})();

