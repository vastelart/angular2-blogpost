System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NewPost;
    return {
        setters:[],
        execute: function() {
            NewPost = (function () {
                function NewPost(title, body) {
                    this.title = title;
                    this.body = body;
                }
                NewPost.prototype.clear = function () {
                    this.title = '';
                    this.body = '';
                };
                return NewPost;
            }());
            exports_1("NewPost", NewPost);
        }
    }
});
//# sourceMappingURL=newPost.model.js.map