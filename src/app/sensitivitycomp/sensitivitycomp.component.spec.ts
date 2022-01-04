import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensitivitycompComponent } from './sensitivitycomp.component';

describe('SensitivitycompComponent', () => {
  let component: SensitivitycompComponent;
  let fixture: ComponentFixture<SensitivitycompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensitivitycompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensitivitycompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
