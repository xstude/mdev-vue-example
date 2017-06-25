module.exports = {
    beforeMount: function () {
        var _this = this;
        _this.firstName = 'value from beforeMount!'
    },
    methods: {
        showName: function () {
            var _this = this;
            window.alert(_this.firstName);
        },
        showDialog: function () {
            var _this = this;
            _this.$router.pushState('/demo/dialog/dialog-demo');
        }
    }
};
