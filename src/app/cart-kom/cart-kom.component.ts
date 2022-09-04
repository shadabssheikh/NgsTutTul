import { Component, Input, ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart-kom',
  templateUrl: './cart-kom.component.html',
  styleUrls: ['./cart-kom.component.scss']
})
export class CartKomComponent implements OnInit {

  @ViewChild('AudNgsUid') AudNgsVar:any

  NamIptVar = ""
  // AgeVar = 19
  // BulVar = true
  // ThemeVar = "Blue"
  // FgdClrVar = "Green"
  // BgdClrVar = "Cyan"
  // StsVar = "Active"
  // NamNgsFnc()
  // {
  //   alert("Hi")
  // }

  // SngAryVar = ['Brand.mp3','Kannada.mp3', 'Patriotic.mp3','Piono.mp3']

  // PlySngVar = this.SngAryVar[0]

  // playSongFnc(IdxPsgVar:number)
  // {
  //   this.PlySngVar = this.SngAryVar[IdxPsgVar]
  //   let AudHtmVar = this.AudNgsVar.nativeElement
  //   AudHtmVar.play()

  // }
  // TtlLykVaf = 0

  // InclykVafFnc(evtVar:number)
  // {
  //   this.TtlLykVaf+=evtVar
  // }

  // DeclykVafFnc(evtVar:number)
  // {
  //   this.TtlLykVaf+=evtVar
  // }

  FoodNamVar=''
  FoodDetVar=''
  FoodCstVar=0

  EditIdxvar = -1


  CartAyVar = [
    {
      TtlVak: 'Chicken Pizza',
      DtlVak: 'Chicken Cheese Double Layer Pan',
      CstVak: 300
    },
    {
      TtlVak: 'Chicken Burger',
      DtlVak: 'Chicken Double Tikki Double Cheese Layer',
      CstVak: 150
    },
    {
      TtlVak: 'Turkish Roll',
      DtlVak: 'Special Chicken Shawarma',
      CstVak: 90
    }

  ]

  UpdateValFnc()
  {
    this.TotUC = this.CartAyVar.reduce((SumVar,ItmVar) => SumVar+ ItmVar.CstVak,0)
    this.TotQtyVar = this.CartAyVar.length
    this.TotCost = this.CartAyVar.reduce((SumVar,ItmVar) => SumVar+ ItmVar.CstVak,0)
  }

  InitialValFnc()
  {
    this.FoodNamVar=''
    this.FoodDetVar=''
    this.FoodCstVar=0
  }

  AddFoodFnc()
  {
    this.CartAyVar.push(
      {
        TtlVak:this.FoodNamVar,
        DtlVak:this.FoodDetVar,
        CstVak:this.FoodCstVar
      }
    )
    this.UpdateValFnc()
    this.InitialValFnc()
  }

  DeleteFoodVafFnc(IdxVar:number)
  {
    this.CartAyVar.splice(IdxVar,1)
  }

  UpdateFoodVafFnc(IdxVar:number)
  {
    this.FoodNamVar = this.CartAyVar[IdxVar].TtlVak
    this.FoodDetVar = this.CartAyVar[IdxVar].DtlVak
    this.FoodCstVar = this.CartAyVar[IdxVar].CstVak
    this.EditIdxvar = IdxVar

    this.UpdateValFnc()
  }

  UpdFoodFnc()
  {
    this.CartAyVar[this.EditIdxvar].TtlVak = this.FoodNamVar
    this.CartAyVar[this.EditIdxvar].DtlVak = this.FoodDetVar
    this.CartAyVar[this.EditIdxvar].CstVak = this.FoodCstVar

    this.InitialValFnc()
    this.EditIdxvar = -1
  }

  TotQtyVar = 0
  TotCost = 0
  TotUC = 0


  UpdTotQtyVafFnc(EventVar: number)
  {
    this.TotQtyVar += EventVar
  }

  EdtTotVafFnc(EventVar: number)
  {
    this.TotCost += EventVar
  }

  UpdTotVafFnc(EventVar:number)
  {
    this.TotCost += EventVar
  }

 


  constructor() { }

  ngOnInit(): void {
    this.UpdateValFnc()
  }

}
