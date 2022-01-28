"use strict";
const dataToInsert = [
    {
        company: "Alfreds",
        chef: "Maria Anders",
        country: "Germany"
    },
    {
        company: "Ernst Handel",
        chef: "Roland Mendel",
        country: "Austria"
    },
    {
        company: "Island Trading",
        chef: "Helen Bennett",
        country: "UK"
    },
];
const mainSettings = {
    header: "Title",
    headerClass: ['header', 'my-5'],
    tableClass: ["table", 'bg-light'],
    attribute: {
        "company": {
            "label": "Компания",
            "src": "html"
        },
        "chef": {
            "label": "Директор"
        },
        "country": {
            "label": "Страна",
            "value": (data) => {
                return data['country'];
            }
        }
    },
    data: dataToInsert
};
let gridView = new GridView();
gridView.render(mainSettings);