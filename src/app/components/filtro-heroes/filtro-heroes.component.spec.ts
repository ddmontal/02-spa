import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroHeroesComponent } from './filtro-heroes.component';

describe('FiltroHeroesComponent', () => {
  let component: FiltroHeroesComponent;
  let fixture: ComponentFixture<FiltroHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
