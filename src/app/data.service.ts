import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	constructor(private httpclient: HttpClient) {}
	postData(data): Observable<any> {
		return this.httpclient.post('https://googleform-aj.herokuapp.com/', data);
	}

	getData(): Observable<any> {
		return this.httpclient.get('https://googleform-aj.herokuapp.com/forms');
	}
	adminLogin(data): Observable<any> {
		return this.httpclient.post('https://googleform-aj.herokuapp.com/login', data);
	}

	postForm(data): Observable<any> {
		return this.httpclient.post('https://googleform-aj.herokuapp.com/adminForm', data);
	}
	getForm(): Observable<any> {
		return this.httpclient.get('https://googleform-aj.herokuapp.com/adminForms');
	}
}
