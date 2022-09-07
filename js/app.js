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
        }
    },
}


Vue.createApp(App).mount('#app')