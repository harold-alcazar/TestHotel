import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { String } from 'typescript-string-operations';
import { Hotel } from '../dto/hotel';

@Injectable({ providedIn: 'root' })

export class ServiceHotelService {
  constructor(private httpClient: HttpClient) { }

  getHotels() {
    return this.httpClient.get<Hotel[]>(environment.getHotels);
  }

  getHotelByName(name: string) {
    return this.httpClient.get<Hotel[]>(String.Format(environment.getHotelByName, name));
  }
}
