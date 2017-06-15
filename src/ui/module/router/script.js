module.exports = {
    beforeMount: function () {
    },
    methods: {
        showName: function () {
            var _this = this;
            _this.firstName = JSON.stringify(_this.$route);
        }
    }
};
