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

  public imagemTeste: string = "https://services.meteored.com/im/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1024.jpg"

  public position: {x:number, y:number} = {x:0, y:0};
  constructor(){

  }
  
  ngOnInit(): void {
    
  }

  public alertaInfo(valor: MouseEvent){
    console.log(valor)
  }

  public mouseMoveTeste(valor: MouseEvent ){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
