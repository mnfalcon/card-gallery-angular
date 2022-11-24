import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCardFormComponent } from './crud-card-form.component';

describe('CrudCardFormComponent', () => {
  let component: CrudCardFormComponent;
  let fixture: ComponentFixture<CrudCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
