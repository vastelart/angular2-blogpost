System.register(['angular2/core', '../postlist/postlist.component', '../header/header.component', '../newPost/newPost.component', '../../config'], function(exports_1, context_1) {
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
    var core_1, postlist_component_1, header_component_1, newPost_component_1, config_1;
    var RootComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (postlist_component_1_1) {
                postlist_component_1 = postlist_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (newPost_component_1_1) {
                newPost_component_1 = newPost_component_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            RootComponent = (function () {
                function RootComponent() {
                    this.title = config_1.default.main_title;
                }
                RootComponent = __decorate([
                    core_1.Component({
                        selector: 'blogpost-app',
                        templateUrl: config_1.default.root_dir + "root/root.template.html",
                        directives: [header_component_1.Header, newPost_component_1.NewPostForm, postlist_component_1.PostList]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RootComponent);
                return RootComponent;
            }());
            exports_1("RootComponent", RootComponent);
        }
    }
});
//# sourceMappingURL=root.component.js.map