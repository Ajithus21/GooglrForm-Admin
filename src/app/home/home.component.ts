import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	myData;
	myDate;
	constructor(private dataservice: DataService) {}

	ngOnInit(): void {
		this.dataservice.getForm().subscribe((data) => {
			this.myDate = Date.now();
			this.myData = data;
			console.log(this.myData);
		});
	}

	// }
}
