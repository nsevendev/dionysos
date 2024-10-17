import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCard2Component } from './service-card2.component';

describe('ServiceCard2Component', () => {
  let component: ServiceCard2Component;
  let fixture: ComponentFixture<ServiceCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
