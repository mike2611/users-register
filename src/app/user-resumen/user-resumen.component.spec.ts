import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResumenComponent } from './user-resumen.component';

describe('UserResumenComponent', () => {
  let component: UserResumenComponent;
  let fixture: ComponentFixture<UserResumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserResumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
