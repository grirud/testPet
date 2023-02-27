import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FeaturesService } from './services/features.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private _httpClient = inject(HttpClient);
  private _featuresService = inject(FeaturesService);

  constructor() {
    this._httpClient
      .get('http://localhost:3000/features')
      .subscribe((features) => {
        this._featuresService.features.next(
          features as Record<string, boolean>
        );
      });
  }
}
