import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationdemoComponent } from './animationdemo.component';

describe('AnimationdemoComponent', () => {
  let component: AnimationdemoComponent;
  let fixture: ComponentFixture<AnimationdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
