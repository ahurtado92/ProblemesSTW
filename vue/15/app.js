Vue.component('magic-input', {

    data: function () {
        return {
            magicText: '',
        }
    },

    props: ['value'],

    created: function() {
        this.magicText = this.value.replace(/./g, x => x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase());
    },

    watch: {
        value: function(){
            this.magicText = this.value.replace(/./g, x => x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase());
        },
        magicText: function() {
            this.$emit('input', this.magicText.replace(/./g, x => x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase()));
        }
    },

    template: `
        <input v-model="magicText">
    `,

});

var vm = new Vue({
    el: '#app',
    data: {
            text: "Hola"
    },
    template: `
        <div>
            <magic-input v-model="text"></magic-input>
            <input v-model="text">
            {{text}}
        </div>`,
});


