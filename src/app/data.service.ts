import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	constructor(private httpclient: HttpClient) {}
	postData(data): Observable<any> {
		return this.httpclient.post('http://localhost:3000/', data);
	}

	getData(): Observable<any> {
		return this.httpclient.get('http://localhost:3000/forms');
	}
	adminLogin(data): Observable<any> {
		return this.httpclient.post('http://localhost:3000/login', data);
	}

	postForm(data): Observable<any> {
		return this.httpclient.post('http://localhost:3000/adminForm', data);
	}
	getForm(): Observable<any> {
		return this.httpclient.get('http://localhost:3000/adminForms');
	}
}
