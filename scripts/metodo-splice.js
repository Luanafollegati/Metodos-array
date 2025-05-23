let playlist = ["funk", "hip-hop", "pop", "rock", "jazz"];

console.log("Antes do splice:");
console.table(playlist);

// Removendo 2 elementos a partir do indice 2
let elementosRemovidos = playlist.splice(2, 2);

console.log("Depois do splice:");
console.table(playlist);

console.log("Elementos removidos:", elementosRemovidos);
