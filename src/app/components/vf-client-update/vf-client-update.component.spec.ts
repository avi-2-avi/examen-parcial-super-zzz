import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfClientUpdateComponent } from './vf-client-update.component';

describe('VfClientUpdateComponent', () => {
  let component: VfClientUpdateComponent;
  let fixture: ComponentFixture<VfClientUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VfClientUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfClientUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
