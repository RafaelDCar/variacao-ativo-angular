import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AssetAdapterService } from '../../adpter/asset-adapter.service';
import { tap } from 'rxjs';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit {

  @ViewChild('chartCanvas', { static: false }) chartCanvas: ElementRef | null = null
  public chart: null = null;

  constructor(private assetAdapter: AssetAdapterService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  getChart() {
    this.assetAdapter.getAssetChartVariation().pipe(
      tap(({dados, dias}) => {
        const precoFechamento = dados['close'];

        // this.chart ? this.chart.data.labels = dias.map((dia: any) => new Date(dia * 1000)): null;
        // this.chart ? this.chart.data.datasets[0].data = precoFechamento: null;
        // this.chart?.update();

      })
    ).subscribe()
  }

}
