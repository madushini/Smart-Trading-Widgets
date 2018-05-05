import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {AuthService} from '../service/auth.service';
import {ValidateService} from '../service/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    name:String;
    username:String;
    email:String;
    password:String;
    repassword:String;
    constructor(
        private authservice:AuthService,
        private validateservice:ValidateService,
        private flashmassage:FlashMessagesService,
        private router:Router,
    ) { }

    ngOnInit() { }
    onregister(){
       const user=
           { name:this.name,
        username:this.username,
        email:this.email,
        password:this.password,};

       const pass={
           pass:this.password,
           repassword:this.repassword

       };

//validate submit
       if(!this.validateservice.validateRegistor(user)){
           console.log('fill in all field');
           this.flashmassage.show('fill in all field', {cssClass: 'alert-danger', timeout: 1500});
           return false;
       }
//validate email
        if(!this.validateservice.validateemail(user.email)){
            console.log('incorrect email');
            this.flashmassage.show('incorrect email', {cssClass: 'alert-danger', timeout: 1500});
            return false;
        }
        //password check
        if(!this.validateservice.validatepassword(pass)){
            console.log('Password not same');
            this.flashmassage.show('Password not same', {cssClass: 'alert-danger', timeout: 1500});
            return false;
        }
// 8characters captal simple number
        if(!this.validateservice.checkpassword(user.password)){
            console.log('fill in all field');
            this.flashmassage.show('not valid password', {cssClass: 'alert-danger', timeout: 1500});
            return false;
        }


        this.authservice.registerUser(user).subscribe(res=> {
            if(res.state) {
                //this.flashmassage.show(res.msg, {cssClass: 'alert-success', timeout: 1500});
                console.log(res);
                this.router.navigate(['/login']);
            }
            else{
                this.flashmassage.show(res.msg , {cssClass: 'alert-danger', timeout: 1500});
                this.router.navigate(['/signup']);
            }

    });
        }
    }


