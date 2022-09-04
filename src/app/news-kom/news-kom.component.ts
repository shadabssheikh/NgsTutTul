import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'news',
  templateUrl: './news-kom.component.html',
  styleUrls: ['./news-kom.component.scss']
})
export class NewsKomComponent implements OnInit {
  @Input() topicVar:any
  @Input() detailVar:any 
  @Output() IncLykVaf = new EventEmitter()
  @Output() DecLykVaf = new EventEmitter()

  LykVar = 0
  DisLykVar = 0

  IncLykBtnFnc()
  {
    this.IncLykVaf.emit(1)
    this.LykVar+=1
  }

  DecLykBtnFnc()
  {
    this.DecLykVaf.emit(-1)
    this.DisLykVar+=1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
