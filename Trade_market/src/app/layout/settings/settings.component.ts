import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {ValidateService} from '../../service/validate.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
password:String;
email:String;
id:any;
user:any;
repassword:String;
  constructor(private authservice: AuthService,
              private validateservice:ValidateService,
              private flashmassage:FlashMessagesService) { }

  ngOnInit() {
      this.authservice.getProfile().subscribe(res=>{
          this.user=res.user;

      })




  }



    editemail(){


        console.log(this.user._id)
        const update={
            id:this.user._id,
            email:this.email,

        };

        //validate submit
        if(!this.validateservice.validateupdate(update)){
            console.log('fill in all field');
            this.flashmassage.show('------------------------------------------------------------------------------------------------------------------fill in all field--------------------------------------------------------------------------------------------------------------------------------------------', {cssClass: 'alert-danger', timeout: 1500});
            return false;
        }

        if(this.user.email==this.email){
            console.log(this.user.email);
            console.log(this.email);
            console.log('same email');
            this.flashmassage.show('------------------------------------------------------------------------------------------------------------------same email---------------------------------------------------------------------------------------------------------------------------------------------------', {cssClass: 'alert-danger', timeout: 1500});
            return false;
        }

//validate email
        if(!this.validateservice.validateemail(update.email)){
            console.log('incorrect email');
            this.flashmassage.show('-------------------------------------------------------------------------------------------------------------------incorrect email---------------------------------------------------------------------------------------------------------------------------------------', {cssClass: 'alert-danger', timeout: 1500});
            return false;
        }

        this.authservice.updateuser(update).subscribe(res=> {
            if(!res.state==false) {
              console.log("data update");
                this.flashmassage.show("---------------------------------------------------------------------------------------------------------------------"+res.msg+"----------------------------------------------------------------------------------------------------------------------------------------------------------------", {cssClass: 'alert-success', timeout: 1500});
            }
           else {
                console.log("data not update");
                this.flashmassage.show("---------------------------------------------------------------------------------------------------------------------" +res.msg +"--------------------------------------------------------------------------------------------------------------------------------------------------------------", {
                    cssClass: 'alert-danger',
                    timeout: 1500
                });
            } } );


    }

    editpassword(){

        const update={
            id:this.user._id,
            password:this.password,

        };
        const pass={
            pass:this.password,
            repassword:this.repassword

        };

// check not fill
      /*  if(!this.validateservice.validateupdate(update)){
            console.log('fill in all field');
            this.flashmassage.show('------------------------------------------------------------------------------------------------------------------fill in all field-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------', {cssClass: 'alert-danger', timeout: 1500});
            return false;
        }*/

        if(!this.validateservice.checkpassword(this.password)){
            console.log('fill in all field');
            this.flashmassage.show('-----------------------------------------------------------------------------------------------------------------------not valid password------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------', {cssClass: 'alert-danger', timeout: 1500});
            return false;
        }


        //password check
        if(!this.validateservice.validatepassword(pass)){
            console.log('Password not same');
            this.flashmassage.show('-----------------------------------------------------------------------------------------------------------------------Password not same--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------', {cssClass: 'alert-danger', timeout: 1500});
            return false;
        }


        this.authservice.updateuserpassword(update).subscribe(res=> {
            if(!res.state==false) {
                console.log("data update");
                this.flashmassage.show("---------------------------------------------------------------------------------------------------------------------"+res.msg+"----------------------               ---------------------------------------------------------------------------------------------------------------------------------------------------", {cssClass: 'alert-success', timeout: 1500});
            }
            else {
                console.log("data not update");
                this.flashmassage.show("---------------------------------------------------------------------------------------------------------------------" +res.msg +"-------------------             --------------------------------------------------------------------------------------------------------------------------------------------------------", {
                    cssClass: 'alert-danger',
                    timeout: 1500
                });
            } } );

    }

}
