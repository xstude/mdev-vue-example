module.exports = {
    beforeMount: function () {
    },
    methods: {
        doAction: function () {
            var _this = this;
            var request = require('lib-request');
            request.ajax({
                url: 'http://adv-fe.focus-dev.cn/api/demander/info/header',
                data: { a: 1, b: 2 },
                withCredentials: true,
                type: 'POST',
                complete: function (data) {
                    _this.text = JSON.stringify(data);
                }
            });
        }
    }
};
