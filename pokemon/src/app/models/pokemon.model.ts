export interface PokemonType{ //è il modello che dice com'è riempito l'arrey
    name: string;
    url: string;
}

export interface TypeResponse{ //staimo dicendo ad angular che il nostro js ci fornirà dei tipi di pokemon
    results: PokemonType[];
}

export interface PokemonListItem { //è la definizione di che cos'è un pokemon per questo js
    pokemon: {
        name: string;
        url:string;
    };
}

export interface PokemonListResponse{ //quando leggerai questo pokemon saprai che è una lista dei pokemon
    pokemon: PokemonListItem[];
}

export interface PokemonDetails {
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string; //Questo è l'URL dell'immagine che mostrerai
    };
    
}