var vm = new Vue({
    el: '#app',
    data: {
      redness: "",
    },
    template: `
        <div>
            <div v-bind:style="color: hsl(0,'{{redness}}'%,50%)">AM I RED?</div>
            <input type="range" min="1" max="100">
            <div v-if="">YES!</div>
        </div>
    `,
});

