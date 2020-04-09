var vm = new Vue({
    el: '#app',
    data: {
      styleVar: "",
    },
    template: `
        <div>
            <input 
                v-on:keydown="styleVar='background-color: red;'" 
                v-on:keyup="styleVar=''" 
                v-bind:style="styleVar"
            >
        </div>
    `,
});

