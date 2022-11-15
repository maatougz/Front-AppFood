import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresultrestoComponent } from './adresultresto.component';

describe('AdresultrestoComponent', () => {
  let component: AdresultrestoComponent;
  let fixture: ComponentFixture<AdresultrestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdresultrestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresultrestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
