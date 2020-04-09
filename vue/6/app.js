var vm = new Vue({
    el: '#app',
    data: {
      redness: '',
      activeColor: 'hsl(0,' + this.redness+ '%,50%)' ,
    },
    template: `
        <div>
            <!--<div v-bind:style="color: hsl(0,'{{redness}}'%,50%)">AM I RED?</div>-->
            <div v-bind:style="{ color: activeColor }" >AM I RED?</div>
            <input type="range" min="1" max="100" v-model="redness">
            <div v-if="redness >= 70">YES!</div>
        </div>
    `,
});

