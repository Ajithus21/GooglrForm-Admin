import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: [ './form.component.css' ]
})
export class FormComponent implements OnInit {
	adminForm;

	constructor(private dataservice: DataService, private router: Router) {
		this.adminForm = new FormGroup({
			formname: new FormControl('', Validators.required),
			urlLink: new FormControl('', Validators.required),
			discription: new FormControl('', Validators.required)
		});
	}

	ngOnInit(): void {}

	sendForm() {
		//console.log(this.adminForm.valid);
		if (this.adminForm.valid) {
			this.dataservice.postForm(this.adminForm.value).subscribe(() => {
				//console.log(data.message);
				this.router.navigate([ '/home' ]);
			});
		}
	}
}
