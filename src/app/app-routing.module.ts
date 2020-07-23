import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { NextpageComponent } from './nextpage/nextpage.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'create',
		component: CreateFormComponent
	},
	{
		path: 'submitted',
		component: NextpageComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
