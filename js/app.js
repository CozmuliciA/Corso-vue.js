const App = {
    data() {
        return {
            counter: 0,
            title: 'Elenco note',
            placeholderString: 'Inserire la nota',
            inputValue: '',
            notes: ['Nota 1', 'Nota 2']
        }
    },
    methods: {
        inputChangeHandler(event){
            this.inputValue = event.target.value
        },
        addNewNote(){
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        /*
        Non serve più perché abbiamo aggiunto l'evento direttamente nel html v-on:keypress.enter="addNewNote"
        inputKeyPress(event){
            //Aggiungiamo la nota premendo il tasto "Enter"
            if(event.key === "Enter"){
                this.addNewNote()
            }
        }*/
    },
}


Vue.createApp(App).mount('#app')