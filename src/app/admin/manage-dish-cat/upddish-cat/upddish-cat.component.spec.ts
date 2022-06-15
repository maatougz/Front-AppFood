import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpddishCatComponent } from './upddish-cat.component';

describe('UpddishCatComponent', () => {
  let component: UpddishCatComponent;
  let fixture: ComponentFixture<UpddishCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpddishCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpddishCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
