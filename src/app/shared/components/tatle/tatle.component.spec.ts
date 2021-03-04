import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatleComponent } from './tatle.component';

describe('TatleComponent', () => {
  let component: TatleComponent;
  let fixture: ComponentFixture<TatleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TatleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TatleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
