import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareengineerComponent } from './softwareengineer.component';

describe('SoftwareengineerComponent', () => {
  let component: SoftwareengineerComponent;
  let fixture: ComponentFixture<SoftwareengineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareengineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareengineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
