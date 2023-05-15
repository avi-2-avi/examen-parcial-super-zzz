import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VfClient } from '../models/vf-client';

@Injectable({
  providedIn: 'root',
})
export class VfClientService {
  vfBaseUrl: string = 'http://localhost:3000/vfClient';

  constructor(private http: HttpClient) {}

  vfGetClients() {
    return this.http.get<VfClient[]>(this.vfBaseUrl);
  }

  vfGetClient(id: number) {
    return this.http.get<VfClient[]>(this.vfBaseUrl + '/' + id);
  }

  vfUpdateClient(vfClient: VfClient, id: number) {
    return this.http.put<VfClient>(this.vfBaseUrl + '/' + id, vfClient);
  }
}
