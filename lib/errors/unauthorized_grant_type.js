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
var UnauthorizedGrantType = (function (_super) {
    __extends(UnauthorizedGrantType, _super);
    function UnauthorizedGrantType(description, uri) {
        return _super.call(this, {
            error: 'unauthorized_grant_type',
            error_description: description,
            error_uri: uri
        }) || this;
    }
    return UnauthorizedGrantType;
}(oauth2_error_1.Oauth2Error));
exports.UnauthorizedGrantType = UnauthorizedGrantType;
//# sourceMappingURL=unauthorized_grant_type.js.map