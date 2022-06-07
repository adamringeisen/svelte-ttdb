import type { Dice, DiceResult } from 'dice-typescript';
import { writable } from 'svelte/store';


export const result  = writable<DiceResult>()