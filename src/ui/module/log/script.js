module.exports = {
    beforeMount: function () {

    },
    methods: {
        search: function (curPage) {
            var page;
            parseInt(curPage) > 0 ? page = parseInt(curPage) : page = 1;
            this.curPage = page;
            //发送请求
            console.log(page);
        }
    }
};
