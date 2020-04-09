var vm = new Vue({
    el: '#app',
    data: {
        state: 0,
    },

    methods: {
        changeState: function () {
            if (this.state == 0) {
                this.state = 1;
            } else {
                if (this.state == 1){
                    this.state = 2;
                } else {
                    this.state = 0;
                }
            }
        }
    },

    template: `
        <div>
            <div style="display: inline-block; width:30px;">
            
                <div v-if="state == 2" style="height: 30px; background-color: red"></div>
                <div v-else="state == 2" style="height: 30px; background-color: indianRed"></div>
                
                <div v-if="state == 1" style="height: 30px; background-color: yellow"></div>
                <div v-else="state == 1" style="height: 30px; background-color: khaki"></div>
                
                <div v-if="state == 0" style="height: 30px; background-color: lawngreen"></div>
                <div v-else="state == 0" style="height: 30px; background-color: seagreen"></div>
                
                <input type="button" @click="changeState" value="Switch" >
                
            </div>
        </div>
    `,
});


