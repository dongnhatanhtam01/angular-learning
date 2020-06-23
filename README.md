# DogSign

:zzz: This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## ENCAPSULATION CSS

import ViewEncapsulation trong Component để dùng được tính năng đóng gói của style trong angular gọi là encapsulation
> ViewEncapsulation.None: nghĩa là nhận style của Global  
ViewEncapsulation.Emulated: Nghĩa là nhận style của global và chính nó
ViewEncapsulation.Native: nghĩa là không chơi với ai  
ViewEncapsulation không nói chuyện với style của component cấp cha

Ngoài ra thì còn khái niệm shadow Dom gây khố khăn trong việc chỉnh sửa style của thành phần trang web

muốn chỉnh style cho component 
> **Dùng :host** display block  
**Dung styles**: [``] nhận vào 1 mảng các class css  
**Dùng styleUrls** : [ ] nhận vào mảng đường dẫn đến style css
