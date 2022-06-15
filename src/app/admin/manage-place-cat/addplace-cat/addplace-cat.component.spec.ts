import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplaceCatComponent } from './addplace-cat.component';

describe('AddplaceCatComponent', () => {
  let component: AddplaceCatComponent;
  let fixture: ComponentFixture<AddplaceCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddplaceCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplaceCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
