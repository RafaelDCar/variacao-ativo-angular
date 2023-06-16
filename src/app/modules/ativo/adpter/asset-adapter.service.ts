import { Injectable } from '@angular/core';
import { AssetService } from '../service/asset.service';
import { tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AssetAdapterService {

  constructor(private assetService: AssetService) { }

  getAssetVariation(assetName: string) {
    return this.assetService.checkAssetVariation(assetName).subscribe();
  }
}
