import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as toastr from 'toastr'

@Injectable({
  providedIn: 'root'
})
export class PrdSvc {

  TtlVar = "Dream Products"

  PrdAryVar = [
    {
      "UidVak":0,
      "TtlVak":"",
      "DtlVak":"",
      "CstVak":0,
      "ImgVak":""
    }
  ]
    // {
    //   "TtlVak":"DJI Camera",
    //   "DtlVak":"Great Camera for shooting",
    //   "CstVak":9999,
    //   "ImgVak":"assets/imgFdr/djicam.jpg"
    // },
    // {
    //   "TtlVak":"Sneaker Shoes",
    //   "DtlVak":"Comfortable to wear",
    //   "CstVak":2500,
    //   "ImgVak":"assets/imgFdr/sneakers.jpg"
    // },
    // {
    //   "TtlVak":"Keychron Keyboard",
    //   "DtlVak":"Brown Switch keyboards",
    //   "CstVak":12000,
    //   "ImgVak":"assets/imgFdr/key.jpg"
    // },
    // {
    //   "TtlVak":"Noise smart watch",
    //   "DtlVak":"Budget Friendly",
    //   "CstVak":3999,
    //   "ImgVak":"assets/imgFdr/benq.jpg"
    // },
    
  

  constructor(public HtpCncMgrVap: HttpClient) {
    toastr.options.positionClass = "toast-bottom-right"
    this.GetPrdFnc()
   }

  getItemByPath(PathPsgVar:string)
  {
    
    return this.PrdAryVar.find(PrdItmVar => 
      PrdItmVar.TtlVak.toLowerCase().split(' ').join("-") == PathPsgVar
      )
  }

  GetPrdFnc()
  {
    this.HtpCncMgrVap.get(`${environment.SvrUrl}product`)
		.subscribe(
			ResRsgVar =>
			{
				console.log(ResRsgVar)
        let ResVar:any = ResRsgVar
        this.PrdAryVar = ResVar
			})
  }

  AddPrdFnc(NquPrdVar:any)
  {
    this.HtpCncMgrVap.post(`${environment.SvrUrl}product`, NquPrdVar)
		.subscribe(
			ResRsgVar =>
			{
				console.log(ResRsgVar)
        let ResVar:any = ResRsgVar
        this.PrdAryVar.push(NquPrdVar)
        toastr.success('Added Success')
        this.GetPrdFnc()
			})
  }

  DltPrdFnc(UidPrdVar:any)
  {
    this.HtpCncMgrVap.delete(`${environment.SvrUrl}product/${UidPrdVar}`)
		.subscribe(
			ResRsgVar =>
			{
				console.log(ResRsgVar)
        this.PrdAryVar= this.PrdAryVar.filter(itmVar => itmVar.UidVak != UidPrdVar)

        toastr.error('Deleted Success')
			})
  }

  UpdPrdFnc(UpdProdVar:any, EditIdxvar:number)
  {
    var UidVar = this.PrdAryVar[EditIdxvar].UidVak
    this.HtpCncMgrVap.put(`${environment.SvrUrl}product/${UidVar}`,UpdProdVar)
		.subscribe(
			ResRsgVar =>
			{
				console.log(ResRsgVar)
        this.PrdAryVar[EditIdxvar]= UpdProdVar

        toastr.success('Updated Success')
			})
  }
}
