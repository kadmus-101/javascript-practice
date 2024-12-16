const planets = new Map();

planets.set( 1, 'mercury');
planets.set( 2, 'venus');
planets.set( 3, 'earth');
planets.set( 4, 'mars');

if (planets.has(4)) {
    console.log(planets.get(4))
} else {
    console.log('no')
}

// remember to use keys, to check if a value exits
