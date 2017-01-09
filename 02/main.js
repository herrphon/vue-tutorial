
Vue.component('task-list', {
    // use backticks for multiline strings (ES6)
    template: `
        <ul>
            <task v-for="task in tasks">{{ task.task }}</task>
        </ul>
    `,
    
    data() {
        return {
            tasks: [
                { task: 'Go to the store', completed: true },
                { task: 'Go to the email', completed: false }
            ]
        }
    }
});

Vue.component('task', {
    template: '<li>{{ message }} - <slot></slot></li>',
    
    // there can be multiple components hence data has to be a init function:
    data() {
        return {
            message: 'foobar'
        };
    }
});


new Vue({
    el: '#root'
});

