var vm1 = new Vue({
    el: '#app1',
    data: {
        title: 'The Vue Instance',
        showParagraph: false
    },
    methods: {
        show: function() {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instanced (Updated)');
        },
        updateTitle: function(title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function() {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function(value) {
            console.log('Title changed, new value: ' + value);
        }
    }

});

vm1.newProp = "New!";
console.log(vm1);

setTimeout(() => {
    vm1.title = "Changed by Timer";
}, 3000);

var vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'Second Vue Instance'
    },
    methods: {
        onChange: function() {
            vm1.title = "Changed from VM2";
        }
    }
});
