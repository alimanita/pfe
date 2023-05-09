import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreurListcolislivreurComponent } from './listcolislivreur.component';

describe('LivreurListcolislivreurComponent', () => {
  let component: LivreurListcolislivreurComponent;
  let fixture: ComponentFixture<LivreurListcolislivreurComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreurListcolislivreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreurListcolislivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
