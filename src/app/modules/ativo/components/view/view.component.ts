import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AssetAdapterService } from '../../adpter/asset-adapter.service';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(public assetAdapter: AssetAdapterService) { }

  ngOnInit(): void {
  }

  public assetForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  onSubmit() {
    this.assetAdapter.getAssetVariation(this.assetForm.value.name)
    //console.log(this.assetForm.value);
    
  }

}
