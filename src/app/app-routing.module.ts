import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { LoginComponent } from './login/login.component';

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
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
