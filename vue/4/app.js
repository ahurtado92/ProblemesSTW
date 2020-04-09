var vm = new Vue({
    el: '#app',
    data: {
        text: "",
    },
    watch: {
      text: function () {
        if(this.text.length >= 5) {
            this.text = "";
        }
      }
    },
    template: `
        <div>
            <input v-model="text">
        </div>
    `,
});

