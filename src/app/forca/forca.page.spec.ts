import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcaPage } from './forca.page';

describe('ForcaPage', () => {
  let component: ForcaPage;
  let fixture: ComponentFixture<ForcaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForcaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
