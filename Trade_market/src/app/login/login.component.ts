import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AuthService} from '../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    email:String;
    password:String;

    constructor(public router: Router,
                private authservice: AuthService,
                private flashmassage:FlashMessagesService,) {
    }

    ngOnInit() {
    }

    onLoggedin() {
        const user={
            email:this.email,
            password:this.password
        }
        this.authservice.loginUser(user).subscribe(res=> {
            if(res.state) {
                this.authservice.storeData(res.token,res.user);
                //this.flashmassage.show('you are loggedin', {cssClass: 'alert-success', timeout: 1500});
                console.log(res);
                this.router.navigate(['/dashboard']);
            }
            else{
                this.flashmassage.show(res.msg , {cssClass: 'alert-danger', timeout: 1500});
                this.router.navigate(['/login']);

            }
        } );

        }

    }



