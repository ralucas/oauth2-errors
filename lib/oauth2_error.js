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
var Oauth2Error = (function (_super) {
    __extends(Oauth2Error, _super);
    function Oauth2Error(params) {
        var _this = _super.call(this, params.error) || this;
        _this.statusCode = 400;
        _this.error = params.error;
        _this.error_description = params.error_description;
        _this.error_uri = params.error_uri;
        Object.setPrototypeOf(_this, Oauth2Error.prototype);
        return _this;
    }
    Oauth2Error.prototype.respond = function (res) {
        var statusCode = this.statusCode;
        var jsonResponse = this.toString();
        return res
            .type('application/json')
            .status(statusCode)
            .send(jsonResponse);
    };
    Oauth2Error.prototype.toString = function () {
        return JSON.stringify({
            error: this.error,
            error_description: this.error_description,
            error_uri: this.error_uri
        });
    };
    return Oauth2Error;
}(Error));
exports.Oauth2Error = Oauth2Error;
//# sourceMappingURL=oauth2_error.js.map