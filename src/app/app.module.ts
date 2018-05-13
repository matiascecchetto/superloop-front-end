import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { TodosComponent } from './components/todos/todos.component';
import { StatusPipe } from './pipes/status.pipe';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoNewComponent } from './components/todo-new/todo-new.component';
import { AppRoutingModule } from './routing/app-routing.module';

import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    StatusPipe,
    TodoDetailComponent,
    TodoNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
// enableProdMode();
export class AppModule { }
