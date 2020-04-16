Vue.component('words-to-list', {

    data: function () {
        return {
            strings: [  ],
        }
    },
    mounted: function() {
        this.transform();
    },
    methods: {
        transform: function () {
            var wtl = document.getElementById('words-to-list');
            var words = wtl.getAttribute('words');
            this.strings = words.split(" ");
        }
    },

    template: `
        <div>
            <ul>
                <li v-for="string in strings" >{{string}}</li>
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





