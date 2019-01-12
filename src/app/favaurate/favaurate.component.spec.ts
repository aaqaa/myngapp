import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavaurateComponent } from './favaurate.component';

describe('FavaurateComponent', () => {
  let component: FavaurateComponent;
  let fixture: ComponentFixture<FavaurateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavaurateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavaurateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
