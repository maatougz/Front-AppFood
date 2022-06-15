import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdishCatComponent } from './listdish-cat.component';

describe('ListdishCatComponent', () => {
  let component: ListdishCatComponent;
  let fixture: ComponentFixture<ListdishCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdishCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdishCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
