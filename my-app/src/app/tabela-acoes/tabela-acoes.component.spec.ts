import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAcoesComponent } from './tabela-acoes.component';

describe('TabelaAcoesComponent', () => {
  let component: TabelaAcoesComponent;
  let fixture: ComponentFixture<TabelaAcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaAcoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
