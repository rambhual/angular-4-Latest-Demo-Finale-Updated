"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var RX_1 = require("rxjs/RX");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.baseURL = "app/common/product.json";
    }
    ProductService.prototype.GetProducts = function () {
        return this.http.get(this.baseURL)
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    ProductService.prototype.getProduct = function (ProductID) {
        return this.http.get(this.baseURL + "/" + ProductID)
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (errr) {
        return RX_1.Observable.throw(errr.statusText);
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map