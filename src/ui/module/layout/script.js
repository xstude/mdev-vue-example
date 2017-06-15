module.exports = {
    beforeMount: function () {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.mheight = window.document.documentElement.clientHeight - 60
        });
        _this.mheight = window.document.documentElement.clientHeight - 60;
    },
    methods: {
    }
};
