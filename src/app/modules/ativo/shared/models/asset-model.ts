export interface AssetModel {
  chart?: {
    error?: string;
    result?: AssetResult[];
  };
}

export interface AssetResult {
	indicators?: {
		quote: []
	};
	meta?: any;
	timestamp?: []
}

export interface AssetData {
	close?: any;
	high?: any;
	low?: any;
	open?: any;
	volume?: any;
}

export interface AssetVariation {
	pregao: string;
	abertura: string;
	fechamento: string;
	diferencaPercentual?: string | null;
	diferencaPercentualInicio?: string | null;
}
