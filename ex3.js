const theForge = new Map();

theForge.set('gendre', ['Drama', 'Christian']);
theForge.set('Duration', '2hours');
theForge.set('Year of release', 2024);

//iterating over keys

for (const key of theForge.keys()) {
    console.log('Key:', key)
}

//iterating over values
for (const values of theForge.values()){
    console.log('values:', values)
}

// iterating over key-value pairs using foreach
theForge.forEach((value, key) => {
    console.log(`${key} => ${value}`)
})

//iterating over entries (key-value pairs)
for (const [key, value] of theForge.entries()) {
    console.log(`${key} => ${value}`);
}