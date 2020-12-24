export default class ColumnChart {
    element = document.createElement('div');

    constructor({ data, label, value, link } = options) {
        this.data = data;
        this.label = label;
        this.value = value;
        this.link = link;
        this.element.className = "column-chart";
        this.element.innerHTML = `<div class="column-chart__title">
                                        Total ${this.label}
                                        ${this.hasLink(this.link)}
                                    </div>
                                    <div class="column-chart__container">
                                        <div data-element="header" class="column-chart__header" style="--chart-height: 50"> ${this.value} </div>
                                        <div data-element="body" class="column-chart__chart">
                                            ${this.tooltip(this.data)}
                                        </div>
                                    </div>`
    };

    tooltip(arr) {
        if (arr.length === 0) {
            this.element.classList.add("column-chart_loading");
        }

        let block = '';
        let chartHeight = 50;

        arr.forEach(el => {
            let elHeight = (Math.trunc((chartHeight * el) / 100))
            block += `<div style="--value: ${elHeight}" data-tooltip="${el}%"></div>`;
        });

        return block;
    };

    hasLink(link) {
        if (link) {
            return `<a class="column-chart__link" href="${link}">View all</a>`
        }
    }

    update() {
        return [10, 40, 90, 50, 20];
    }  
}
