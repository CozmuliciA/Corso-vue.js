const app = Vue.createApp({
    //template: '<h1>I am the template (js)</h1>'
    data: () => ({
        h2: 'I am H2 (js)',
        person: {
            firstName: "Aurel",
            lastName: "Cozmulici",
            age: 29
        }
    }),
    methods: {},
})

app.mount('#app')