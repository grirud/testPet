import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  public features = new BehaviorSubject<Record<string, boolean>>({})
}
