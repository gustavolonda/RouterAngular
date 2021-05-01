import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ListTaskComponent } from './task/list-task/list-task.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { RouterModule,Routes } from '@angular/router';
const appRoutes: Routes=[
  {path:'list', component:ListTaskComponent},
  {path:'create', component:CreateTaskComponent},
  {path:'', redirectTo:'/list', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListTaskComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
