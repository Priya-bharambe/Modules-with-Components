import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullstackdeveloperComponent } from './fullstackdeveloper.component';

describe('FullstackdeveloperComponent', () => {
  let component: FullstackdeveloperComponent;
  let fixture: ComponentFixture<FullstackdeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullstackdeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullstackdeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
