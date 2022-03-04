import React from 'react';

import LogoImg from '../../assets/images/grey-logo.png';
import PokemonImg from '../../assets/images/pokeball.png';

import { EntityLinkRef } from '../../model/entity-link-ref';
import { PokemonDTO } from '../../model/pokemon-dto';
import pokemonService from '../../services/pokemon.service';
import { Body, Container, DataField, DataLabel, DataValue, DataView, Header, Id, Logo, Pokemon, Title, TitleView, TypesContainer, TypeText, TypeView } from './styles';

interface PokemonDetailProps {
  navigation: any;
  route: { params: { entityRef: EntityLinkRef } };
}

export class PokemonDetail extends React.Component<
  PokemonDetailProps,
  { pokemon?: PokemonDTO }
> {
  constructor(props) {
    console.log(Object.keys(props));
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getPokemonData();
  }

  render() {
    const entityRef = this.props.route.params.entityRef;
    console.log(entityRef);

    let fields = [];
    let types = [];

    if (this.state.pokemon) {

      for (let index = 0; index < this.state.pokemon.stats.length; index++) {
        const field = this.state.pokemon.stats[index];
        fields.push(
          <DataField key={index}>
            <DataLabel>{field.stat?.name}</DataLabel>
            <DataValue>{field.base_stat}</DataValue>
          </DataField>,
        );
      }

      for (let index = 0; index < this.state.pokemon.types.length; index++) {
        const objType = this.state.pokemon.types[index];
        types.push(
          <TypeView>
            <TypeText>{objType.type?.name}</TypeText>
          </TypeView>,
        );
      }
    }

    return (
      <Container>
        <Header>
          <Logo source={PokemonImg}></Logo>
          <TitleView>
            <Title>{entityRef.name}</Title>
            <TypesContainer>{types}</TypesContainer>
            <Id>#{entityRef.id}</Id>
          </TitleView>
          <Pokemon
            source={{
              uri: entityRef.imageUri,
            }}
          />
        </Header>
        <Body>
          <DataView>{fields}</DataView>
        </Body>
      </Container>
    );
  }

  getPokemonData() {
    pokemonService
      .get(this.props.route.params.entityRef.id + '')
      .then(response => {
        this.setState({ pokemon: response.data });
        console.log(Object.keys(this.state.pokemon));
      });
  }
}
