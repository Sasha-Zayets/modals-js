export default class Elements {
    searchElement (selector) {
        const element = document.querySelector(selector);

        if (!!element) {
            return element;
        }	else {
            return null;
        }
    }
}