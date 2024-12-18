import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements OnInit, OnChanges {
 @Input() public title: string = "Bem vindo"

  constructor(){}

  ngOnInit(): void{
    setTimeout(() => {
      console.log(1)
    }, 5000)
  }

  ngOnChanges(): void {
      console.log("Deu certo")
  }
}
