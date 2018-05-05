import { Injectable } from '@angular/core';
import {Http,Headers}from'@angular/http';

@Injectable()
export class AuthService {

    user:any;
    token:any;
  constructor(private http:Http) { }
    registerUser(user){
        let headers=new Headers();
        headers.append('content-Type','application/json');

        return this.http.post("http://localhost:3004/user/register",user,{headers:headers}).map(res=>res.json());
    }

    loginUser(user){
        let headers=new Headers();
        headers.append('content-Type','application/json');

        return this.http.post("http://localhost:3004/user/login",user,{headers:headers}).map(res=>res.json());
    }
    loginss(ss){
        let headers=new Headers();
        headers.append('content-Type','application/json');

        return this.http.post("http://localhost:3004/user/ss",ss,{headers:headers}).map(res=>res.json());
    }
    getProfile(){


        this.fetchToken();


        let headers=new Headers();
        headers.append('Authorization',this.token);
        headers.append('content-Type','application/json');

        return this.http.get("http://localhost:3004/user/profile",{headers:headers}).map(res=>res.json());


    }

    fetchToken(){
        const token=localStorage.getItem("tokenid");
        this.token=token;
    }
    storeData(token,userdata){
        localStorage.setItem("tokenid",token);
        localStorage.setItem("user",JSON.stringify(userdata));
        this.token=token;
        this.user=userdata;


    }
    storemarket(data){
        localStorage.removeItem("market");
        localStorage.setItem("market",JSON.stringify(data));

    }



    senddata(a){
        let headers=new Headers();
        headers.append('content-Type','application/json');

        return this.http.post("http://localhost:3004/user/ss",a,{headers:headers}).map(res=>res.json());
//console.log(ss);
    }

    //update email
    updateuser(update){
        let headers=new Headers();
        headers.append('content-Type','application/json');
console.log(update);
        return this.http.post("http://localhost:3004/user/update",update,{headers:headers}).map(res=>res.json());
    }

    updateuserpassword(update){
        let headers=new Headers();
        headers.append('content-Type','application/json');
        console.log(update);
        return this.http.post("http://localhost:3004/user/updatepassword",update,{headers:headers}).map(res=>res.json());
    }
    getcandlesticday(update){
    let headers=new Headers();
    headers.append('content-Type','application/json');
    console.log(update);
    return this.http.post("http://localhost:3004/user/getcandlesticday ",update,{headers:headers}).map(res=>res.json());
}
    getcandlestic30minute(update){
        let headers=new Headers();
        headers.append('content-Type','application/json');
        console.log(update);
        return this.http.post("http://localhost:3004/user/getcandlestic30minute ",update,{headers:headers}).map(res=>res.json());
    }
    getcandlestichour(update){
        let headers=new Headers();
        headers.append('content-Type','application/json');
        console.log(update);
        return this.http.post("http://localhost:3004/user/getcandlestichour ",update,{headers:headers}).map(res=>res.json());
    }

    setAskBid(data){
        let headers=new Headers();
        headers.append('content-Type','application/json');
        //console.log(data);
        return this.http.post("http://localhost:3004/user/getaskbid",data,{headers:headers}).map(res=>res.json());


    }
    getbitcoinvalue(){
        let headers=new Headers();
        headers.append('content-Type','application/json');

        return this.http.get("https://blockchain.info/ticker",{headers:headers}).map(res=>res.json());


    }
getspead(data){
        let headers=new Headers();
        headers.append('content-Type','application/json');
        //console.log(data);
        return this.http.post("http://localhost:3004/user/getspead",data,{headers:headers}).map(res=>res.json());


    }
    updatewatchlist(data){
        let headers=new Headers();
        headers.append('content-Type','application/json');
        //console.log(data);
        return this.http.post("http://localhost:3004/user/updatewatchlist",data,{headers:headers}).map(res=>res.json());


    }
    displaywatchlist(data){
        let headers=new Headers();
        headers.append('content-Type','application/json');
        console.log("a"); console.log(data);
        return this.http.post("http://localhost:3004/user/displaywatchlist",data,{headers:headers}).map(res=>res.json());


    }

    deletewatchlist(data){
        let headers=new Headers();
        headers.append('content-Type','application/json');
        console.log("a"); console.log(data);
        return this.http.post("http://localhost:3004/user/deletewatchlist",data,{headers:headers}).map(res=>res.json());


    }
    getpaslast(data){
        let headers=new Headers();
        headers.append('content-Type','application/json');
        //console.log(data);
        return this.http.post("http://localhost:3004/user/getpaslast",data,{headers:headers}).map(res=>res.json());


    }
}
