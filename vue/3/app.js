var vm = new Vue({
    el: '#app',
    data: {
        buttonShown: true,
    },
    template: `
        <div>
            <button v-if="buttonShown" v-on:click="buttonShown=false">Click me!</button>
        </div>
    `,
});

