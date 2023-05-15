import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VfClientService } from 'src/app/services/vf-client.service';

@Component({
  selector: 'app-vf-client-view',
  templateUrl: './vf-client-view.component.html',
  styleUrls: ['./vf-client-view.component.scss'],
})
export class VfClientViewComponent {
  vfClientForm!: FormGroup;
  id!: number;

  constructor(
    private vfFormBuilder: FormBuilder,
    private vfClientService: VfClientService,
    private vfActivatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.vfReactiveForm();
  }

  vfReactiveForm(): void {
    this.vfClientForm = this.vfFormBuilder.group({
      id: [''],
      vfName: ['', [Validators.required]],
      vfAddress: ['', [Validators.required]],
      vfPhone: ['', [Validators.required]],
      vfEmail: ['', [Validators.required]],
      vfYearOfBirth: ['', [Validators.required]],
      vfDni: ['', [Validators.required]],
    });
    this.id = this.vfActivatedRouter.snapshot.params['id'];

    this.vfClientService.vfGetClient(this.id).subscribe({
      next: (data: any) => {
        this.vfClientForm.get('id')?.setValue(data.id);
        this.vfClientForm.get('vfName')?.setValue(data.vfName);
        this.vfClientForm.get('vfAddress')?.setValue(data.vfAddress);
        this.vfClientForm.get('vfPhone')?.setValue(data.vfPhone);
        this.vfClientForm.get('vfEmail')?.setValue(data.vfEmail);
        this.vfClientForm.get('vfYearOfBirth')?.setValue(data.vfYearOfBirth);
        this.vfClientForm.get('vfDni')?.setValue(data.vfDni);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
