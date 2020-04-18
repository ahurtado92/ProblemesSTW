Vue.component('color-selector', {

    data: function(){
        return {
            r: "0",
            g: "0",
            b: "0",
            c: "",
        }
    },

    mounted: function() {
        this.c = "rgb("+this.r+","+this.g+","+this.b+")"
    },

    watch: {
        r: function () {
            this.c = "rgb("+this.r+","+this.g+","+this.b+")"
            this.$emit('color',this.c);
        },
        g: function () {
            this.c = "rgb("+this.r+","+this.g+","+this.b+")"
            this.$emit('color',this.c);
        },
        b: function () {
            this.c = "rgb("+this.r+","+this.g+","+this.b+")"
            this.$emit('color',this.c);
        },
    },



    template: `
        <div style="border:solid; display:flex;">
            <div v-bind:style="'background-color:' + c +'; width:110px; height:110px;'"></div>
            <div style="display:flex; flex-direction:column; padding:10px;">
                <div>R: <input type="range" min=0 max=255 v-model="r"> red value</div>
                <div>G: <input type="range" min=0 max=255 v-model="g"> green value</div>
                <div>B: <input type="range" min=0 max=255 v-model="b"> blue value</div>
            </div>
        </div>
    `,

});

var vm = new Vue({
    el: '#app',
    data: {
            color: null
    },
    template: `
        <div style="border:solid red; display:flex; width: 600px">
            <color-selector v-on:color="color = $event"></color-selector>
            <div v-bind:style="'color:' + color">TEXT</div>
        </div>`,
});


