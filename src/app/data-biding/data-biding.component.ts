import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrl: './data-biding.component.scss'
})
export class DataBidingComponent implements OnInit {
  
  public nome: string = "Lucas"
  public idade: number = 31

  public desabilitado: boolean = false

  public imagemTeste: string = "https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1024.jpg"

  constructor(){

  }
  
  ngOnInit(): void {
    
  }

}
