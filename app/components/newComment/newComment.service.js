System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/toPromise', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var NewCommentService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            NewCommentService = (function () {
                function NewCommentService(http) {
                    this.http = http;
                }
                NewCommentService.prototype.addComment = function (commentData) {
                    var _this = this;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return new Promise(function (resolve, reject) {
                        _this.http.post("http://jsonplaceholder.typicode.com/posts/" + commentData.postId + "/comments", JSON.stringify(commentData), { headers: _this.headers })
                            .toPromise()
                            .then(function (response) { resolve(response.json()); })
                            .catch(function (error) { reject(error); });
                    });
                };
                NewCommentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], NewCommentService);
                return NewCommentService;
            }());
            exports_1("NewCommentService", NewCommentService);
        }
    }
});
//# sourceMappingURL=newComment.service.js.map