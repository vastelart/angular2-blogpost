System.register(['angular2/core', './newComment.service', '../comment/comment.model', '../../config'], function(exports_1, context_1) {
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
    var core_1, newComment_service_1, comment_model_1, config_1;
    var NewComment;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (newComment_service_1_1) {
                newComment_service_1 = newComment_service_1_1;
            },
            function (comment_model_1_1) {
                comment_model_1 = comment_model_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            NewComment = (function () {
                function NewComment(newCommentService) {
                    this.newCommentService = newCommentService;
                    this.commentFormDisabled = false;
                    this.resultMessage = '';
                    this.commentModel = new comment_model_1.CommentModel('', '');
                }
                NewComment.prototype.submitComment = function (postId) {
                    var _this = this;
                    this.commentFormDisabled = true;
                    var _a = this.commentModel, email = _a.email, body = _a.body;
                    this.commentData = {
                        postId: postId,
                        email: email,
                        body: body
                    };
                    this.newCommentService.addComment(this.commentData)
                        .then(function (response) {
                        _this.commentModel.clear();
                        _this.commentFormDisabled = false;
                        _this.resultMessage = 'Done';
                        _this.resultStatus = true;
                        setTimeout(function () { _this.resultMessage = ''; }, 3000);
                    })
                        .catch(function (error) {
                        _this.commentFormDisabled = false;
                        _this.resultMessage = 'Failed';
                        _this.resultStatus = false;
                        if (error)
                            throw error + " : submitComment Error";
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NewComment.prototype, "post", void 0);
                NewComment = __decorate([
                    core_1.Component({
                        selector: 'new-comment',
                        templateUrl: config_1.default.root_dir + "newComment/newComment.template.html",
                        providers: [newComment_service_1.NewCommentService]
                    }), 
                    __metadata('design:paramtypes', [newComment_service_1.NewCommentService])
                ], NewComment);
                return NewComment;
            }());
            exports_1("NewComment", NewComment);
        }
    }
});
//# sourceMappingURL=newComment.component.js.map