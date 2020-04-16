Vue.component('switch-button', {

    props: ['state'],

    template: `
        <div style="border:solid;">
            <button>ON</button>
            <button disabled>OFF</button>
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


