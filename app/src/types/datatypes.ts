/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Pokemon {
    abilities: Ability[]
    height: number
    id: number
    moves: Moves[]
    name: string
    order: number
    species: Species
    sprites: Sprites
    stats: Stats[]
    types: Types[]
    weight: number
  }
  
  export interface Ability {
    name: string
    url: string
  }
  
  export interface Moves {
    name: string
    url: string
  }
  
  export interface Species {
    name: string
    url: string
  }
  
  export interface Sprites {
    front_default: string
    other: Other
  }
  
  export interface Other {
    dream_world: DreamWorld
  }
  
  export interface DreamWorld {
    front_default: string
  }

  
  export interface Stats {
    base_stat: number
    effort: number
    stat: Stat
  }
  
  export interface Stat {
    name: string
    url: string
  }
  
  export interface Types {
    slot: number
    type: Type
  }
  
  export interface Type {
    name: string
    url: string
  }