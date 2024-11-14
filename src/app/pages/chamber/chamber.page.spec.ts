import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChamberPage } from './chamber.page';

describe('ChamberPage', () => {
  let component: ChamberPage;
  let fixture: ComponentFixture<ChamberPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
