import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthotsAndBooksComponent } from './authots-and-books.component';

describe('AuthotsAndBooksComponent', () => {
  let component: AuthotsAndBooksComponent;
  let fixture: ComponentFixture<AuthotsAndBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthotsAndBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthotsAndBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
