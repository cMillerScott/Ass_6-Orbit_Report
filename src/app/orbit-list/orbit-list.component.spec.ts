import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrbitListComponent } from './orbit-list.component';

describe('OrbitListComponent', () => {
  let component: OrbitListComponent;
  let fixture: ComponentFixture<OrbitListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
