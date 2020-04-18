Vue.component('switch-button', {

    data: function() {
        return {
            state: "off",
        }
    },


    methods: {
        on: function () {
            this.state = "on"
            this.$emit('on');
        },
        off: function () {
            this.state = "off"
            this.$emit('off');
        },
    },

    template: `
        <div style="border:solid; width: 89px">
            <button v-if="this.state==='off' || this.state===null" v-on:click="on()" >ON</button>
            <button v-if="this.state==='on'" disabled >ON</button>
            <button v-if="this.state==='on'" v-on:click="off()" >OFF</button>
            <button v-if="this.state==='off' || this.state===null" disabled>OFF</button>
        </div>
    `,

});

var vm = new Vue({
    el: '#app',
    data: {
        state: null
    },

    template: `
        <div>
            <switch-button 
                v-on:on="state='just turned on'"
                v-on:off="state='just turned off'"
            >
            </switch-button>
            {{state}}
        </div>`,
});


