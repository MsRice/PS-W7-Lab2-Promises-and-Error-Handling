"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSalesReport = exports.fetchProductReviews = exports.fetchProductCatalog = exports.DataError = exports.NetworkError = void 0;
var NetworkError = /** @class */ (function (_super) {
    __extends(NetworkError, _super);
    function NetworkError(message, status) {
        var _this = _super.call(this, message) || this;
        _this.status = status;
        return _this;
    }
    return NetworkError;
}(Error));
exports.NetworkError = NetworkError;
var DataError = /** @class */ (function (_super) {
    __extends(DataError, _super);
    function DataError(message, status) {
        var _this = _super.call(this, message) || this;
        _this.name = 'DataError';
        return _this;
    }
    return DataError;
}(Error));
exports.DataError = DataError;
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
