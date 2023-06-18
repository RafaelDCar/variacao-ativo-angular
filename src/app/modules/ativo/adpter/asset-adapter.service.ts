import { Injectable } from '@angular/core';
import { AssetService } from '../service/asset.service';
import { BehaviorSubject, map, take, tap } from 'rxjs'
import { AssetData, AssetVariation } from '../shared/models/asset-model';

@Injectable({
  providedIn: 'root'
})
export class AssetAdapterService {

  public assetVariation$ = new BehaviorSubject<AssetVariation[]>([]);

  constructor(private assetService: AssetService) { 
    this.getAssetVariation().subscribe();
  }

  public getAssetChartVariation() {
    return this.getVariationdata();
  }

  public getAssetVariation() {
    return this.getVariationdata().pipe(
      tap(({dados, dias}) => this.evalueteAssetVariation(dados, dias))
    )          
  }

  private getVariationdata() {
    return this.assetService.checkAssetVariation().pipe(
      take(1),
      map((data: any) => {
      return {
        dados: data['chart']['result'][0]['indicators']['quote'][0],
        dias:  data['chart']['result'][0]['timestamp']
      }})
    );
  }

  private evalueteAssetVariation(dados: AssetData, dias: number[]) {
    const primeiroFechamento = dados['close'][0];
    const assetVariation: AssetVariation[] = [];

    dias.map((dia, index) => {

      const fechamentoAtual = dados['close'][index];
      const fechamentoAnterior = dados['close'][index - 1];
      const diferencaPercentual = ((fechamentoAtual - fechamentoAnterior) / fechamentoAnterior) * 100;
      const diferencaPercentualInicio = ((fechamentoAtual - primeiroFechamento) / primeiroFechamento) * 100;

      const variation =  {
        pregao: new Date(dia * 1000).toLocaleDateString(),
        abertura: dados['open'][index],
        fechamento: fechamentoAtual,
        diferencaPercentual: diferencaPercentual.toFixed(2) ? diferencaPercentual.toFixed(2) : null,
        diferencaPercentualInicio: diferencaPercentualInicio.toFixed(2) ? diferencaPercentualInicio.toFixed(2) : null
      }

      assetVariation.push(variation);
    });

    this.assetVariation$.next(assetVariation);
  }

  public getAssetVariationData() {
    return this.assetVariation$.asObservable();
  }
}
