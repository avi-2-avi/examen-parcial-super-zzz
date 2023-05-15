import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfToolbarComponent } from './vf-toolbar.component';

describe('VfToolbarComponent', () => {
  let component: VfToolbarComponent;
  let fixture: ComponentFixture<VfToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VfToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
