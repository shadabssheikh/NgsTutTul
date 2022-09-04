import { Component, OnInit } from '@angular/core';
import { PrdSvc } from '../prd-svc.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products-kom',
  templateUrl: './products-kom.component.html',
  styleUrls: ['./products-kom.component.scss']
})
export class ProductsKomComponent implements OnInit {

  

  getPathFromTtlFnc(TtlPsgVar:string)
  {
    return './'+TtlPsgVar.toLowerCase().replace(/ /g,'-')
  }
  constructor(public PrdSvcVar:PrdSvc, public PopMdlVap: NgbModal) { }

  ngOnInit(): void {
  }

}
