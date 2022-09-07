const App = {
    data() {
        return {
            counter: 0,
            title: 'Elenco note',
            placeholderString: 'Inserire la nota',
            inputValue: ''
        }
    }
}


Vue.createApp(App).mount('#app')