import Elements from './element';

// defaults option
const defaultOptions = Object.freeze({
    btnClass: 'btn-modal',
    modalClass: 'modals',
    animation: 'fade'
})

class Modal extends Elements {
    constructor (options) {
        super();
        this.options = {};

        let mergedOptions = Object.assign({}, defaultOptions);
        this.options = Object.assign(mergedOptions, options);

        this.btnClickSelector = this.options.btnClass;
        this.modalSelector = this.options.modalClass;
        this.nameAnimation = this.options.animation;

        this.init();
    }

    init () {
        this.modals = super.searchElement(`.${this.modalSelector}`);

        this.addEvent();
        this.addAnimation();
    }

    open () {
        const iconClose = document.querySelector('.modals-close');

        this.modals.classList.add('show');
        this.closeModal(this.modals, iconClose);
    }

    addEvent () {
        const btn = super.searchElement(`.${this.btnClickSelector}`);
        const self = this;
        
        btn.addEventListener('click', function (event) {
            self.open();
        });
    }

    closeModal (...eventElement) {
        const modalContainer = this.modals.firstElementChild;

        eventElement.forEach(element => {
            element.addEventListener('click', (event) => {
                if (event.target.contains(modalContainer) && !event.target.classList.contains('modals-container')) {
                    if (!modalContainer.contains(event.target)) {
                        this.fadeModal();
                    }
                } else if (event.target.classList.contains('modals-close')) {
                    this.fadeModal();
                }
            });
        });
        
    }

    fadeModal  () {
        this.modals.classList.remove('show');
    }

    addAnimation () {
        this.modals.classList.add(this.nameAnimation);
    }
}

export default Modal;
