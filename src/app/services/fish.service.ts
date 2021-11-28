import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {FishModel} from './fish.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  constructor(private http: HttpClient) { }

  getFish(): Observable<FishModel[]> {
    return this.http.get<FishModel[]>('http://localhost:3000/fish');
  }
}
