import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { Router } from '@angular/router';
import {AuthService} from'../../service/auth.service';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    getmarkets:String;
    name:String;
    username:String;
    Email:String;
    user:any;
    ul:String;
    us:String;
    el:String;
    es:String;
    jl:String;
    js:String;
    cl:String;
    cs:String;
    al:String;
    ass:String;
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor(private authService:AuthService,public router: Router) {
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });


    }

    ngOnInit() { this.authService.getProfile().subscribe(res=>{
        this.name=res.user.name;
        this.user=res.user;
        this.username=res.user.username;
        this.Email=res.user.email;
    });

    this.authService.getbitcoinvalue().subscribe(res=>{
           console.log(res.USD.last);
       this. ul=res.USD.last;
        this.us=res.USD.symbol;
        this.el=res.EUR.last;
        this.es=res.EUR.symbol;
        this.jl=res.JPY.last;
        this.js=res.JPY.symbol;
        this.cl=res.CNY.last;
        this.cs=res.CNY.symbol;
        this.al=res.AUD.last;
        this.ass=res.AUD.symbol;




    });

    }

    click(){
        const data={
        id:this.user._id
    };
        //console.log(this.id);
        this.authService.displaywatchlist(data).subscribe(res=>{
            this.getmarkets=res;

        });

    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }


    link(data){
const c={
    "cname":data
}
        this.authService.storemarket(c);
        this.router.navigate(['/market']);
    }

    clear(data){
        const c={
            id:this.user._id,
            cname:data
        }

        this.authService.deletewatchlist(c).subscribe(res=>{
            this.getmarkets=res;
           this.click();
        });


    }

}
