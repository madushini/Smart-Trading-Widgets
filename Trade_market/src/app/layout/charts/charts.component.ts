import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {AuthService} from'../../service/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Chart } from 'angular-highcharts';
import {consoleTestResultHandler} from "tslint/lib/test";
import {TimeInterval} from "rxjs/Rx";

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
user:any;
s:any;
a:any;
b:any;
c:any;
d:any;
e:any;
    m1:String;
    m2:String;
    m3:String;
    m4:String;
    m5:String;
    m6:String;
    m7:String;
    m8:String;
    m9:String;


    constructor(private authService:AuthService,public router: Router,private flashmassage:FlashMessagesService) {

    }

   public ngOnInit() {
this.new();
       this.s=setInterval(this.new.bind(this), 10000);
        this.authService.getProfile().subscribe(res=>{
       this.user=res.user;

   })


   }


   new(){
       //bar chart
       this.a={
           cname:'BTC-ETH'
       };
       this.b={
           cname:'BTC-BCC'
       };
       this.c={
           cname:'BTC-GBYTE'
       };
       this.d={
           cname:'BTC-LTC'
       };
       this.e={
           cname:'BTC-DASH'
       };




       this.authService.setAskBid(this.a).subscribe(res=>{
           this.m1=res[0].mname;
           console.log(this.m1);
           this.market1.removeSerie(0);
           this.market1.addSerie({
               data:[]
           });

           for( var i = 0 ; i < 2 ; i ++) {
               if(i==0)

               {
                   console.log(res[0].bid);
                   this.market1.addPoint(res[0].bid  );
               }



               if(i==1){
                   console.log(res[0].ask);
                   this.market1.addPoint(res[0].ask);
               }

           }});



       this.authService.setAskBid(this.b).subscribe(res=>{
           this.m2=res[0].mname;
           console.log(this.m2);
           this.market2.removeSerie(0);
           this.market2.addSerie({
               data:[]
           });
           for( var i = 0 ; i < 2 ; i ++) {
               if(i==0)

               {
                   console.log(res[0].bid);
                   this.market2.addPoint(res[0].bid  );
               }



               if(i==1){
                   console.log(res[0].ask);
                   this.market2.addPoint(res[0].ask);
               }

           }});



       this.authService.setAskBid(this.c).subscribe(res=>{
           this.m3=res[0].mname;
           console.log(this.m3);
           this.market3.removeSerie(0);
           this.market3.addSerie({
               data:[]
           });

           for( var i = 0 ; i < 2 ; i ++) {
               if(i==0)

               {
                   console.log(res[0].bid);
                   this.market3.addPoint(res[0].bid  );
               }



               if(i==1){
                   console.log(res[0].ask);
                   this.market3.addPoint(res[0].ask);
               }

           }});



       this.authService.setAskBid(this.d).subscribe(res=>{
           this.m4=res[0].mname;
           console.log(res[0].bid);
           this.market4.removeSerie(0);
           this.market4.addSerie({
               data:[]
           });

           for( var i = 0 ; i < 2 ; i ++) {
               if(i==0)

               {
                   console.log(res[0].bid);
                   this.market4.addPoint(res[0].bid  );
               }



               if(i==1){
                   console.log(res[0].ask);
                   this.market4.addPoint(res[0].ask);
               }

           }});



       this.authService.setAskBid(this.e).subscribe(res=>{
           this.m5=res[0].mname;
           console.log(res[0].bid);
           this.market5.removeSerie(0);
           this.market5.addSerie({
               data:[]
           });

           for( var i = 0 ; i < 2 ; i ++) {
               if(i==0)

               {
                   console.log(res[0].bid);
                   this.market5.addPoint(res[0].bid  );
               }



               if(i==1){
                   console.log(res[0].ask);
                   this.market5.addPoint(res[0].ask);
               }

           }});


       this.authService.setAskBid(this.a).subscribe(res=>{
           this.m6=res[0].mname;
           console.log(res[0].bid);
           this.market6.removeSerie(0);
           this.market6.addSerie({
               data:[]
           });

           for( var i = 0 ; i < 2 ; i ++) {
               if(i==0)

               {
                   console.log(res[0].bid);
                   this.market6.addPoint(res[0].bid  );
               }



               if(i==1){
                   console.log(res[0].ask);
                   this.market6.addPoint(res[0].ask);
               }

           }});
       this.authService.setAskBid(this.b).subscribe(res=>{
           this.m7=res[0].mname;
           console.log(res[0].bid);
           this.market7.removeSerie(0);
           this.market7.addSerie({
               data:[]
           });
           for( var i = 0 ; i < 2 ; i ++) {
               if(i==0)

               {
                   console.log(res[0].bid);
                   this.market7.addPoint(res[0].bid  );
               }



               if(i==1){
                   console.log(res[0].ask);
                   this.market7.addPoint(res[0].ask);
               }

           }});this.authService.setAskBid(this.c).subscribe(res=>{
           this.m8=res[0].mname;
           console.log(res[0].bid);
           this.market8.removeSerie(0);
           this.market8.addSerie({
               data:[]
           });
           for( var i = 0 ; i < 2 ; i ++) {
               if(i==0)

               {
                   console.log(res[0].bid);
                   this.market8.addPoint(res[0].bid  );
               }



               if(i==1){
                   console.log(res[0].ask);
                   this.market8.addPoint(res[0].ask);
               }

           }});this.authService.setAskBid(this.d).subscribe(res=>{
           this.m9=res[0].mname;
           console.log(res[0].bid);
           this.market9.removeSerie(0);
           this.market9.addSerie({
               data:[]
           });
           for( var i = 0 ; i < 2 ; i ++) {
               if(i==0)

               {
                   console.log(res[0].bid);
                   this.market9.addPoint(res[0].bid  );
               }



               if(i==1){
                   console.log(res[0].ask);
                   this.market9.addPoint(res[0].ask);
               }

           }});
   }





