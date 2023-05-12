import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PastelPage } from './pastel.page';

describe('PastelPage', () => {
  let component: PastelPage;
  let fixture: ComponentFixture<PastelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PastelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
