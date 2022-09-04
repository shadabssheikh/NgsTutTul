import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrdSvc {

  TtlVar = "Dream Products"

  PrdAryVar = [
    {
      "TtlVak":"BenQ GV1",
      "DtlVak":"Great Portable projector",
      "CstVak":25000,
      "ImgVak":"assets/imgFdr/benq.jpg"
    },
    {
      "TtlVak":"DJI Camera",
      "DtlVak":"Great Camera for shooting",
      "CstVak":9999,
      "ImgVak":"assets/imgFdr/djicam.jpg"
    },
    {
      "TtlVak":"Sneaker Shoes",
      "DtlVak":"Comfortable to wear",
      "CstVak":2500,
      "ImgVak":"assets/imgFdr/sneakers.jpg"
    },
    {
      "TtlVak":"Keychron Keyboard",
      "DtlVak":"Brown Switch keyboards",
      "CstVak":12000,
      "ImgVak":"assets/imgFdr/key.jpg"
    },
    {
      "TtlVak":"Noise smart watch",
      "DtlVak":"Budget Friendly",
      "CstVak":3999,
      "ImgVak":"assets/imgFdr/benq.jpg"
    },
    
  ]

  constructor() { }

  getItemByPath(PathPsgVar:string)
  {
    
    return this.PrdAryVar.find(PrdItmVar => 
      PrdItmVar.TtlVak.toLowerCase().split(' ').join("-") == PathPsgVar
      )
  }
}
