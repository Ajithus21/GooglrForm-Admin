import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'app-submitted-form',
	templateUrl: './submitted-form.component.html',
	styleUrls: [ './submitted-form.component.css' ]
})
export class SubmittedFormComponent implements OnInit {
	formData;
	constructor(private dataservice: DataService) {
		// this.dataservice.getData().subscribe((data) => {
		// 	this.myData = data;
		// 	console.log(this.myData);
		// });
	}

	ngOnInit(): void {
		this.dataservice.getData().subscribe((data) => {
			this.formData = data;
			console.log(this.formData);
		});
	}
}
