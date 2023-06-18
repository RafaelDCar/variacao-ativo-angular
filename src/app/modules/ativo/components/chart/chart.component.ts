import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AssetAdapterService } from '../../adpter/asset-adapter.service';
import { AssetVariation } from '../../shared/models/asset-model';
import { delay, finalize, tap } from 'rxjs';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  chartCloseVRef: any;
  chartVariationRef: any;

  HighchartsCloseValue: typeof Highcharts = Highcharts;
  HighchartsVariationValue: typeof Highcharts = Highcharts;
  
  constructor(private assetAdapter: AssetAdapterService) {
    this.updateChart();
  }

  public chartOptionsCloseValue: Highcharts.Options = {
    title: {
      text: 'Variação no fechamento',
      align: 'left',
    },
    
    series: [
      {
        type: 'line',
        data: [],
      },
    ],
  };

  public chartOptionsVariation: Highcharts.Options = {
    title: {
      text: 'Variação em relação ao primeiro pregão da serie',
      align: 'left',
    },
    
    series: [
      {
        type: 'line',
        data: [],
      },
    ],
  };

  chartCallback: Highcharts.ChartCallbackFunction = (chart) => {
    this.chartCloseVRef = chart;
  };

  chartVariationCallback: Highcharts.ChartCallbackFunction = (chart) => {
    this.chartVariationRef = chart;
  };

  private updateChart() {
    const chartData: number[] = [];
    const chartVariationData: number[] = [];
    this.assetAdapter
      .getAssetVariationData()
      .pipe(
        tap((variations: AssetVariation[]) => {
          variations.forEach((variation) => {
            chartData.push(variation.fechamento);
            chartVariationData.push(variation.diferencaPercentualInicio!)
          });
        }),
        delay(500)
      )
      .subscribe(() => {
        this.updateChartWithValue(this.chartCloseVRef, chartData);
        this.updateChartWithValue(this.chartVariationRef, chartVariationData);
      });
  }

  updateChartWithValue(chartRef: any ,chartData: any[]) {
    chartRef.series[0].update({
      data: chartData,
      type: 'line',
    });
  }
}
