import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-create-form',
	templateUrl: './create-form.component.html',
	styleUrls: [ './create-form.component.css' ]
})
export class CreateFormComponent implements OnInit {
	userForm;
	constructor(private dataservice: DataService, private router: Router) {
		this.userForm = new FormGroup({
			username: new FormControl('', Validators.required),
			email: new FormControl('', Validators.required),
			phone: new FormControl('', Validators.required),
			age: new FormControl('', Validators.required)
		});
	}

	ngOnInit(): void {}

	sendData() {
		if (this.userForm.valid) {
			this.dataservice.postData(this.userForm.value).subscribe(() => {});

			this.router.navigate([ '/submitted' ]);
		}
	}
}
