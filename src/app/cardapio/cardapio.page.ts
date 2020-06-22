import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {
  produtos = [];
  api = "http://localhost/consulta.php";
  pesq="";

  constructor( private http:HttpClient ) {}

  ngOnInit() {
    this.lerProdutos();
  };

  lerProdutos() {
    this.http.get<any[]>(this.api+"?pesq="+this.pesq).subscribe(dados => {
        this.produtos = dados;
      });
  };
}

