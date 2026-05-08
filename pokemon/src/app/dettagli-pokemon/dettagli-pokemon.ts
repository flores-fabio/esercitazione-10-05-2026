import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dettagli-pokemon',
  imports: [RouterModule],
  templateUrl: './dettagli-pokemon.html',
  styleUrl: './dettagli-pokemon.css',
})
export class DettagliPokemon implements OnInit{
  pokemon: any = null;
  nomePokemon: string | null = '';
  loading: boolean = true;

  constructor(public http: HttpClient, private route: ActivatedRoute, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) => {
    this.nomePokemon = params.get('id');
    this.makerequest();
  }

  makerequest(): void{
    this.loading =true;
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.nomePokemon}`).subscribe(this.getData);
}
getData = (d: any) => {
  this.pokemon = d;
  this.loading = false; 
  this.cdr.detectChanges();
}
}
