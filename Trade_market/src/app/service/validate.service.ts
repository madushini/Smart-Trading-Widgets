import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegistor(user){
      if(user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined ){
return false;
      }
      else {
          return true;
      }
  }

  validatepassword(pass){
if(pass.pass==pass.repassword){
    return true;
}


else{
    return false;
}

  }

    validateupdate(user){
        if( user.email == undefined  ){
            return false;
        }
        else {
            return true;
        }
    }

validateemail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

    checkpassword(password)
    {
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        return re.test(password);
    }

}
