Vue.component('magic-input', {

    template: `
    `,

});

var vm = new Vue({
    el: '#app',
    data: {
            text: "Hola"
    },
    template: `
        <div>
            <magic-input v-model="text" id="name"></magic-input>
            <input v-model="text">
            {{text}}
        </div>`,
});


