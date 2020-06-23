# DogSign

:zzz: This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.


## ENCAPSULATION CSS

import ViewEncapsulation trong Component để dùng được tính năng đóng gói của style trong angular gọi là encapsulation
> ViewEncapsulation.None: nghĩa là nhận style của Global    
ViewEncapsulation.Emulated: Nghĩa là nhận style của global và chính nó  
ViewEncapsulation.ShadowDom: nghĩa là không chơi với ai  thay cho __ViewEncapsulation.Native__  
ViewEncapsulation không nói chuyện với style của component cấp cha

Ngoài ra thì còn khái niệm shadow Dom gây khố khăn trong việc chỉnh sửa style của thành phần trang web

muốn chỉnh style cho component 
> **Dùng :host** display block  
**Dung styles**: [``] nhận vào 1 mảng các class css  
**Dùng styleUrls** : [ ] nhận vào mảng đường dẫn đến style css
