import { Injectable, OnDestroy } from '@angular/core';
import { AssetService } from '../service/asset.service';
import { BehaviorSubject, Subscription, map, take, tap } from 'rxjs'
import { AssetData, AssetVariation } from '../shared/models/asset-model';

@Injectable({
  providedIn: 'root'
})
export class AssetAdapterService implements OnDestroy {

  public assetVariation$ = new BehaviorSubject<AssetVariation[]>([]);
  private subscription = new Subscription();

  constructor(private assetService: AssetService) { 
    this.subscription = this.getAssetVariationTable().subscribe();
  }

  public getAssetChartVariation() {
    return this.getVariationdata();
  }

  public getAssetVariationTable() {
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

    dias.forEach((dia, index) => {

      const fechamentoAtual = dados['close'][index];
      const fechamentoAnterior = dados['close'][index - 1] || 0;
      const diferencaPercentual = fechamentoAnterior ? ((fechamentoAtual - fechamentoAnterior) / fechamentoAnterior) * 100 : 0;
      const diferencaPercentualInicio = ((fechamentoAtual - primeiroFechamento) / primeiroFechamento) * 100;

      const variation: AssetVariation =  {
        pregao: new Date(dia * 1000).toLocaleDateString(),
        abertura: dados['open'][index],
        fechamento: fechamentoAtual,
        diferencaPercentual: diferencaPercentual || null,
        diferencaPercentualInicio: diferencaPercentualInicio || null
      }

      assetVariation.push(variation);
    });

    this.assetVariation$.next(assetVariation);
  }

  public getAssetVariationData() {
    return this.assetVariation$.asObservable();
  }

  ngOnDestroy(): void {
    this.subscription ? this.subscription.unsubscribe : null;
  }
}
