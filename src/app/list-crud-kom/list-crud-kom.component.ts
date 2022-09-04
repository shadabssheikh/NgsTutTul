import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'list-crud-kom',
  templateUrl: './list-crud-kom.component.html',
  styleUrls: ['./list-crud-kom.component.scss']
})
export class ListCrudKomComponent implements OnInit
{

  NamIptVar = ''
  Fruit = ''
  NamFasIknVar = faArrowUp
  EditIdxvar = -1

  NamAryVar = ['Apple', 'Orange', 'Banana', 'Kivi', 'Strawberry', 'Tangerine']

  constructor() { }

  ngOnInit(): void
  {
  }

  AddBtnFnc()
  {
    if (this.CheckValidFnc())
    {
    this.NamAryVar.push(this.NamIptVar)
    this.NamIptVar = ''
    }
  }

  EdtBtnFnc(itm: number)
  {
      this.NamIptVar = this.NamAryVar[itm]
      this.EditIdxvar = itm
  }

  UpdBtnFnc()
  {
    if (this.CheckValidFnc())
    {
      this.NamAryVar[this.EditIdxvar] = this.NamIptVar
      this.NamIptVar = ''
      this.EditIdxvar = -1
    }
  }

  DltBtnFnc(itm: number)
  {
    if(confirm("Are you sure you want to delete?"))
      this.NamAryVar.splice(itm,1)
  }

  SortAryFnc()
  {
    if(this.NamFasIknVar==faArrowUp)
    {
      this.NamFasIknVar = faArrowDown
      this.NamAryVar.sort()
    }
    else
    {
      this.NamFasIknVar = faArrowUp
      this.NamAryVar.sort((a,b) => b.localeCompare(a))
    }
  }

  CheckValidFnc()
  {
    if (this.NamIptVar == "")
    {
      alert("Enter an Item")
      return false
    }
    else if (this.NamIptVar.length < 3)
    {
      alert("Item Should have minimum 3 character")
      return false
    }
    else if (this.NamAryVar.find((ItmVar) => ItmVar.toLowerCase() == this.NamIptVar.toLowerCase()))
    {
      alert("Item already present")
      return false
    }
    return true
  }
}
