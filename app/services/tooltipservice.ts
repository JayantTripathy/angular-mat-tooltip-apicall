import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TooltipService {
  constructor(private http: HttpClient) {}

  getTooltipData(): Observable<any> {
    // Replace with your API endpoint
    return this.http.get('https://official-joke-api.appspot.com/random_joke');
  }
}
