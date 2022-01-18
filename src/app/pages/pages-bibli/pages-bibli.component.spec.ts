import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBibliComponent } from './pages-bibli.component';

describe('PagesBibliComponent', () => {
  let component: PagesBibliComponent;
  let fixture: ComponentFixture<PagesBibliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesBibliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesBibliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
