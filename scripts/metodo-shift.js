let playlist = ["funk", "hip-hop", "pop"];

console.log("antes do shift");
console.table(playlist);

// Removendo o primeiro estilo
let esriloRemovido = playlist.shift();

console.log("depois do shift");
console.table(playlist);

console.log("estiloRemovido: ", esriloRemovido);
