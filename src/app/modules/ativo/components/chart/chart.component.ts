import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AssetAdapterService } from '../../adpter/asset-adapter.service';
import { tap } from 'rxjs';
import * as Highcharts from 'highcharts'

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit {

  constructor(private assetAdapter: AssetAdapterService) { }

  Highcharts = Highcharts;
  linechart: any = {
    series: [
      {
        data: [1, 2, 3],
      },
    ],
    chart: {
      type: 'line',
    },
    title: {
      text: 'linechart',
    },
  };

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
