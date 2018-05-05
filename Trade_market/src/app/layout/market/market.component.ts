import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { LocalDataSource } from 'ng2-smart-table';
import {AuthService} from'../../service/auth.service';
import { Router } from '@angular/router';
import { ChartMouseOverEvent } from 'ng2-google-charts';
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
candlestick:any;
  name:string;
  Bid:string;
      Ask:string;
    Low:string;
        High:string;
        last:string;
        year:Number;
        month:Number;
        s:any;


    s1= new Chart({

        chart: {
            type: 'line',
            zoomType: 'x'
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'closing rate'
            },
        },
        credits: {
            enabled: false
        },
        series: [{

            name: '',
            data: []
        }]
    });

  constructor(private authService:AuthService,public router: Router) {
  }




new(){const l=localStorage.getItem("market");

console.log(l);
    this.authService. setAskBid(l).subscribe(res=>{

        if(res){

                console.log(res);
                this.s1.addPoint([Date.parse(res[0].date),res[0].last]);

        }
    })

    this.authService.setAskBid(l).subscribe(res=>{
        this.name=res[0].mname;
        this.Bid=res[0].bid;
        this.Ask=res[0].ask;
        this.High=res[0].high;
        this.Low=res[0].low;
        this.last=res[0].last;
    } );

}












  ngOnInit() {


     // console.log(this.time.length);
      const l=localStorage.getItem("market");


      this.authService.getpaslast(l).subscribe(res=>{

          if(res){
for(var i=res.length-10;i<res.length;i++) {
    console.log(res[i].last);
    this.s1.addPoint([Date.parse(res[i].date),res[i].last]);
}
          }
      })



//real time update front end
    this.s=setInterval(this.new.bind(this), 10000),






      this.authService. getcandlestic30minute(l).subscribe(res=>{


          if(res){

              console.log(res);
              this.source = new LocalDataSource();


              this.source.load(res);

          }
      })



      this.authService.setAskBid(l).subscribe(res=>{
this.name=res[0].mname;
          this.Bid=res[0].bid;
          this.Ask=res[0].ask;
              this.High=res[0].high;
                  this.Low=res[0].low;
                      this.last=res[0].last;
      } );



      this.authService.getcandlesticday(l).subscribe(res=>{
var l=new Array();
          var m=new Array();
          if(res){
              for(var i=res.length-10;i<res.length-1;i++) {
                  var n=new Array();
                  n.push(new Date(res[i].date).toUTCString());
                  n.push(res[i].L);
                  n.push(res[i].O);
                  n.push(res[i].C);
                  n.push(res[i].H);
                  m.push(n);
              }

console.log(m);

    this.candlestick=  {
          chartType: 'CandlestickChart',
          dataTable: [
              ['Task', 'low','Open','close','High'],
         m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8]],
      };
          } })
  }







source: LocalDataSource;

settings = {
    editable:false,
    hideSubHeader:true,


    actions:{add:false,
        edit:false,
        delete:false},
    columns: {

        date:{
            title: 'Day'
        },
        O:{
            title: 'Opening'
        },
        H: {
            title: 'High'
        },
        L: {
            title: 'Low'
        },
        C: {
            title: 'Close'
        }
    }
};






    hour(){  const l=localStorage.getItem("market");
    this.authService.getcandlestichour(l).subscribe(res=>{
        var l=new Array();
        var m=new Array();
        if(res){
            for(var i=res.length-10;i<res.length-1;i++) {
                var n=new Array();
                n.push(new Date(res[i].date).toUTCString());
                n.push(res[i].L);
                n.push(res[i].O);
                n.push(res[i].C);
                n.push(res[i].H);
                m.push(n);
            }

            console.log(m);

            this.candlestick=  {
                chartType: 'CandlestickChart',
                dataTable: [
                    ['Task', 'low','Open','close','High'],
                    m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8]],
            };
        } })}







    minute(){
        const l=localStorage.getItem("market");
        this.authService.getcandlestic30minute(l).subscribe(res=>{
            var l=new Array();
            var m=new Array();
            if(res){
                for(var i=res.length-10;i<res.length-1;i++) {
                    var n=new Array();
                    n.push(new Date(res[i].date).toUTCString());
                    n.push(res[i].L);
                    n.push(res[i].O);
                    n.push(res[i].C);
                    n.push(res[i].H);
                    m.push(n);
                }

                console.log(m);

                this.candlestick=  {
                    chartType: 'CandlestickChart',

                    dataTable: [
                        ['Task', 'low','Open','close','High'],
                        m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8]],
                };
            } })}







    day(){  const l=localStorage.getItem("market");
        this.authService.getcandlesticday(l).subscribe(res=>{
            var l=new Array();
            var m=new Array();
            if(res){
                for(var i=res.length-10;i<res.length-1;i++) {
                    var n=new Array();
                    n.push(new Date(res[i].date).toUTCString());
                    n.push(res[i].L);
                    n.push(res[i].O);
                    n.push(res[i].C);
                    n.push(res[i].H);
                    m.push(n);
                }

                console.log(m);

                this.candlestick=  {
                    chartType: 'CandlestickChart',
                    dataTable: [
                        ['Task', 'low','Open','close','High'],
                        m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8]],
                };
            } })}

    min1()
{
    const l=localStorage.getItem("market");
    this.authService.getcandlestic30minute(l).subscribe(res => {


        if (res) {

            console.log(res);
            this.source = new LocalDataSource();


            this.source.load(res);

        }
    })

}
    day1(){
        const l=localStorage.getItem("market");
        this.authService. getcandlesticday(l).subscribe(res=>{


            if(res){

                console.log(res);
                this.source = new LocalDataSource();


                this.source.load(res);

            }
        })

    }

    hour1(){
        const l=localStorage.getItem("market");

        this.authService.getcandlestichour(l).subscribe(res=>{


            if(res){

                console.log(res);
                this.source = new LocalDataSource();


                this.source.load(res);

            }
        })}
    ngOnDestroy(){
        console.log("aadsdsadsadasdsadsa");
        clearInterval(this.s);
    }

}


