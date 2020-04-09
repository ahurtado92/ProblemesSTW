var vm = new Vue({
    el: '#app',
    data: {
        counter: 0,
    },
    template: `<div>{{counter}}</div>`,
});

setInterval(() => vm.counter++, 100);