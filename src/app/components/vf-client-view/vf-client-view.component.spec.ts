import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfClientViewComponent } from './vf-client-view.component';

describe('VfClientViewComponent', () => {
  let component: VfClientViewComponent;
  let fixture: ComponentFixture<VfClientViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VfClientViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfClientViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
