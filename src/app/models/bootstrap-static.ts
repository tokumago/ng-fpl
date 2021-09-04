import { Player } from "./player";

export interface BootstrapStatic {
    events: Array<Event>;
    game_settings: Settings;
    phases: Array <GameWeek>;
    teams: Array <Team>;
    total_players: number;
    elements: Array<Player>;
    element_stats: Array<Stats>
    element_types: Array<Position>
}
export interface Event {
    id: number
}
export interface Settings {
    id: number
}
export interface GameWeek {
    id: number
}
export interface Team {
    id: number
}
export interface Stats {
    id: number
}
export interface Position {
    id: number
}

