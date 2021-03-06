'use strict'

const navButton = document.querySelector('.header__button');
const navMenu = document.querySelector('.nav');
const viewSize = document.querySelector('.view__size');

class CreateContent
{
    constructor(data, template, entry) {
        this.data           = data;
        this.template_class = template;
        this.entry_node     = document.querySelector(entry);
    }

    _getTemplate() {
        let html = document.querySelector(this.template_class).innerHTML;
        return Handlebars.compile(html);
    }

    _insertHTML(html) {
        this.entry_node.insertAdjacentHTML('beforeend', html);
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

// Provides information about window size
function startSize() {
    let viewX,
        viewY,
        sizing,
        viewW;

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

function init() {
    //remove please wait message.
    const wait_node = document.querySelector('.wait');
    wait_node.parentNode.removeChild(wait_node);

    const menu    = new CreateContent(menuData,    '.menu_template',      '.nav__list');
    const big_prj = new CreateContent(bigProjects, '.big_entry_template', '.section');
    const sma_prj = new CreateContent(allProjects, '.entry_template',     '.section');

    menu   .createHTML();
    big_prj.createHTML();
    sma_prj.createHTML();

            startSize();
};
// init();

