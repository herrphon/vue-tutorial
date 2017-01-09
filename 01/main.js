
var app = new Vue({
    el: '#root',
    
    data: {
        message: 'Hello World',
        tasks: [
            { description: 'Go to the store', completed: true },
            { description: 'Finish Screencast', completed: false }            
        ]
    },
    
    // computed values
    computed: {  
        reversedMessage() {
            return this.message.split('').reverse().join('');
        },
        incompleteTasks() {  // ES6 aka ES2015 Syntax:
            return this.tasks.filter(task => ! task.completed);
        }
    },

    methods: {
        toggleLoading() {
            console.log("do something");
        }
    }

});


