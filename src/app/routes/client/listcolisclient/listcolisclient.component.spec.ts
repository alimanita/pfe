import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListcolisclientComponent } from './listcolisclient.component';

describe('ClientListcolisclientComponent', () => {
  let component: ClientListcolisclientComponent;
  let fixture: ComponentFixture<ClientListcolisclientComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientListcolisclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListcolisclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
