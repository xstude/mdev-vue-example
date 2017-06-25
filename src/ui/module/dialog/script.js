module.exports = {
    mounted: function () {
        var _this = this;
        var resize = function () {
            var boxch = parseInt(_this.$el.querySelector('.box').children[0].clientHeight);
            var bch = window.document.documentElement.clientHeight;

            if (boxch >= bch) {
                _this.overflow = true;
                _this.bch = bch + 'px';
                window.document.body.scrollTop = 0;
            } else {
                _this.overflow = false;
                _this.bch = 'auto';
            }
        };
        window.addEventListener('resize', resize);
        window.setTimeout(resize);
        _this.$router.on(function () {
            if (_this.$route.path.match(/^\/dialog/)) {
                window.setTimeout(resize);
            }
        });
    },
    methods: {
    }
};
