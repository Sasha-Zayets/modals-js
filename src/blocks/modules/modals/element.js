export default class Elements {
    init (options) {
        this.options = Object.assign({}, options);
    }

    searchElement (selector) {
        const element = document.querySelector(selector);

        if (!!element) {
            return element;
        }	else {
            return null;
        }
    }
  
    сreateElement (nameTag) {
        return document.createElement(nameTag);
    }
  
    addTextElement (element, text) {
      element.innerHTML = text;
    }
  
    addClassElement (element, nameClass) {
      element.classList.add(nameClass)
    }
  
    appendElement (element, appendBlock) {
        appendBlock.append(element)
    }
  
    generateBottomBlock () {
      const bottomBlock = this.сreateElement('div');
      const btnClose = this.сreateElement('button');
      const btnConfirm = this.сreateElement('button');
      
      this.addTextElement(btnClose, this.options.cancelBtnText);
      this.addClassElement(btnClose, this.options.classCancelBtn);
      
      this.addTextElement(btnConfirm, this.options.confirmBtnText);
      this.addClassElement(btnConfirm, this.options.classConfirmBtn);
      
      this.appendElement(btnClose, bottomBlock);
      this.appendElement(btnConfirm, bottomBlock);
      this.addClassElement(bottomBlock, 'modals-bottom');
      
      return bottomBlock;
    }

    generateHeadBlock () {
        const headerBlock = this.сreateElement('div');
        this.addClassElement(headerBlock, 'modals-header');
        this.addTextElement(headerBlock, this.options.headerTitle);

        return headerBlock;
    }
}