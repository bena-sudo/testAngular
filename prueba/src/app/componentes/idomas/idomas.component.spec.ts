import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdomasComponent } from './idomas.component';

describe('IdomasComponent', () => {
  let component: IdomasComponent;
  let fixture: ComponentFixture<IdomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdomasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
