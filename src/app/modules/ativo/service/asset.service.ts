import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/service/base-service.service';
import { AssetModel } from '../shared/models/asset-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  //private apiUrl: string = `v8/finance/chart`;
  //https://query1.finance.yahoo.com/v8/finance/chart/PETR4.SA?range=1mo&interval=1d

  constructor(private baseService: BaseService) { }

  checkAssetVariation(): Observable<AssetModel> {
    return this.baseService.get('assets/data.json')
  }
}
