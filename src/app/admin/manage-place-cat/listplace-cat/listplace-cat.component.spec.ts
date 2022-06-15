import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListplaceCatComponent } from './listplace-cat.component';

describe('ListplaceCatComponent', () => {
  let component: ListplaceCatComponent;
  let fixture: ComponentFixture<ListplaceCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListplaceCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListplaceCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
