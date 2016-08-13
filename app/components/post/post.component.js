System.register(['angular2/core', '../comment/comment.component', '../newComment/newComment.component', '../../config'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, comment_component_1, newComment_component_1, config_1;
    var BlogPost;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (comment_component_1_1) {
                comment_component_1 = comment_component_1_1;
            },
            function (newComment_component_1_1) {
                newComment_component_1 = newComment_component_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            BlogPost = (function () {
                function BlogPost() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], BlogPost.prototype, "posts", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BlogPost.prototype, "post", void 0);
                BlogPost = __decorate([
                    core_1.Component({
                        selector: 'blogpost',
                        templateUrl: config_1.default.root_dir + "/post/post.template.html",
                        directives: [comment_component_1.Comment, newComment_component_1.NewComment]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BlogPost);
                return BlogPost;
            }());
            exports_1("BlogPost", BlogPost);
        }
    }
});
//# sourceMappingURL=post.component.js.map