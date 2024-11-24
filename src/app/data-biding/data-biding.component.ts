import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrl: './data-biding.component.scss'
})
export class DataBidingComponent implements OnInit {
  
  public nome: string = "Lucas"
  public idade: number = 31

  constructor(){

  }
  
  ngOnInit(): void {
    
  }

}
