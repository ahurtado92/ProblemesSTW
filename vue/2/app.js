var vm = new Vue({
    el: '#app',
    data: {
        a: 0,
        b: 0,
    },
    methods: {
      add: function () {
        return parseFloat(this.a) + parseFloat(this.b);
      }
    },
    template: `
        <div>
            <input v-model="a">
            <input v-model="b">
            {{add()}}
        </div>
    `,
});

setInterval(() => vm.counter++, 100);