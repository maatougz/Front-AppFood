import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdplaceCatComponent } from './updplace-cat.component';

describe('UpdplaceCatComponent', () => {
  let component: UpdplaceCatComponent;
  let fixture: ComponentFixture<UpdplaceCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdplaceCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdplaceCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
