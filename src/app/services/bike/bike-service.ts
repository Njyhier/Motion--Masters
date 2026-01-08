import { Injectable, signal, inject } from '@angular/core';
import { Bike } from '../../classes/bike/bike';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BikeService {
  private apiUrl = 'http://localhost:3000/bikes'; 
  private http = inject(HttpClient);

 getBicycles():Observable<Bike[]>{
  return this.http?.get<Bike[]>(this.apiUrl)
  }
}