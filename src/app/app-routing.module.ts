import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { SubmittedFormComponent } from './submitted-form/submitted-form.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'create',
		component: CreateFormComponent
	},
	{
		path: 'submitted',
		component: NextpageComponent
	},
	{
		path: '',
		component: LoginComponent
	},
	{
		path: 'form',
		component: FormComponent
	},
	{
		path: 'submittedform',
		component: SubmittedFormComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
