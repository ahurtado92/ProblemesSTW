Vue.component('words-to-list', {

    data: function () {
        return {
            wordsListSplit: this.words.split(' ')
        }
    },

    props: {
        words: String,
    },

    template: `
        <div>
            <ul>
                <li v-for="word in wordsListSplit" >{{word}}</li>
            </ul>     
        </div>`,

});

var vm = new Vue({
    el: '#app',

    template: `
        <div>
            <words-to-list id="words-to-list" words="Lorem ipsum dolor sit amet"> </words-to-list>
        </div>`,

});





