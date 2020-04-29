<html>
<head>
<link rel="stylesheet" type="text/css" href="readme.css">
</head>
<body>
</body>
<header>
<h1 style="text-align: center;">STW [Problemes]</h1>
<h2 style="text-align: center">node.js</h2>
<p id='noms' style="text-align: center; font-weight: bold;">Antonio Hurtado (NIU: 1358933)</p>
</header>
<div style="page-break-after: always;">
</div>
<div>
<p>
Aquesta entrega no ha sigut una fita d'una sola persona sinó que hi hem col·laborat dues persones per tal de portar-la a terme. El codi l'hem anat penjant a un repositori de lliure accès (GitHub) al que a continuació us facilitem l'enllaç:
</p>
<p>
<href>
<a href="https://github.com/tonioel/ProblemesSTW">Problemes STW</a>
</p>
<p>
Accedint al repositori no només us podreu descarregar el codi en zip i llest per executar sinó que, a més podreu anar veient el progrès que hem fet per arribar a les diferents solucions.
</p>
<div style="page-break-after: always;">
</div>
</div>
<div>
<h2 style="text-align: center">Índex</h2>
<ol>
<li><a href='#1'>Exercici 1</a></li>
<li><a href='#2'>Exercici 2</a></li>
<li><a href='#3'>Exercici 3</a></li>
<li><a href='#4'>Exercici 4</a></li>
<li><a href='#5'>Exercici 5</a></li>
<li><a href='#6'>Exercici 6</a></li>
<li><a href='#7'>Exercici 7</a></li>
<li><a href='#8'>Exercici 8</a></li>
<li><a href='#9'>Exercici 9</a></li>
<li><a href='#10'>Exercici 10</a></li>
<li><a href='#11'>Exercici 11</a></li>
<li><a href='#12'>Exercici 12</a></li>
<li><a href='#13'>Exercici 13</a></li>
<li><a href='#14'>Exercici 14</a></li>
<li><a href='#15'>Exercici 15</a></li>

</ol>
</div>
<div style="page-break-after: always;">
</div>
<h4 id='1'>Exercici 1</h4>

```javascript
var vm = new Vue({
    el: '#app',
    data: {
        counter: 0,
    },
    template: `<div>{{counter}}</div>`,
});

setInterval(() => vm.counter++, 100);
```
<h4 id='2'>Exercici 2</h4>

```javascript
var vm = new Vue({
    el: '#app',
    data: {
        a: 0,
        b: 0,
    },
    methods: {
      add: function () {
        return parseFloat(this.a) + parseFloat(this.b);
      }
    },
    template: `
        <div>
            <input v-model="a">
            <input v-model="b">
            {{add()}}
        </div>
    `,
});

setInterval(() => vm.counter++, 100);
```
<h4 id='3'>Exercici 3</h4>

```javascript
var vm = new Vue({
    el: '#app',
    data: {
        buttonShown: true,
    },
    template: `
        <div>
            <button v-if="buttonShown" v-on:click="buttonShown=false">Click me!</button>
        </div>
    `,
});
```
<h4 id='4'>Exercici 4</h4>

```javascript
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
```
<h4 id='5'>Exercici 5</h4>

```javascript
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
```
<h4 id='6'>Exercici 6</h4>

```javascript
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
```
<h4 id='7'>Exercici 7</h4>

```javascript
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
```
<h4 id='8'>Exercici 8</h4>

```javascript
var vm = new Vue({
    el: '#app',
    data: {
        items: [
            { name: 'Jaime Sommers', phone: '311-555-2368' },
            { name: 'Ghostbusters', phone: '555-2368' },
            { name: 'Mr. Plow', phone:'’636-555-3226' },
            { name: 'Gene Parmesan: Private Eye', phone: '555-0113' },
            { name: 'The A-Team', phone: '555-6162' },
        ],
    },

    watch: {

    },

    template: `
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Phone number</th>
                </tr>
                <tr v-for="item in items">
                    <td>{{item.name}}</td>
                    <td>{{item.phone}}</td>
                </tr>
            </table>
        </div>
    `,
});
```
<h4 id='9'>Exercici 9</h4>

```javascript
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
```
<h4 id='10'>Exercici 10</h4>

