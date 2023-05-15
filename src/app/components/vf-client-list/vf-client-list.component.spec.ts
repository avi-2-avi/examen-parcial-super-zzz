import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfClientListComponent } from './vf-client-list.component';

describe('VfClientListComponent', () => {
  let component: VfClientListComponent;
  let fixture: ComponentFixture<VfClientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VfClientListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
