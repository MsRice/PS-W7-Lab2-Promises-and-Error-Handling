"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apiSimulator_1 = require("./apiSimulator");
var apiSimulator_2 = require("./apiSimulator");
var apiSimulator_3 = require("./apiSimulator");
try {
    (0, apiSimulator_1.fetchProductCatalog)()
        .then(function (product) {
        console.log(product);
    })
        .catch(function (error) { return console.error(error); });
    (0, apiSimulator_2.fetchProductReviews)(1)
        .then(function (reviews) {
        var review = reviews.filter(function (el) { return el.productId === 1; });
        console.log(review);
    })
        .catch(function (error) { return console.error(error); });
    (0, apiSimulator_3.fetchSalesReport)(1).then(function (report) {
        console.log(report);
    }).catch(function (error) { return console.error(error); });
}
catch (e) {
    console.error(e);
}
finally {
    console.log("All API calls have been tempted.");
}
