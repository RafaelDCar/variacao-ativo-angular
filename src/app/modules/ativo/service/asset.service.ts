import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/service/base-service.service';
import { assetModel } from '../shared/models/asset-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private apiUrl: string = `v8/finance/chart`;

  constructor(private baseService: BaseService) { }

  checkAssetVariation(asset:string): Observable<assetModel> {
    return this.baseService.get('assets/data.json')
  }
}
