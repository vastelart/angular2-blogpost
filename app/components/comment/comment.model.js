System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CommentModel;
    return {
        setters:[],
        execute: function() {
            CommentModel = (function () {
                function CommentModel(email, body) {
                    this.email = email;
                    this.body = body;
                }
                CommentModel.prototype.clear = function () {
                    this.email = '';
                    this.body = '';
                };
                return CommentModel;
            }());
            exports_1("CommentModel", CommentModel);
        }
    }
});
//# sourceMappingURL=comment.model.js.map