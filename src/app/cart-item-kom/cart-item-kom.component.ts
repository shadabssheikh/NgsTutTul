import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cart-item-kom',
  templateUrl: './cart-item-kom.component.html',
  styleUrls: ['./cart-item-kom.component.scss']
})
export class CartItemKomComponent implements OnInit
{
  @Input('title') TtlVar=""
  @Input('detail') DtlVar=""
  @Input('cost') CstVar=0
  @Input('index') Index = 0

  

  @Output() UpdQtyVaf = new EventEmitter()
  @Output() UpdTotVaf = new EventEmitter()
  @Output() UpdUCVaf = new EventEmitter()
  @Output() DeleteFoodVaf = new EventEmitter()
  @Output() UpdateFoodVaf = new EventEmitter()


  
	NamFasIknVar = farHeart;
  QtyVar = 1
  
  ToggleLike()
  {
    if(this.NamFasIknVar==farHeart)
      this.NamFasIknVar = fasHeart
    else
      this.NamFasIknVar = farHeart
  }

  // UpdQtyFnc()
  // {
  //   this.QtyVar +=1
  // }

  RemoveFnc()
  {
    this.DeleteFoodVaf.emit()
  }

  UpdateFnc()
  {
    this.UpdateFoodVaf.emit()
  }
      
  UpdQtyFnc(PassVar:number)
  {
      
    if ((PassVar ==1 && this.QtyVar < 10) || (PassVar == -1 && this.QtyVar > 1))
    {
      this.QtyVar += PassVar
      this.UpdQtyVaf.emit(PassVar)
      this.UpdTotVaf.emit(PassVar * this.CstVar)
    }
  }

  

  constructor() { }

  ngOnInit(): void
  {
  }

}
