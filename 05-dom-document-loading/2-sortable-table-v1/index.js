export default class SortableTable {

    constructor (sortHead, sortBody) {
        this.sortHead = sortHead;
        this.sortBody = sortBody.data;

        this.render();
    }

    render() {
        const element = document.createElement('div');

        element.innerHTML = this.template;

        this.element = element.firstElementChild;
    }

    get template() {
        return `
            <div class="sortable-table">
                <div data-element="header" class="sortable-table__header sortable-table__row">
                    ${this.elementSortTableHeader}
                </div>
                <div data-element="body" class="sortable-table__body">
                    ${this.elementSortTableBody(this.sortBody)}
                </div>
            </div>
        `;
    }

    get elementSortTableHeader() {
        return this.sortHead
            .map(item => {
                return `
                    <div 
                        class="sortable-table__cell" 
                        data-id="${item.id}" 
                        data-sortable="${item.sortable}" 
                        data-order="asc">
                            <span>${item.title}</span>
                    </div>`
            })
            .join('');
    }

    elementSortTableBody(arr) {
        return arr
            .map(item => {
                return `
                    <a href="/products/${item.id}" class="sortable-table__row">
                        <div class="sortable-table__cell">
                          <img class="sortable-table-image" alt="Image" src="${item.images[0].url}">
                        </div>
                        <div class="sortable-table__cell">${item.title}</div>

                        <div class="sortable-table__cell">${item.quantity}</div>
                        <div class="sortable-table__cell">${item.price}</div>
                        <div class="sortable-table__cell">${item.sales}</div>
                    </a>
                `
            })
            .join('');
    }



    sort(fieldValue, orderValue) {
        switch (orderValue) {
            case 'asc':
                this.sortBody = makeSorting(this.sortBody, 1, fieldValue);
                break;
            case 'desc':
                this.sortBody = makeSorting(this.sortBody, -1, fieldValue);
                break;
            default:
                this.sortBody;
                break;
        }

        function makeSorting(array, direction, name) {
            if (name === 'title') {
                return [...array].sort((string1, string2) =>
                    direction * (string1[name]).localeCompare((string2[name]), ['ru', 'en'], { caseFirst: 'upper' }));
            } else {
                return [...array].sort((num1, num2) =>
                    direction * ((num1[name]) - (num2[name])));
            }
        }
        
        let element = document.querySelector('.sortable-table__body');
        return element.innerHTML = this.elementSortTableBody(this.sortBody);
    }

    remove() {
        this.element.remove();
    }
    
    destroy() {
        this.remove();
        this.element = null;
        this.subElements = {};
    }
}

