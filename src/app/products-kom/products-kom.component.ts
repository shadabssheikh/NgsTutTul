import { Component, OnInit, TemplateRef } from '@angular/core';
import { PrdSvc } from '../prd-svc.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products-kom',
  templateUrl: './products-kom.component.html',
  styleUrls: ['./products-kom.component.scss']
})
export class ProductsKomComponent implements OnInit {

  EdtIdxVar = -1
  SearchVar =""

  SearchPrdFnc()
  {
    this.PrdSvcVar.PrdAryVar  = this.PrdSvcVar.PrdAryVar.filter(itmVar => itmVar.TtlVak.toLowerCase().includes(this.SearchVar.toLowerCase()))
  }
  
  UpdtPrdFnc(trgUid:TemplateRef<any>, IdxPsgVar:number)
  {
    this.PopMdlVap.open(trgUid)
    this.EdtIdxVar = IdxPsgVar
    
  }

  DltProdFnc(UidVak:number)
  {
    this.PrdSvcVar.DltPrdFnc(UidVak)
  }

  getPathFromTtlFnc(TtlPsgVar:string)
  {
    return './'+TtlPsgVar.toLowerCase().replace(/ /g,'-')
  }
  constructor(public PrdSvcVar:PrdSvc, public PopMdlVap: NgbModal) { }

  ngOnInit(): void {
  }

}
