import { usePokemonStore } from '../../store/store';
import Card from './Card';
import { useEffect } from 'react';

export default function Herosection() {
  const fetchPokemon = usePokemonStore((state) => state.fetchPokemon);
    const fetchDetails = usePokemonStore((state) => state.fetchDetails);
    const filterCards = usePokemonStore((state) => state.filterCards);
    const pokemon = usePokemonStore((state) => state.pokemon);
    const search = usePokemonStore((state) => state.search);
     useEffect(() => {
        const limit = 200;
        fetchPokemon(limit); // Fetch all pokemon once
    }, [fetchPokemon]);

    // Fetch details when pokemon list changes
    useEffect(() => {
        if (pokemon.length === 0) return;
        fetchDetails();
    }, [pokemon, fetchDetails]);

    // Filter cards when search changes (no API call, just local filtering)
    useEffect(() => {
        filterCards(search);
    }, [search, filterCards]);

  const cardsData = usePokemonStore((state) => state.cardsData);
  return (
    <div className=" relative top-5 max-h-160 overflow-scroll mt-4 min-w-full p-3 flex flex-wrap justify-center gap-8  xl:justify-around items-center mb-4 border-t border-amber-50 ">
        {cardsData.length === 0 && (
            <div className="text-white text-center mt-20">
                Loading...
            </div>
        )}
        {cardsData.map((data, index) => (
            <Card
                key={index}
                imageUrl={data.imageUrl}
                details={data.details}
            />
        ))}
    </div>
  )
}
