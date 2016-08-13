System.register(['angular2/core', './newPost.model', './newPost.service', '../../config'], function(exports_1, context_1) {
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
    var core_1, newPost_model_1, newPost_service_1, config_1;
    var NewPostForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (newPost_model_1_1) {
                newPost_model_1 = newPost_model_1_1;
            },
            function (newPost_service_1_1) {
                newPost_service_1 = newPost_service_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            NewPostForm = (function () {
                function NewPostForm(newPostService) {
                    this.newPostService = newPostService;
                    this.model = new newPost_model_1.NewPost('', '');
                    this.resultMessage = '';
                    this.formDisabled = false;
                    this.showHideForm = false;
                }
                // @Output() onPostSubmitSuccess = new EventEmitter();
                NewPostForm.prototype.showHideFormAction = function () {
                    this.showHideForm = !this.showHideForm;
                    this.resultMessage = '';
                };
                NewPostForm.prototype.onSubmit = function () {
                    var _this = this;
                    this.formDisabled = true;
                    this.resultMessage = '';
                    this.newPostService.addNewPost(this.model)
                        .then(function (response) {
                        _this.formDisabled = false;
                        _this.model.clear();
                        // this.onPostSubmitSuccess.emit(response);
                        _this.resultMessage = 'Done';
                        _this.resultStatus = true;
                        setTimeout(function () { _this.resultMessage = ''; }, 3000);
                    })
                        .catch(function (error) {
                        _this.formDisabled = false;
                        _this.resultMessage = 'Fail';
                        _this.resultStatus = false;
                        if (error)
                            throw error + " : NewPostForm Submit Error";
                    });
                };
                NewPostForm = __decorate([
                    core_1.Component({
                        selector: 'new-post-form',
                        templateUrl: config_1.default.root_dir + "newPost/newPost.template.html",
                        providers: [newPost_service_1.NewPostService]
                    }), 
                    __metadata('design:paramtypes', [newPost_service_1.NewPostService])
                ], NewPostForm);
                return NewPostForm;
            }());
            exports_1("NewPostForm", NewPostForm);
        }
    }
});
//# sourceMappingURL=newPost.component.js.map