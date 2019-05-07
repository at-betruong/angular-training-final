import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavotiteComponent } from './favotite.component';

describe('FavotiteComponent', () => {
  let component: FavotiteComponent;
  let fixture: ComponentFixture<FavotiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavotiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavotiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
