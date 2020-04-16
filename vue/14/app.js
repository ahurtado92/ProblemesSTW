Vue.component('color-selector', {

    template: `
        <div style="border:solid; display:flex;">
            <div style="background-color:#000; width:110px; height:110px;"></div>
            <div style="display:flex; flex-direction:column; padding:10px;">
                <div>R: <input type="range" min=0 max=255> red value</div>
                <div>G: <input type="range" min=0 max=255> green value</div>
                <div>B: <input type="range" min=0 max=255> blue value</div>
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
    <div style="border:solid red; display:flex;">
        <color-selector v-on:color="color = $event"></color-selector>
        <div v-bind:style="'color:' + color">TEXT</div>
    </div>`,
});


