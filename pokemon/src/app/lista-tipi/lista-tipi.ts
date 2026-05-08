import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PokemonType, TypeResponse } from '../models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-lista-tipi',
  imports: [RouterModule],
  templateUrl: './lista-tipi.html',
  styleUrl: './lista-tipi.css',
})
export class ListaTipi implements OnInit{
  tipi: PokemonType[] = []; // è un arrey vuoto
  loading: boolean = false; //è una variabile booleana che dice se siamo in attesa di una risposta dal server
  
  constructor(public http: HttpClient, private cdr: ChangeDetectorRef){}
  ngOnInit(): void {
      this.makerequest();

  }
  makerequest(): void {
    this.loading = true;

    this.http.get<TypeResponse>('https://pokeapi.co/api/v2/type') // questa funziona ci da tutto il js
      .subscribe(data =>{
        this.getData(data);
      });
  }
  getData = (d: TypeResponse)=> {
    console.log("Dati ricevuti con successo: ", d); //ci 
    this.tipi =d.results;
    this.loading = false;

    this.cdr.detectChanges(); //Serve per far capire ad angular che ci sono state modifiche
  }

}


