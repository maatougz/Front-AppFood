import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlaceCatComponent } from './manage-place-cat.component';

describe('ManagePlaceCatComponent', () => {
  let component: ManagePlaceCatComponent;
  let fixture: ComponentFixture<ManagePlaceCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePlaceCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePlaceCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
