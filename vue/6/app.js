var vm = new Vue({
    el: '#app',
    data: {
        redness: 80,
        activeColor: '' ,
    },

    mounted: function() {
        this.activeColor = 'hsl(0,'+this.redness+'%,50%)';
    },

    watch: {
        redness: function () {
            this.activeColor = 'hsl(0,'+this.redness+'%,50%)';
        }
    },

    template: `
        <div>
            <div v-bind:style="{ color: activeColor }" >AM I RED?</div>
            <input type="range" min="0" max="100" v-model="redness">
            <div v-if="redness >= 70">YES!</div>
        </div>
    `,
});