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
var InvalidGrant = (function (_super) {
    __extends(InvalidGrant, _super);
    function InvalidGrant(params) {
        if (params === void 0) { params = {}; }
        return _super.call(this, {
            error: 'invalid_grant',
            error_description: params.description,
            error_uri: params.uri
        }) || this;
    }
    return InvalidGrant;
}(oauth2_error_1.Oauth2Error));
exports.InvalidGrant = InvalidGrant;
//# sourceMappingURL=invalid_grant.js.map