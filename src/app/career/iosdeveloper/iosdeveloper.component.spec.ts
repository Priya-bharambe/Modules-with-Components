import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IosdeveloperComponent } from './iosdeveloper.component';

describe('IosdeveloperComponent', () => {
  let component: IosdeveloperComponent;
  let fixture: ComponentFixture<IosdeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IosdeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IosdeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
