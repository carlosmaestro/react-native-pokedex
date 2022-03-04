import React, { useEffect, useState } from 'react';

import GreyLogoImg from '../../assets/images/grey-logo.png';
import SearchIcon from '../../assets/images/search-icon.png';
import { Input } from '../../components/Input';
import { EntityLinkRef } from '../../model/entity-link-ref';
import {
  Body,
  Container,
  GreyLogo,
  Header,
  InputView,
  MyKeyboardAvoidingView,
} from './styles';

import PokemonService from '../../services/pokemon.service';
import { CustomFlatList } from '../../components/CustomFlatList';

interface ListState {
  pokemonRefList?: EntityLinkRef[];
  offset: number;
  limit: number;
}

export class List extends React.Component<any, ListState> {
  constructor(props) {
    super(props);

    this.state = {
      pokemonRefList: [],
      offset: 0,
      limit: 10,
    };
  }

  componentDidMount() {
    this.getPokemonEntityRef();
  }

  render() {
    return (
      <MyKeyboardAvoidingView>
        {/* <Container> */}
        <Header>
          <GreyLogo source={GreyLogoImg}>
            <InputView>
              <Input
                placeholder={'digite o nome do pokemon'}
                source={SearchIcon}
              />
            </InputView>
          </GreyLogo>
        </Header>
        <Body>
          <CustomFlatList
            data={this.state.pokemonRefList}
            navigation={this.props.navigation}
            onEndReached={this.onEndReached.bind(this)}
          />
        </Body>
        {/* </Container> */}
      </MyKeyboardAvoidingView>
    );
  }

  onEndReached() {
    console.log(this.state.offset);
    this.setState({ offset: this.state.offset + this.state.limit }, () => {
      this.getPokemonEntityRef();
      console.log(this.state.offset);
    });
  }

  getPokemonEntityRef() {
    PokemonService.getAll(this.state.offset, this.state.limit).then(
      response => {
        let oldList = this.state.pokemonRefList;
        let data = response.data;
        if (data.results) {
          for (let index = 0; index < data.results.length; index++) {
            const element = data.results[index];
            let list = element.url?.split('/') || [];
            console.log(list);

            element.id = list[list?.length - 2];
            element.imageUri = PokemonService.getOficialOfficialArtworkUri(
              element.id + '',
            );
            console.log(element.imageUri);
            oldList?.push(element);
          }
        }
        this.setState({ pokemonRefList: oldList });
        // setpokemonRefList(data.results);
        console.log(this.state.pokemonRefList?.length);
      },
    );
  }
}
