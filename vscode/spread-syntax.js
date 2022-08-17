'use strict';

const pikachu = { name: 'Pikachu 🐭' };
const stats = { hp: 40, attack: 60, defense: 45 };

'Bad Object Code 💩'

pikachu['hp'] = stats.hp
pikachu['attack'] = stats.attack
pikachu['defense'] = stats.defense

// OR

const lvl0 = Object.assign(pikachu, stats);
const lvl1 = Object.assign(pikachu, { hp: 45 });

'Good Object Code ✅'

const lvl2 = { ...pikachu, ...stats };
const lvl3 = { ...pikachu, hp: 45 };
console.log(lvl3);

// Arrays
let pokemon = ['Arbo', 'Raichu', 'Sandshrew'];

'Bad Object Code 💩'

pokemon.push('Bulbasaur')
pokemon.push('Metapod')
pokemon.push('Weedle')
console.log(pokemon);

'Good Object Code ✅'

// Push
const pokemon1 = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle'];
console.log(pokemon1);

// Shift
const pokemon2 = ['Bulbasaur', 'Metapod', 'Weedle', ...pokemon];

console.log(pokemon2);