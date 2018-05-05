import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from'../service/auth.service';
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
user:any;
    constructor(public router: Router,private authService:AuthService) { }



    ngOnInit() {

        this.authService.getProfile().subscribe(res=>{
            this.user=res.user;


        if(res.user){
        if(this.router.url == '/login')
            this.router.navigate(['/dashboard']);
        }})
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard']);
        }
    }

}
