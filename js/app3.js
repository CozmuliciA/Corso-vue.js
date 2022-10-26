const app = Vue.createApp({
    //template: '<h1>I am the template (js)</h1>'
    data: () => ({
        h2: 'I am H2 (js)',
        person: {
            firstName: "Aurel",
            lastName: "Cozmulici",
            age: 29
        },
        person2: {
            firstName: "John",
            lastName: "Smith",
            age: 35
        },
    }),
    methods: {
        changePerson(){
            this.person = this.person2;           
            /*
            Uguale al commando di sopra
            this.person.firstName = this.person2.firstName;
            this.person.lastName = this.person2.lastName;
            this.person.age = this.person2.age;
            */
            console.log("change person");
        }
    },
})

app.mount('#app')