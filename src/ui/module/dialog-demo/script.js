module.exports = {
    beforeMount: function () {
    },
    methods: {
        close: function () {
            var _this = this;
            _this.$router.pushState('/demo');
        }
    }
};
