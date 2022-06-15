import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDishCatComponent } from './manage-dish-cat.component';

describe('ManageDishCatComponent', () => {
  let component: ManageDishCatComponent;
  let fixture: ComponentFixture<ManageDishCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDishCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDishCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
