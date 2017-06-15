<template>
    <div class="msg">{{text}}</div>
</template>

<style scoped>
    .msg {
        font-size: 20px;
    }
</style>

<script>
    module.exports = {
        data: function () {
            return {
                text: 'demo'
            }
        },
        beforeMount: function () {
            console.log('beforeMount', this.text);
        }
    };
</script>
