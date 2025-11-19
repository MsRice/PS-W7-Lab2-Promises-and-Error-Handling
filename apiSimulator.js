"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSalesReport = exports.fetchProductReviews = exports.fetchProductCatalog = void 0;
var fetchProductCatalog = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            }
            else {
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};
exports.fetchProductCatalog = fetchProductCatalog;
var fetchProductReviews = function (productId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() < 0.6) {
                resolve([
                    { productId: 1, review: "Awesome" },
                    { productId: 1, review: "Awesome" },
                    { productId: 2, review: "Awesome" },
                    { productId: 2, review: "Awesome" }
                ]);
            }
            else {
                reject("Failed to fetch reviews for product ID ".concat(productId, "\""));
            }
        }, 1500);
    });
};
exports.fetchProductReviews = fetchProductReviews;
var fetchSalesReport = function (productId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() < 0.6) {
                resolve([
                    { productId: 1, totalSales: 8, unitSold: 1500, averagePrice: 75.95 },
                    { productId: 2, totalSales: 8, unitSold: 1500, averagePrice: 75.95 },
                ]);
            }
            else {
                reject("Failed to fetch sales report");
            }
        }, 1000);
    });
};
exports.fetchSalesReport = fetchSalesReport;
