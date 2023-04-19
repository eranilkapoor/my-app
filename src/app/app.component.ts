import { Component } from '@angular/core';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService: DataService){}

  public newData: any = [];

  chartOptions = {
    responsive: true,
  };
  chartData = [
    { data: [330, 600, 260, 700], label: 'Votes' }
  ];
  chartLabels = ['January', 'February', 'Mars', 'April'];

  ngOnInit(){
  	this.showData();
  }

  showData() {
  	this.dataService.getNewsData()
    .subscribe((data) => {
    	this.newData = data;
    	console.log(this.newData);
    });
  }
}
