import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAddUpdateComponent } from './cliente-add-update.component';

describe('ClienteAddUpdateComponent', () => {
  let component: ClienteAddUpdateComponent;
  let fixture: ComponentFixture<ClienteAddUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteAddUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
