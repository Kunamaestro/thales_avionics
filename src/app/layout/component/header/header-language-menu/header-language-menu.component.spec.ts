import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLanguageMenuComponent } from './header-language-menu.component';

describe('HeaderLanguageMenuComponent', () => {
  let component: HeaderLanguageMenuComponent;
  let fixture: ComponentFixture<HeaderLanguageMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLanguageMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLanguageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
