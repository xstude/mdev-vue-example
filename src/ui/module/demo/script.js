module.exports = {
    beforeMount: function () {
    },
    methods: {
        showName: function () {
            var _this = this;
            window.alert(_this.firstName);
        }
    }
};
