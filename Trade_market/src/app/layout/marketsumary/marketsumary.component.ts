import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { Chart } from 'angular-highcharts';
import {AuthService} from'../../service/auth.service';
@Component({
  selector: 'app-marketsumary',
  templateUrl: './marketsumary.component.html',
  styleUrls: ['./marketsumary.component.scss']
})
export class MarketsumaryComponent implements OnInit {
getmarkets:any;
s:any;
o:any;
q:any;
name:String;
  constructor(private authService:AuthService,public router: Router) { }

  ngOnInit() {


this.new();
      //real time update front end
    this.s=  setInterval(this.new.bind(this), 10000),




          this.name="Spread";
//add to data in table


 var n=new Array();

      n[0]={
          cname:'BTC-ETH'
      };n[1]={
          cname:'BTC-LTC'
      };n[2]={
          cname:'BTC-GBYTE'
      };n[3]={
          cname:'BTC-DASH'
      };n[4]={
          cname:'BTC-BCC'
      };

      for(var j=0;j<5;j++){
          this.o=n[j];
          this.authService.getspead(this.o).subscribe(res=>{

              this.chart2.addPoint(res[0].spred),
                  console.log(res[0].spred)
          } );
      }





  }




  spread(){


      this.name="Spread";
      this.chart2.removeSerie(0);
      this.chart2.addSerie({
          data:[]
      })

      var n=new Array();

      n[0]={
          cname:'BTC-ETH'
      };n[1]={
          cname:'BTC-LTC'
      };n[2]={
          cname:'BTC-GBYTE'
      };n[3]={
          cname:'BTC-DASH'
      };n[4]={
          cname:'BTC-BCC'
      };

      for(var j=0;j<5;j++){
          this.o=n[j];
          this.authService.getspead(this.o).subscribe(res=>{

              this.chart2.addPoint(res[0].spred),
                  console.log(res[0].spred)
          } );
      }
  }


    Ask(){
        this.name="Ask";
      this.chart2.removeSerie(0);
        this.chart2.addSerie({
            data:[]
        })

        var n=new Array();

        n[0]={
            cname:'BTC-ETH'
        };n[1]={
            cname:'BTC-LTC'
        };n[2]={
            cname:'BTC-GBYTE'
        };n[3]={
            cname:'BTC-DASH'
        };n[4]={
            cname:'BTC-BCC'
        };

        for(var j=0;j<5;j++){
            this.o=n[j];
            this.authService.setAskBid(this.o).subscribe(res=>{

                this.chart2.addPoint(res[0].ask),
                    console.log(res[0].ask)
            } );
        }

    }

    bid1(){
        this.name="Bid";
        this.chart2.removeSerie(0);
        this.chart2.addSerie({
            data:[]
        })

        var n=new Array();

        n[0]={
            cname:'BTC-ETH'
        };n[1]={
            cname:'BTC-LTC'
        };n[2]={
            cname:'BTC-GBYTE'
        };n[3]={
            cname:'BTC-DASH'
        };n[4]={
            cname:'BTC-BCC'
        };

        for(var j=0;j<5;j++){
            this.o=n[j];
            this.authService.setAskBid(this.o).subscribe(res=>{

                this.chart2.addPoint(res[0].bid),
                    console.log(res[0].bid)
            } );
        }
}

    mvalue(){
        this.name="Market Value";
        this.chart2.removeSerie(0);
        this.chart2.addSerie({
            data:[]
        })

        var n=new Array();

        n[0]={
            cname:'BTC-ETH'
        };n[1]={
            cname:'BTC-LTC'
        };n[2]={
            cname:'BTC-GBYTE'
        };n[3]={
            cname:'BTC-DASH'
        };n[4]={
            cname:'BTC-BCC'
        };

        for(var j=0;j<5;j++){
            this.o=n[j];
            this.authService.setAskBid(this.o).subscribe(res=>{

                this.chart2.addPoint(res[0].high),
                    console.log(res[0].high)
            } );
        }
    }

//create table
    source: LocalDataSource;
    settings = {


        editable:false,
        hideSubHeader:true,


        actions:{add:false,
            edit:false,
            delete:false},
        columns: {

            mname:{
                title: 'month'
            },
            bid:{
                title: 'opening'
            },
            ask: {
                title: 'high'
            },
            low: {
                title: 'law'
            },
            high: {
                title: 'close'
            }
        }
    };







//create chart


new(){ const a={
    cname:'BTC-ETH'
};
    const b={
        cname:'BTC-LTC'
    };
    const c={
        cname:'BTC-GBYTE'
    };
    const d={
        cname:'BTC-DASH'
    };
    const e={
        cname:'BTC-BCC'
    };


    this.authService. getspead(a).subscribe(res=>{

        if(res){

            console.log(res);
            this.chart1.addPoint([Date.parse(res[0].date),res[0].spred],0);

        }
    })
    this.authService. getspead(b).subscribe(res=>{

        if(res){

            console.log(res);
            this.chart1.addPoint([Date.parse(res[0].date),res[0].spred],1);

        }
    })
    this.authService. getspead(c).subscribe(res=>{

        if(res){

            console.log(res);
            this.chart1.addPoint([Date.parse(res[0].date),res[0].spred],2);

        }
    })
    this.authService. getspead(d).subscribe(res=>{

        if(res){

            console.log(res);
            this.chart1.addPoint([Date.parse(res[0].date),res[0].spred],3);

        }
    })
    this.authService. getspead(e).subscribe(res=>{

        if(res){

            console.log(res);
            this.chart1.addPoint([Date.parse(res[0].date),res[0].spred],4);

        }
    })




    //draw table

    var y=new Array();
    var x=new Array();

    y[0]={
        cname:'BTC-ETH'
    };y[1]={
        cname:'BTC-LTC'
    };y[2]={
        cname:'BTC-GBYTE'
    };y[3]={
        cname:'BTC-DASH'
    };y[4]={
        cname:'BTC-BCC'
    };

    var i=0;
    for(i=0;i<5;i++){
        this.o=y[i];
        console.log(this.o);
        this.authService.setAskBid(this.o).subscribe(res=>{
            console.log(res[0]);

            x.push(res[0]);
            //console.log(i);

        } );

    }
    console.log(x);
    this.getmarkets=x;


}


//go to market button

    link(data){

        const c={
            "cname":data
        }
        this.authService.storemarket(c);
        this.router.navigate(['/market']);

    }


    chart1= new Chart({

        chart: {
            type: 'line',
            zoomType: 'x',

        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'datetime'
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'BTC-ETH',
            data: []
        }, {
            name: 'BTC-LTC',
            data: []
        }, {
            name: 'BTC-GBYTE',
            data: []
        }, {
            name: 'BTC-DASH',
            data: []
        }, {
            name: 'BTC-BCC',
            data: []
        }],
    });



    chart2= new Chart({
        chart: {
            type: 'column',
            zoomType: 'x'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['BTC-ETH',
                'BTC-LTC',
                'BTC-GBYTE',
                'BTC-DASH',
                'BTC-BCC'
            ]
        },
        credits: {
            enabled: false
        },
        series:[{

            data:[]
        }]

    });
    ngOnDestroy(){
        console.log("aadsdsadsadasdsadsa");
        clearInterval(this.s);
    }
}





