Vue.component('comp', {
    data: function() {
        return {
            text: "",
        }
    },
    watch: {
        text: function() {
            if (this.text == "yes") {
                this.$emit('text-is-yes', 'valor que tu vulguis');
            }
        }
    },
    template: `
        <div>
            <input type=text v-model="text"> {{text}}
        </div>
    `,
});



var vm = new Vue({
    el: '#app',
    methods: {
        something: function(x) {
            console.log('text was yes: ' + x);
        }
    },
    template: `
        <div>
            <comp v-on:text-is-yes="something($event)"></comp>
            <comp v-on:text-is-yes="something($event)"></comp>
        </div>
    `,
});
