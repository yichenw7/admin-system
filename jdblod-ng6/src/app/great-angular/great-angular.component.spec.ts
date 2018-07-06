import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatAngularComponent } from './great-angular.component';

describe('GreatAngularComponent', () => {
  let component: GreatAngularComponent;
  let fixture: ComponentFixture<GreatAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreatAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
