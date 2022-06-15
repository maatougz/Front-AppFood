import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRestoComponent } from './manage-resto.component';

describe('ManageRestoComponent', () => {
  let component: ManageRestoComponent;
  let fixture: ComponentFixture<ManageRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
