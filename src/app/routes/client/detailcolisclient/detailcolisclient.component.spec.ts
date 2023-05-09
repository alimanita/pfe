import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailcolisclientComponent } from './detailcolisclient.component';

describe('ClientDetailcolisclientComponent', () => {
  let component: ClientDetailcolisclientComponent;
  let fixture: ComponentFixture<ClientDetailcolisclientComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetailcolisclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailcolisclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
