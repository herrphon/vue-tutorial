

Vue.component('coupon', {
    template: `
        <input placeholer="Enter your coupon code" @blur="onCouponApplied">
    `,
    data() {
        return {
            coupon: "foobar"
        };
    },
    methods: {
        onCouponApplied() {
            this.$emit('applied', this.coupon);
        }
    }
});



new Vue({
    el: '#root',

    methods: {
        onCouponApplied(coupon) {
            alert('It was applied with: ' + coupon);
        }
    }
});
