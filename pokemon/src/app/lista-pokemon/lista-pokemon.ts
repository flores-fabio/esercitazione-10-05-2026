import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule} from '@angular/router';

@Component({
  selector: 'app-lista-pokemon',
  imports: [RouterModule],
  templateUrl: './lista-pokemon.html',
  styleUrl: './lista-pokemon.css',
})
export class ListaPokemon implements OnInit{
  pokemonList: any[] = [];
  tipoSelezionato: string | null = '';
  loading = true;
  constructor(public http: HttpClient, private route: ActivatedRoute, private cdr: ChangeDetectorRef){}

  ngOnInit(): void{
  
    this.route.paramMap.subscribe(params =>{ //questo legge dal URL le informazioni
      this.tipoSelezionato = params.get('type');
      this.makerequest();
    });  
  }

  makerequest(): void{
    this.loading = true; //prende il js intero
    this.http.get<any>(`https://pokeapi.co/api/v2/type/${this.tipoSelezionato}`)
      .subscribe(data => this.getData(data));
  }
  getData = (d:any) => { //prende solo quello che ti interessa
    this.pokemonList = d.pokemon;
    console.log(this.pokemonList)
    this.loading = false;
    this.cdr.detectChanges();
  }
}


