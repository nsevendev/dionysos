import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCard1Component } from './service-card1.component';

describe('ServiceCard1Component', () => {
  let component: ServiceCard1Component;
  let fixture: ComponentFixture<ServiceCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCard1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
