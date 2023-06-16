import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AssetAdapterService } from '../../adpter/asset-adapter.service';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public assetData:any = []

  constructor(public assetAdapter: AssetAdapterService) { }

  ngOnInit(): void {
  }

  public assetForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  onSubmit() {
    this.assetData = this.assetAdapter.getAssetVariation('')
    console.log(this.assetData);
    
  }

}