//go to market button


    goto1(data){
        const a={

            cname:data
        };
        console.log(data)
        clearInterval(this.s);
        this.authService.storemarket(a);
        this.router.navigate(['/market']);



    }




//add watchlist button

    af1(){
    const a={
        id:this.user._id,
        cname:this.a
    };
    this.authService.updatewatchlist(a).subscribe(res=>{
        if(res){

        }
    });
}
    af2(){
        const a={
            id:this.user._id,
            cname:this.b
        };
        this.authService.updatewatchlist(a).subscribe(res=>{
            if(res){

            }
        });
    }
    af3(){
        const a={
            id:this.user._id,
            cname:this.c
        };
        this.authService.updatewatchlist(a).subscribe(res=>{
            if(res){

            }
        });
    }
    af4(){
        const a={
            id:this.user._id,
            cname:this.d
        };
        this.authService.updatewatchlist(a).subscribe(res=>{
            if(res){

            }
        });
    }
    af5(){
        const a={
            id:this.user._id,
            cname:this.e
        };
        this.authService.updatewatchlist(a).subscribe(res=>{
            if(res){

            }
        });
    }
    af6(){
        const a={
            id:this.user._id,
            cname:this.a
        };
        this.authService.updatewatchlist(a).subscribe(res=>{
            if(res){

            }
        });
    }
    af7(){
        const a={
            id:this.user._id,
            cname:this.b
        };
        this.authService.updatewatchlist(a).subscribe(res=>{
            if(res){

            }
        });
    }
    af8(){
        const a={
            id:this.user._id,
            cname:this.c
        };
        this.authService.updatewatchlist(a).subscribe(res=>{
            if(res){

            }
        });
    }
    af9(){
        const a={
            id:this.user._id,
            cname:this.d
        };
        this.authService.updatewatchlist(a).subscribe(res=>{
            if(res){

            }
        });
    }









