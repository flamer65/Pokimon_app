import { create } from "zustand";
import { type CardDetail, type Pokemon } from "../types/types";
import axios from "axios";
type pokemonStore = {
    pokemon: Pokemon[];
    isLoading: boolean;
    search: string | number;
    error: string | null;
    imageUrl: string;
    allCardsData: CardDetail[]; // original unfiltered data
    cardsData: CardDetail[]; // filtered data for display
    abilities: string[];
    types: string[];
    fetchPokemon: (limit: number) => Promise<void>;
    fetchDetails: () => Promise<void>;
    filterCards: (search: string | number) => void;
    setSearch: (search: string | number) => void;
};

export const usePokemonStore = create<pokemonStore>((set, get) => ({
    pokemon: [],
    isLoading: false,
    search: "",
    error: null,
    abilities: [],
    types: [],
    imageUrl: "",
    allCardsData: [],
    cardsData: [],
    fetchPokemon: async (limit: number) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
            );
            const data = response.data;
            set({ pokemon: data.results, isLoading: false });
        } catch {
            set({ error: "Failed to fetch pokemon", isLoading: false });
        }
    },
    fetchDetails: async () => {
        const promises = get().pokemon.map(async (poke) => {
            const res = await axios.get(poke.url);
            const data = res.data;
            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;

            set({
                abilities: data.abilities.map(
                    (ability: { ability: { name: string } }) =>
                        ability.ability.name
                ),
            });
            set({
                types: data.types.map(
                    (type: { type: { name: string } }) => type.type.name
                ),
            });
            return {
                imageUrl: image,
                details: [
                    {
                        id: poke.name,
                        category: "Name",
                        value: poke.name,
                    },
                    {
                        id: get().abilities[0] || "ability",
                        category: "Ability",
                        value: get().abilities.join(" , "),
                    },
                    {
                        id: get().types[0] || "type",
                        category: "Type",
                        value: get().types.join(" , "),
                    },
                ],
            };
        });
        const results = await Promise.all(promises);
        set({ allCardsData: results, cardsData: results });
    },
    filterCards: (search: string | number) => {
        // If search is empty, show all cards
        if (search === "" || search === 0) {
            set({ cardsData: get().allCardsData });
            return;
        }
        // Filter from original data, not the already-filtered data
        const filter: CardDetail[] = get().allCardsData.filter(
            (card) => card.details[2]?.value?.split(",")[0]?.trim() === search
        );
        set({ cardsData: filter });
    },
    setSearch: (search: string | number) => set({ search }),
}));
