import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoProdottoComponent } from './elenco-prodotto.component';

describe('ElencoProdottoComponent', () => {
  let component: ElencoProdottoComponent;
  let fixture: ComponentFixture<ElencoProdottoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoProdottoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
