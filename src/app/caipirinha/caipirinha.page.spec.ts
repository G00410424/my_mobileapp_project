import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaipirinhaPage } from './caipirinha.page';

describe('CaipirinhaPage', () => {
  let component: CaipirinhaPage;
  let fixture: ComponentFixture<CaipirinhaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaipirinhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