```javascript
var vm = new Vue({
    el: '#app',
    data: {
        items: [
            { name: 'Jaime Sommers', phone: '311-555-2368' },
            { name: 'Ghostbusters', phone: '555-2368' },
            { name: 'Mr. Plow', phone:'’636-555-3226' },
            { name: 'Gene Parmesan: Private Eye', phone: '555-0113' },
            { name: 'The A-Team', phone: '555-6162' },
        ],
    },

    methods: {
        deleteItem: function (index) {
            this.items.splice(index, 1);
        },
    },

    template: `
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Phone number</th>
                </tr>
                <tr v-for="(item, index) in items">
                    <td>{{item.name}}</td>
                    <td>{{item.phone}}</td>
                    <td><button @click="deleteItem(index)">Delete</button></td>
                </tr>
                <tr>
                </tr>
            </table>
        </div>
    `,
});
```
<h4 id='11'>Exercici 11</h4>

```javascript
Vue.component('words-to-list', {

    data: function () {
        return {
            wordsListSplit: this.words.split(' ')
        }
    },

    props: {
        words: String,
    },

    template: `
        <div>
            <ul>
                <li v-for="word in wordsListSplit" >{{word}}</li>
            </ul>     
        </div>`,

});

var vm = new Vue({
    el: '#app',

    template: `
        <div>
            <words-to-list id="words-to-list" words="Lorem ipsum dolor sit amet"> </words-to-list>
        </div>`,

});
```
<h4 id='12'>Exercici 12</h4>

```javascript
Vue.component('card', {

    props: ['personalData'],

    template: `
        <div class="card">
            <div>
                <img v-bind:src="personalData.picture">
            </div>
            <div>
                <h1>{{personalData.name}}</h1>
            </div>
            <div>{{personalData.email}}</div>
            <div>{{personalData.phone}}</div>
        </div>`,

});

var vm = new Vue({
    el: '#app',
    data: {
        person: {
            name: 'My Name',
            picture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM82Mz1HwAFqgJP3gasfwAAAABJRU5ErkJggg==',
            email: 'me@somerandomdomain.com',
            phone: '+00 00 000 0000',
        }
    },
    template: `
        <div style="display:flex;">
            <card id="card" v-bind:personal-data="person"></card>
        </div>
    `,
});
```
<h4 id='13'>Exercici 13</h4>

```javascript
Vue.component('switch-button', {

    data: function() {
        return {
            state: "off",
        }
    },

    methods: {
        on: function () {
            this.state = "on"
            this.$emit('on');
        },
        off: function () {
            this.state = "off"
            this.$emit('off');
        },
    },

    template: `
        <div style="border:solid; width: 89px">
            <button v-if="this.state==='off' || this.state===null" v-on:click="on()" >ON</button>
            <button v-if="this.state==='on'" disabled >ON</button>
            <button v-if="this.state==='on'" v-on:click="off()" >OFF</button>
            <button v-if="this.state==='off' || this.state===null" disabled>OFF</button>
        </div>
    `,

});

var vm = new Vue({
    el: '#app',
    data: {
        state: null
    },

    template: `
        <div>
            <switch-button 
                v-on:on="state='just turned on'"
                v-on:off="state='just turned off'"
            >
            </switch-button>
            {{state}}
        </div>`,
});
```
<h4 id='14'>Exercici 14</h4>

```javascript
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

```
<h4 id='15'>Exercici 15</h4>

```javascript
Vue.component('magic-input', {

    data: function () {
        return {
            magicText: '',
        }
    },

    props: ['value'],

    created: function() {
        this.magicText = this.value.replace(/./g, x => x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase());
    },

    watch: {
        value: function(){
            this.magicText = this.value.replace(/./g, x => x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase());
        },
        magicText: function() {
            this.$emit('input', this.magicText.replace(/./g, x => x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase()));
        }
    },

    template: `
        <input v-model="magicText">
    `,

});

var vm = new Vue({
    el: '#app',
    data: {
            text: "Hola"
    },
    template: `
        <div>
            <magic-input v-model="text"></magic-input>
            <input v-model="text">
            {{text}}
        </div>`,
});
```

</html>
