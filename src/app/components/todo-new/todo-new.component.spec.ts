import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DatePipe } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { TodoNewComponent } from './todo-new.component';

describe('TodoNewComponent', () => {
  let component: TodoNewComponent;
  let fixture: ComponentFixture<TodoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoNewComponent ],
      imports: [ FormsModule, RouterTestingModule, HttpClientModule ],
      providers: [ DatePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
