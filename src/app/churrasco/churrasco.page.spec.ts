import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChurrascoPage } from './churrasco.page';

describe('ChurrascoPage', () => {
  let component: ChurrascoPage;
  let fixture: ComponentFixture<ChurrascoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChurrascoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
