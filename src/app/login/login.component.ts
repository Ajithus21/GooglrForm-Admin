import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	adminForm;
	constructor(private dataservice: DataService, private router: Router) {
		this.adminForm = new FormGroup({
			username: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required)
		});
	}

	ngOnInit(): void {}

	sendData() {
		if (this.adminForm.valid) {
			this.dataservice.adminLogin(this.adminForm.value).subscribe((data) => {
				if (data.message != 'login failed-1' && data.message != 'login failed ') {
					//sessionStorage.setItem('email', this.adminForm.value.email);
					this.router.navigate([ '/home' ]);
				} else {
					alert('Email or Password is Incorrect');
				}
			});
		} else {
			alert('Enter your Credentials');
		}
	}
}
