import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { VfClient } from 'src/app/models/vf-client';
import { VfClientService } from 'src/app/services/vf-client.service';

@Component({
  selector: 'app-vf-client-list',
  templateUrl: './vf-client-list.component.html',
  styleUrls: ['./vf-client-list.component.scss'],
})
export class VfClientListComponent {
  vfDataSource = new MatTableDataSource<VfClient>();
  vfDisplayedColumns: string[] = [
    'id',
    'vfName',
    'vfYearOfBirth',
    'vfView',
    'vfUpdate',
  ];
  @ViewChild(MatPaginator) vfPaginator!: MatPaginator;
  @ViewChild(MatSort) vfSort!: MatSort;

  constructor(
    private vfClientService: VfClientService,
    private vfRouter: Router
  ) {}

  ngOnInit(): void {
    this.getVfClients();
  }

  getVfClients(): void {
    this.vfClientService.vfGetClients().subscribe((response: any[]) => {
      this.vfDataSource = new MatTableDataSource(response);
      this.vfDataSource.paginator = this.vfPaginator;
      this.vfDataSource.sort = this.vfSort;
    });
  }

  onView(id: number): void {
    this.vfRouter.navigate(['/vfClient/vfView/' + id]);
  }

  onEdit(id: number): void {
    this.vfRouter.navigate(['/vfClient/vfUpdate/' + id]);
  }
}
