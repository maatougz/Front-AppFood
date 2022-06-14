import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdbrandComponent } from './updbrand.component';

describe('UpdbrandComponent', () => {
  let component: UpdbrandComponent;
  let fixture: ComponentFixture<UpdbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdbrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
