import Elements from './element';

// defaults option
const defaultOptions = Object.freeze({
    btnClass: 'btn-modal',
    modalClass: 'modals',
    animation: 'scale',
    bottomBlock: false,
    cancelBtnText: 'cancel',
    confirmBtnText: 'confirm',
    classCancelBtn: 'cancel',
    classConfirmBtn: 'confirm',
    headerModal: true,
    headerTitle: 'Title modals',
})

class Modal extends Elements {
    constructor (options) {
        super();
        this.options = {}

        let mergedOptions = Object.assign({}, defaultOptions);
        this.options = Object.assign(mergedOptions, options);
       
        this.btnClickSelector = this.options.btnClass;
        this.modalSelector = this.options.modalClass;
        this.nameAnimation = this.options.animation;

        this.init();

        this.modalContainer = this.modals.firstElementChild;
      
        this.optionsElemets = {
            cancelBtnText: this.options.cancelBtnText,
            confirmBtnText: this.options.confirmBtnText,
            classCancelBtn: this.options.classCancelBtn,
            classConfirmBtn: this.options.classConfirmBtn,
            headerTitle: this.options.headerTitle
        }

        if (this.options.bottomBlock) {
          this.addBottomBlock();
        }

        if (this.options.headerModal) {
            this.addHeaderModal();
        }
    }

    init () {
        this.modals = super.searchElement(`.${this.modalSelector}`);

        this.addEvent();
        this.addAnimation();
    }

    open () {
        const iconClose = document.querySelector('.modals-close');
        
        this.modals.classList.add('show');

        if (this.options.bottomBlock) {
            const closeBtn = document.querySelector('.modals .close');
          
            this.closeModal(this.modals, iconClose, closeBtn);
        } else {
          this.closeModal(this.modals, iconClose);  
        }
    }

    addEvent () {
        const btn = super.searchElement(`.${this.btnClickSelector}`);
        
        btn.addEventListener('click', (event) => {
            this.open();
        });
    }

    closeModal (...eventElement) {
        eventElement.forEach(element => {
            element.addEventListener('click', (event) => {
                if (event.target.contains(this.modalContainer) && !event.target.classList.contains('modals-container')) {
                    if (!this.modalContainer.contains(event.target)) {
                        this.fadeModal();
                    }
                } else if (event.target.classList.contains('modals-close') || event.target.classList.contains('close')) {
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

    addHeaderModal () {
        super.init(this.optionsElemets);

        const header = super.generateHeadBlock();
        this.modalContainer.prepend(header);
    }

    addBottomBlock () {
        super.init(this.optionsElemets);

        const bottom = super.generateBottomBlock();
        this.modalContainer.append(bottom);
    }
}

export default Modal;
