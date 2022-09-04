import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrdSvc } from '../prd-svc.service';


@Component({
  selector: 'app-prod-detail-kom',
  templateUrl: './prod-detail-kom.component.html',
  styleUrls: ['./prod-detail-kom.component.scss']
})
export class ProdDetailKomComponent implements OnInit {

  PrdDtlVar:any

  constructor(public PrdSvcVar:PrdSvc, public UrlVap: ActivatedRoute) {
    var GetLnkVak = this.UrlVap.snapshot.params.name;
    this.PrdDtlVar = PrdSvcVar.getItemByPath(GetLnkVak)
   }

  ngOnInit(): void {
  }

}
