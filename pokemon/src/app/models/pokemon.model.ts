export interface PokemonType{ //è il modello che dice com'è riempito l'arrey
    name: string;
    url: string;
}

export interface TypeResponse{ //staimo dicendo ad angular che il nostro js ci fornirà dei tipi di pokemon
    results: PokemonType[];
}