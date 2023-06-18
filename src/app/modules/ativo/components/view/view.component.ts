import { Component, OnDestroy, OnInit } from '@angular/core';
import { AssetAdapterService } from '../../adpter/asset-adapter.service';
import { AssetVariation } from '../../shared/models/asset-model';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, OnDestroy {

  public assetVariation:AssetVariation[] = []

  private subscription: Subscription = new Subscription();

  constructor(public assetAdapter: AssetAdapterService) { }

  ngOnInit(): void {
    this.getVariationData();
  }

  private getVariationData() {
    this.subscription = this.assetAdapter.getAssetVariationData().pipe(
      tap(response => this.assetVariation = response)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription ? this.subscription.unsubscribe() : null;
  }
}
