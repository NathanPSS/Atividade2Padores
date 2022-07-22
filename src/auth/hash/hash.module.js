"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HashModule = void 0;
var common_1 = require("@nestjs/common");
var generate_hash_service_1 = require("./generate-hash/generate-hash.service");
var checks_hash_service_1 = require("./checks-hash/checks-hash.service");
var HashModule = /** @class */ (function () {
    function HashModule() {
    }
    HashModule = __decorate([
        (0, common_1.Module)({
            providers: [generate_hash_service_1.GenerateHashService, checks_hash_service_1.ChecksHashService],
            exports: [generate_hash_service_1.GenerateHashService, checks_hash_service_1.ChecksHashService]
        })
    ], HashModule);
    return HashModule;
}());
exports.HashModule = HashModule;
