import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveRegisterComponent } from './move-register.component';

describe('MoveRegisterComponent', () => {
  let component: MoveRegisterComponent;
  let fixture: ComponentFixture<MoveRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
