import slider from './modules/slider'
import modal from './modules/modal';
import forms from './modules/forms'

window.addEventListener('DOMContentLoaded', () => {
    slider();
    modal('[data-modal]', '#consult', '.overlay', '.modal__close');
    forms('[data-post]');
    console.log('x');
})