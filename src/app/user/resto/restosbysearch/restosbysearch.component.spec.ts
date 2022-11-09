import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestosbysearchComponent } from './restosbysearch.component';

describe('RestosbysearchComponent', () => {
  let component: RestosbysearchComponent;
  let fixture: ComponentFixture<RestosbysearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestosbysearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestosbysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
