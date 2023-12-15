export type CharacterAPIRest = {
    id: number;
    name: string;
    episode: string[];
};

export type Character = {
    id: number;
    name: string;
    episode: Episode[];
};

export type EpisodeAPIRest = {
    id: number;
    name: string;
    characters: string[];
};

export type Episode = {
    id: number;
    name: string;
    characters: Character[];
};