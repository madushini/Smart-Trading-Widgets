import { Component, OnInit } from '@angular/core';
import {AuthService} from'../../../../service/auth.service';
@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
    constructor(private authService:AuthService) { }
    ngOnInit() {
        this.authService.getbitcoinvalue().subscribe(res=>{
            console.log(res);
        });
    }
}
