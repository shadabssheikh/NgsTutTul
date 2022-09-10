import { Component, Input, OnInit } from '@angular/core';
import { PrdSvc } from '../prd-svc.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'prod-add-kom',
  templateUrl: './prod-add-kom.component.html',
  styleUrls: ['./prod-add-kom.component.scss']
})
export class ProdAddKomComponent implements OnInit {

  @Input() PopNgModal:any
  @Input('EdtIdxVak') EdtIdxVar = -1

  IniProdVar = {
  "UidVak":0,
  "TtlVak" : "",
  "DtlVak" : "",
  "CstVak" : 0,
  "ImgVak":""
  }

  AddProdVar={
    "UidVak":0,
    "TtlVak":"",
    "DtlVak":"",
    "CstVak":0,
    "ImgVak":""
  }

  AddProdFnc()
  {
    this.PrdSvcVar.AddPrdFnc(this.AddProdVar)
    this.PopNgModal.close()
  }

  UpdProdFnc()
  {
    this.AddProdVar = this.IniProdVar
    // this.PrdSvcVar.PrdAryVar[this.EdtIdxVar] = this.AddProdVar
    this.PrdSvcVar.UpdPrdFnc(this.AddProdVar,this.EdtIdxVar)
    this.PopNgModal.close()
  }

  
  constructor(public PrdSvcVar:PrdSvc, public PopMdlVap: NgbModal) {
    
   }

  ngOnInit(): void {
    if(this.EdtIdxVar != -1 )
    {
      // this.IniProdVar= this.PrdSvcVar.PrdAryVar[this.EdtIdxVar]
      this.IniProdVar.TtlVak = this.PrdSvcVar.PrdAryVar[this.EdtIdxVar].TtlVak
      this.IniProdVar.DtlVak = this.PrdSvcVar.PrdAryVar[this.EdtIdxVar].DtlVak
      this.IniProdVar.CstVak = this.PrdSvcVar.PrdAryVar[this.EdtIdxVar].CstVak

    }
  }

}
