
Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }">
                        <a :href="tab.href" @click="selectTab(tab)"> {{ tab.name }} </a>
                    </li>
                </ul>
            </div>
            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,
    data() {
        return {
            tabs: []
        };
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    },
    created() {
        this.tabs = this.$children;
    }
});

Vue.component('tab', {
    props: {
        name: { required: true },
        selected: { default: false }
    },
    
    data() {
        return {
            isActive: false
        };
    },
    
    mounted() {
        this.isActive = this.selected;
    },
    
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },
    
    template: `
        <div v-show="isActive">
            <slot></slot>
        </div>
    `
});

new Vue({
    el: '#root'
});


