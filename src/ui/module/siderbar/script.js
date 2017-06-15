module.exports = {
    beforeMount: function () {
    },
    methods: {
        jumpUrl: function(string) {
            this.$router.pushState(string);
        }
    }
};
