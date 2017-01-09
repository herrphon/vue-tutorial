

Vue.component('coupon', {
    template: `
        <input placeholder="Enter your coupon code" @blur="onCouponApplied">
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
    data: {
        couponApplied: false
    },
    methods: {
        onCouponApplied(coupon) {
            // alert('It was applied with: ' + coupon);
            this.couponApplied = true;
        }
    }
});
