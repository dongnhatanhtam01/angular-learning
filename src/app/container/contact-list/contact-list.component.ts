import { Component } from "@angular/core";
//view
@Component({
    selector: 'dnat-contact-list',
    templateUrl: './contact-list.component.html' 
})
//controller
export class ContactListComponent {
    message: string  = 'Xin Chao, ContactListComponent! ';
    printable: boolean = false;
    contacts: Array<any> = [
        {id: 1, name: 'tamdna', job: 'Web Dev', avatar: {url: '../../../assets/avatar/avatar2.png'}},
        {id: 2, name: 'Mac AT', job: 'Producer, Director'},
        {id: 3, name: 'At Director', job: 'Writter', avatar: {url: '../../../assets/avatar/avatar2.png'}},
    ];
    tabIndex: number = 1;
    //object Es2015 khong can function nua
    doClick(){
        this.message = "Button Clicked";
        setTimeout(()=> {this.message = "Button Done Clicked!"},2000)
    }
    changeTab= (tabIndex) => {
        this.tabIndex = tabIndex;
        console.log(this.tabIndex)
    }
}