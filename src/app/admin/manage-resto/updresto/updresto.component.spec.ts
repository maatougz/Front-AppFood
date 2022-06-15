import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdrestoComponent } from './updresto.component';

describe('UpdrestoComponent', () => {
  let component: UpdrestoComponent;
  let fixture: ComponentFixture<UpdrestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdrestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdrestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
