import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddishCatComponent } from './adddish-cat.component';

describe('AdddishCatComponent', () => {
  let component: AdddishCatComponent;
  let fixture: ComponentFixture<AdddishCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddishCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddishCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
