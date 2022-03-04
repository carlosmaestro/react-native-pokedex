export interface PokemonDTO {
  id?: number;
  name?: string;
  base_experience?: number;
  height?: number;
  weight?: number;
  stats: {
    base_stat?: number;
    effort?: number;
    stat?: {
      name?: string;
      url?: string;
    };
  }[];
  types: {
    slot?: number;
    type?: {
      name?: string;
      url?: string;
    };
  }[];
  abilities?: {
    ability?: {
      name?: string;
      url?: string;
    };
    is_hidden?: boolean;
    slot?: number;
  }[];
}
