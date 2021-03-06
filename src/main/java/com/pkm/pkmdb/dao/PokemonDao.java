package com.pkm.pkmdb.dao;

import com.pkm.pkmdb.object.Pokemon;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface PokemonDao {
    Pokemon getPokemonById(int id);
    List<Pokemon> getAllPokemon();
    List<Pokemon> searchPokemon(String keyword);
    Boolean addPokemon(Pokemon object);
    Boolean delPokemon(int id);
    Boolean upPokemon(Pokemon object);
    int getPokemonNum();
}
