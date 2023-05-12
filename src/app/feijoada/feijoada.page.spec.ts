import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeijoadaPage } from './feijoada.page';

describe('FeijoadaPage', () => {
  let component: FeijoadaPage;
  let fixture: ComponentFixture<FeijoadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeijoadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
