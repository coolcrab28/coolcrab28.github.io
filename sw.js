self.addEventListener('install', evt => {
    console.log('installed!');
});
////

self.addEventListener('activate', evt => {
    console.log('activated!');
});

self.addEventListener('fetch', evt =>  {
    console.log('fetched: ',evt)
})