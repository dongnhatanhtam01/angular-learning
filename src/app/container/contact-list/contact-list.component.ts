import { Component } from "@angular/core";
//view
@Component({
    selector: 'dnat-contact-list',
    template: ` <h2>{{message}}</h2>
    <button (click)="doClick()">Click me</button>`
})
//controller
export class ContactListComponent {
    message: string  = 'Xin Chao, ContactListComponent! ';
    //object Es2015 khong can function nua
    doClick(){
        this.message = "Button Clicked";
        setTimeout(()=> {this.message = "Button Done Clicked!"},2000)
    }
}