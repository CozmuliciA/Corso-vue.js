Vue.createApp({
    data: () => ({
        title: 'Titolo',
        myHTML: '<h2>Testo html scritto in JS</h2>',
        titleH3: 'Elenco',
    }),
}).mount('#app');