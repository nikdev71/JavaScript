import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHWComponent } from './form-hw.component';

describe('FormHWComponent', () => {
  let component: FormHWComponent;
  let fixture: ComponentFixture<FormHWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormHWComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormHWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
