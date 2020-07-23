import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	myData;
	constructor(private dataservice: DataService) {
		// this.dataservice.getData().subscribe((data) => {
		// 	this.myData = data;
		// 	console.log(this.myData);
		// });
	}

	ngOnInit(): void {
		this.dataservice.getData().subscribe((data) => {
			this.myData = data;
			console.log(this.myData);
		});
	}

	// ngOnChanges(changes: SimpleChanges) : void {
	// 	// changes.prop contains the old and the new value...
	// 	this.dataservice.getData().subscribe((data) => {
	// 		this.myData = data;
	// 		console.log(this.myData);
	// 	});
	// }
}
