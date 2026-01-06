import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdriverComponent } from './mdriver-component';

describe('MdriverComponent', () => {
  let component: MdriverComponent;
  let fixture: ComponentFixture<MdriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdriverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