//create chart

    market1= new Chart({
        chart: {
            type: 'bar',
            zoomType: 'y'
        },
        title: {
            text: '  '
        },
        subtitle: {
            // text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
            categories: ['Bid', 'Ask'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Bit coin valu(฿)',
                align: 'middle'
            },
            visible:false,
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix:"฿"
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            },

                series: {
                    allowPointSelect: true,

                }

        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom',
            x: 40,
            y: 80,
            floating: true,
            borderWidth: 1,
            //backgroundColor: '#ABFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{

            data: []
        }]
    });
    market2= new Chart({
        chart: {
            type: 'bar',
            zoomType:'y'
        },
        title: {
            text: '  '
        },
        subtitle: {
            // text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
            categories: ['Bid', 'Ask'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0.0000014,
            title: {
                text: 'Bit coin valu(฿)',
                align: 'middle'
            },
            visible:false,
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: "฿"
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }},
                series: {
                    allowPointSelect: true,


            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom',
            x: 40,
            y: 80,
            floating: true,
            borderWidth: 1,
            //backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{

            data: []
        }]

    });


    market3= new Chart({
        chart: {
            type: 'bar',
            zoomType:'y'
        },
        title: {
            text: '  '
        },
        subtitle: {
           // text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
            categories: ['Bid', 'Ask'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0.0000005,
            title: {
                text: 'Bit coin valu(฿)',
                align: 'middle'
            },
            visible:false,
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: "฿"
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }},
                series: {
                    allowPointSelect: true,


            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom',
            x: 40,
            y: 80,
            floating: true,
            borderWidth: 1,
            //backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{

            data: []
        }]

});

    market4= new Chart({
        chart: {
            type: 'bar',
            zoomType:'y'
        },
        title: {
            text: '  '
        },
        subtitle: {
            // text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
            categories: ['Bid', 'Ask'],
            title: {
                text: null
            }
        },
        yAxis: {
            visible:false,
            min: 0.0000006,
            title: {
                text: 'Bit coin valu(฿)',
                align: 'middle'
            },

            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix:"฿"
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }},
                series: {
                    allowPointSelect: true,


            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom',
            x: 40,
            y: 80,
            floating: true,
            borderWidth: 1,
            //backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{

            data: []
        }]
    });


    market5= new Chart({
        chart: {
            type: 'bar',
            zoomType:'y'
        },
        title: {
            text: '  '
        },
        subtitle: {
            // text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
            categories: ['Bid', 'Ask'],
            title: {
                text: null
            }
        },
        yAxis: {
            visible:false,
            min: 0.0000018,
            title: {
                text: 'Bit coin valu(฿)',
                align: 'middle'
            },

            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix:"฿"
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }},
                series: {
                    allowPointSelect: true,


            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom',
            x: 40,
            y: 80,
            floating: true,
            borderWidth: 1,
            //backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{

            data: []
        }]
    });



    market6= new Chart({
        chart: {
            type: 'bar',
            zoomType:'y'
        },
        title: {
            text: '  '
        },
        subtitle: {
            // text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
            categories: ['Bid', 'Ask'],
            title: {
                text: null
            }
        },
        yAxis: {
            visible:false,
            min: 0.0000014,
            title: {
                text: 'Bit coin valu(฿)',
                align: 'middle'
            },

            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix:"฿"
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }},
                series: {
                    allowPointSelect: true,


            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom',
            x: 40,
            y: 80,
            floating: true,
            borderWidth: 1,
            //backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{

            data: []
        }]
    });



    market7= new Chart({
        chart: {
            type: 'bar',
            zoomType:'y'
        },
        title: {
            text: '  '
        },
        subtitle: {
            // text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
            categories: ['Bid', 'Ask'],
            title: {
                text: null
            }
        },
        yAxis: {
            visible:false,
            min: 0,
            title: {
                text: 'Bit coin valu(฿)',
                align: 'middle'
            },

            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix:"฿"
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }},
                series: {
                    allowPointSelect: true,


            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom',
            x: 40,
            y: 80,
            floating: true,
            borderWidth: 1,
            //backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{

            data: []
        }]
    });



    market8= new Chart({
        chart: {
            type: 'bar',
            zoomType:'y'
        },
        title: {
            text: '  '
        },
        subtitle: {
            // text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
            categories: ['Bid', 'Ask'],
            title: {
                text: null
            }
        },
        yAxis: {
            visible:false,
            min: 0,
            title: {
                text: 'Bit coin valu(฿)',
                align: 'middle'
            },

            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix:"฿"
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }},
                series: {
                    allowPointSelect: true,

                }

        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom',
            x: 40,
            y: 80,
            floating: true,
            borderWidth: 1,
            //backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{

            data: []
        }]
    });


    market9= new Chart({
        chart: {
            type: 'bar',
            zoomType:'y'
        },
        title: {
            text: '  '
        },
        subtitle: {
            // text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
            categories: ['bid', 'ask'],
            title: {
                text: null
            }
        },
        yAxis: {
            visible:false,
            min: 0,
            title: {
                text: 'Bit coin valu(฿)',
                align: 'middle'
            },

            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix:"฿"
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }},
                series: {
                    allowPointSelect: true,

                }

        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom',
            x: 40,
            y: 80,
            floating: true,
            borderWidth: 1,
            //backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{


            data: []
        }]
    });


    ngOnDestroy(){
       console.log("aadsdsadsadasdsadsa");
        clearInterval(this.s);
    }



}
