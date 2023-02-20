import {
  Directive,
  inject,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { FeaturesService } from '@app/services/features.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[featureToggle]',
})
export class FeatureToggleDirective implements OnInit, OnDestroy {
  @Input() featureToggle: string = '';
  @Input() test: any;

  private _featuresService = inject(FeaturesService);

  private _featureSub: Subscription = new Subscription();

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this._shouldRender();
  }

  private _shouldRender() {
    this._featureSub = this._featuresService.features.subscribe(
      (features: Record<string, boolean>) => {
        if (features[this.featureToggle]) {
          this._viewContainer.createEmbeddedView(this._templateRef);
        } else {
          this._viewContainer.clear();
        }
      }
    );
  }

  ngOnDestroy(): void {
    this._featureSub?.unsubscribe();
    console.log('this._featureSub', this._featureSub);
  }
}
