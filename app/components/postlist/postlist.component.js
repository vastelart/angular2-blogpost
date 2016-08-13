System.register(['angular2/core', '../post/post.component', './postlist.service', '../../config'], function(exports_1, context_1) {
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
    var core_1, post_component_1, postlist_service_1, config_1;
    var PostList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_component_1_1) {
                post_component_1 = post_component_1_1;
            },
            function (postlist_service_1_1) {
                postlist_service_1 = postlist_service_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            PostList = (function () {
                function PostList(postListService) {
                    this.postListService = postListService;
                }
                PostList.prototype.ngOnInit = function () {
                    this.getPostList();
                };
                PostList.prototype.getPostList = function () {
                    var _this = this;
                    this.postListService.getAllPosts()
                        .subscribe(function (posts) { _this.posts = posts; }, function (error) { if (error)
                        throw error + " : PostList getPosts() error"; });
                };
                PostList = __decorate([
                    core_1.Component({
                        selector: 'post-list',
                        templateUrl: config_1.default.root_dir + "postlist/postlist.template.html",
                        directives: [post_component_1.BlogPost],
                        providers: [postlist_service_1.PostListService]
                    }), 
                    __metadata('design:paramtypes', [postlist_service_1.PostListService])
                ], PostList);
                return PostList;
            }());
            exports_1("PostList", PostList);
        }
    }
});
//# sourceMappingURL=postlist.component.js.map