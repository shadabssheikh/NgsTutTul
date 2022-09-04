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

  AddProdVar={
    "TtlVak":"",
    "DtlVak":"",
    "CstVak":0,
    "ImgVak":"assets/imgFdr/benq.jpg"
  }

  AddProdFnc()
  {
    this.PrdSvcVar.PrdAryVar.push(this.AddProdVar)
    this.PopNgModal.close()
  }
  constructor(public PrdSvcVar:PrdSvc, public PopMdlVap: NgbModal) { }

  ngOnInit(): void {
  }

}
