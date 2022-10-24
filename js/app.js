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
            if(this.inputValue !== ""){
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }            
        },
        doubleCount() {
            console.log('doubleCount')
            return this.notes.length * 2;
        },
        capitalize(item){
            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }

            return capitalizeFirstLetter(item)
        },
        toUpperCase(item){
            
            return item.toUpperCase()
        },
        
        removeNote(id){
            this.notes.splice(id,1)
        }
        /*
        Non serve più perché abbiamo aggiunto l'evento direttamente nel html v-on:keypress.enter="addNewNote"
        inputKeyPress(event){
            //Aggiungiamo la nota premendo il tasto "Enter"
            if(event.key === "Enter"){
                this.addNewNote()
            }
        }*/
    },
    computed: {
        /* È stato ottimizzato il metodo doubleCount().
           In questo modo doubleCountComputed verrà 
           attivato solamente se ci sono modifiche.
        */
        doubleCountComputed() {
            console.log('doubleCountComputed')
            return this.notes.length * 2;
        }
    }
}


Vue.createApp(App).mount('#app')