var fn = function () {
    console.log('router changed.');
};

module.exports = {
    beforeMount: function () {
        console.log('$route', JSON.stringify(this.$route));
    },
    methods: {
        on: function () {
            var _this = this;
            _this.$router.on(fn);
        },
        off: function () {
            var _this = this;
            _this.$router.off(fn);
        }
    }
};
