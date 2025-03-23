import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostrapComponent } from './boostrap.component';

describe('BoostrapComponent', () => {
  let component: BoostrapComponent;
  let fixture: ComponentFixture<BoostrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoostrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoostrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
