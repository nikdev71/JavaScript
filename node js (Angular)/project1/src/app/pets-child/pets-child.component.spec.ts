import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsChildComponent } from './pets-child.component';

describe('PetsChildComponent', () => {
  let component: PetsChildComponent;
  let fixture: ComponentFixture<PetsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetsChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
