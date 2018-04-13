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
var InvalidRequest = (function (_super) {
    __extends(InvalidRequest, _super);
    function InvalidRequest(description, uri) {
        return _super.call(this, {
            error: 'invalid_request',
            error_description: description,
            error_uri: uri
        }) || this;
    }
    return InvalidRequest;
}(oauth2_error_1.Oauth2Error));
exports.InvalidRequest = InvalidRequest;
//# sourceMappingURL=invalid_request.js.map