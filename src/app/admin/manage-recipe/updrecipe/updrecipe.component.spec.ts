import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdrecipeComponent } from './updrecipe.component';

describe('UpdrecipeComponent', () => {
  let component: UpdrecipeComponent;
  let fixture: ComponentFixture<UpdrecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdrecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
