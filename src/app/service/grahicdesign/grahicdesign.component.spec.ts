import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrahicdesignComponent } from './grahicdesign.component';

describe('GrahicdesignComponent', () => {
  let component: GrahicdesignComponent;
  let fixture: ComponentFixture<GrahicdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrahicdesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrahicdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
