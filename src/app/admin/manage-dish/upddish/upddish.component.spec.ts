import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpddishComponent } from './upddish.component';

describe('UpddishComponent', () => {
  let component: UpddishComponent;
  let fixture: ComponentFixture<UpddishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpddishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpddishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
