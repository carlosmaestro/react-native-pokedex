import { PokemonDTO } from './../model/pokemon-dto';
import { CommonService } from './common.service';
import { EntityLinkRef } from './../model/entity-link-ref';
import { Pagination } from './../model/pagination';
import api from './api';

class PokemonService implements CommonService {
  subpath: string;

  constructor() {
    this.subpath = 'pokemon';
  }

  getAll() {
    return api.get<Pagination<EntityLinkRef>>(`/${this.subpath}?
    offset=0&limit=80`); // 1200
  }

  getOficialOfficialArtworkUri(idPokemon: number | string) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idPokemon}.png`;
  }

  get(id: string) {
    return api.get<PokemonDTO>(`/${this.subpath}/${id}`);
  }
  //   create(data: ITutorialData) {
  //     return http.post<ITutorialData>('/tutorials', data);
  //   }
  //   update(data: ITutorialData, id: any) {
  //     return http.put<any>(`/tutorials/${id}`, data);
  //   }
  //   delete(id: any) {
  //     return http.delete<any>(`/tutorials/${id}`);
  //   }
  //   deleteAll() {
  //     return http.delete<any>(`/tutorials`);
  //   }
  //   findByTitle(title: string) {
  //     return http.get<Array<ITutorialData>>(`/tutorials?title=${title}`);
  //   }
}
export default new PokemonService();
