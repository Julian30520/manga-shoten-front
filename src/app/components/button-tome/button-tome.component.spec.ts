import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTomeComponent } from './button-tome.component';

describe('ButtonTomeComponent', () => {
  let component: ButtonTomeComponent;
  let fixture: ComponentFixture<ButtonTomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonTomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
