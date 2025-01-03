import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThalesComponent } from './thales.component';

describe('ThalesComponent', () => {
  let component: ThalesComponent;
  let fixture: ComponentFixture<ThalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
