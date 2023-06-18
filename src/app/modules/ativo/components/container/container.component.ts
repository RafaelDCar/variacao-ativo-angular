import { Component, OnInit } from '@angular/core';
import { AssetVariation } from '../../shared/models/asset-model';
import { AssetAdapterService } from '../../adpter/asset-adapter.service';
import { tap } from 'rxjs';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  
  data: number[] = [];

  constructor(private assetAdapter: AssetAdapterService) {
    const data: number[] = []
    this.assetAdapter.getAssetVariationData().pipe(
      tap((variations: AssetVariation[] ) => {
        variations.forEach(variation => {
          data.push(variation.fechamento)
        })
      })
    ).subscribe(() => this.data = data)
   }

  ngOnInit(): void {
  }

}
