var vm = new Vue({
    el: '#app',
    data: {
        a: "false",
        b: "false",
        c: "false",
    },

    watch: {
        a: function () {
            this.b = this.a.toString();
            this.c = this.b.toString();
        }
    },

    template: `
        <div>
            <input type="checkbox" id="checkbox" name="checkbox" value="true" v-model="a"  />
            <label for="check"> {{a + " " + b + " " + c}} </label><br>
        </div>
    `,
});

document.getElementById("checkbox").checked = false;

