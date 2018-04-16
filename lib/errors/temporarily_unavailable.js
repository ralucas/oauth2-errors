"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var oauth2_error_1 = require("../oauth2_error");
var TemporarilyUnavailable = (function (_super) {
    __extends(TemporarilyUnavailable, _super);
    function TemporarilyUnavailable(params) {
        if (params === void 0) { params = {}; }
        return _super.call(this, {
            error: 'temporarily_unavailable',
            error_description: params.description,
            error_uri: params.uri
        }) || this;
    }
    return TemporarilyUnavailable;
}(oauth2_error_1.Oauth2Error));
exports.TemporarilyUnavailable = TemporarilyUnavailable;
//# sourceMappingURL=temporarily_unavailable.js.map