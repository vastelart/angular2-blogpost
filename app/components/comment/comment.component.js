System.register(['angular2/core', './comment.service', '../../config'], function(exports_1, context_1) {
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
    var core_1, comment_service_1, config_1;
    var Comment;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (comment_service_1_1) {
                comment_service_1 = comment_service_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            Comment = (function () {
                function Comment(commentService) {
                    this.commentService = commentService;
                }
                Comment.prototype.ngOnInit = function () {
                    this.getComments();
                };
                Comment.prototype.getComments = function () {
                    var _this = this;
                    this.commentService.getComments(this.postId)
                        .subscribe(function (comments) {
                        _this.comments = comments;
                    }, function (error) { if (error)
                        throw error; });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Comment.prototype, "postId", void 0);
                Comment = __decorate([
                    core_1.Component({
                        selector: 'comment',
                        templateUrl: config_1.default.root_dir + "comment/comment.template.html",
                        providers: [comment_service_1.CommentService]
                    }), 
                    __metadata('design:paramtypes', [comment_service_1.CommentService])
                ], Comment);
                return Comment;
            }());
            exports_1("Comment", Comment);
        }
    }
});
//# sourceMappingURL=comment.component.js.map