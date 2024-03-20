import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeWorldComponent } from './see-world.component';

describe('SeeWorldComponent', () => {
  let component: SeeWorldComponent;
  let fixture: ComponentFixture<SeeWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeeWorldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeeWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
