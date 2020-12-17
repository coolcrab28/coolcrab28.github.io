if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then((reg) => console.log('done!',reg))
    .catch((err) => console.log('noooo',err));
}
