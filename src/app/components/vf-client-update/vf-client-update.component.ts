import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VfClient } from 'src/app/models/vf-client';
import { VfClientService } from 'src/app/services/vf-client.service';

@Component({
  selector: 'app-vf-client-update',
  templateUrl: './vf-client-update.component.html',
  styleUrls: ['./vf-client-update.component.scss'],
})
export class VfClientUpdateComponent {
  vfClientForm!: FormGroup;
  id!: number;

  constructor(
    private vfFormBuilder: FormBuilder,
    private vfClientService: VfClientService,
    private vfRouter: Router,
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

  editClient(): void {
    const vfClient: VfClient = {
      id: parseInt(this.vfClientForm.get('id')!.value),
      vfName: this.vfClientForm.get('vfName')!.value,
      vfAddress: this.vfClientForm.get('vfAddress')!.value,
      vfPhone: this.vfClientForm.get('vfPhone')!.value,
      vfEmail: this.vfClientForm.get('vfEmail')!.value,
      vfYearOfBirth: this.vfClientForm.get('vfYearOfBirth')!.value,
      vfDni: this.vfClientForm.get('vfDni')!.value,
    };

    this.vfClientService.vfUpdateClient(vfClient, this.id).subscribe({
      next: (data) => {
        this.vfRouter.navigate(['/vfClient']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
