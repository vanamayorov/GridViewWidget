class GridView {
    /** 
    * properties
    * @param [array] _tableClass
    * @param [array] attribute
    * @param [array] _element
    * @param [array] _header
    * @param [array] _headerClass
    */

    constructor() {
        this._header = "";
        this._headerClass = [];
        this._tableClass = [];
        this._element = "body";
        this.attribute = [];
    }

    /**
     * Setter for header
     */

    setHeader(header) {
        if (typeof header === "string" && header.trim() !== "") {
            this._header = header.trim();
            return true;
        }
        return false;
    }


    /**
     * Setter for headerClass
     */

    setHeaderClass(headerClass) {
        if (typeof headerClass === "object") {
            this._headerClass = headerClass;
            return true;
        }
        return false;
    }

    /**
     * Setter for table to append in element
     */

    setElement(element) {
        if (document.querySelector(element)) {
            this._element = element;
            return true;
        }
        return false;
    }

    /**
     * Setter for tableClass
     */

    setTableClass(tableClass) {
        if (typeof tableClass === "object") {
            this._tableClass = tableClass;
            return true;
        }

        return false;
    }

    /**
     * Method for drawing header in a table
     */

    drawHeader() {
        const header = document.createElement("h1");
        header.textContent = this._header;
        header.classList.add(...this._headerClass);
        return header;
    }

    /**
     * Method for drawing tr in a table
     */

    drawTrHeader() {
        let trHeader = document.createElement("tr");
        for (let key in this.attribute) {
            let th = document.createElement("th");
            if (this.attribute[key].label) {
                th.textContent = this.attribute[key].label;
            } else {
                th.textContent = key;
            }
            trHeader.append(th);
        }
        return trHeader;
    }

    /**
     * Method for drawing table content
     */

    drawTable(item) {
        let tr = document.createElement("tr");
        for (let key in this.attribute) {
            let td = document.createElement("td");
            if (this.attribute[key].value) {
                item[key] = this.attribute[key].value(item);
            }

            if (this.attribute[key].src) {
                td.innerHTML = item[key];
            } else {
                td.textContent = item[key];
            }

            tr.append(td);
        }
        return tr;
    }

    /**
     * Method for showing GridViewTable
     */

    render(data) {
        this.setElement(data.element);
        this.setHeaderClass(data.headerClass);
        this.setHeader(data.header);
        this.setTableClass(data.tableClass);
        this.attribute = data.attribute;
        this.data = data.data;

        // show header
        if (this._header) {
            document.querySelector(this._element).append(this.drawHeader());
        }
        // create table
        const table = document.createElement("table");
        table.classList.add(...this._tableClass);

        // draw tr
        table.append(this.drawTrHeader());

        // draw table
        this.data.forEach(item => {
            table.append(this.drawTable(item));
        });

        document.querySelector(this._element).append(table);
    }
}