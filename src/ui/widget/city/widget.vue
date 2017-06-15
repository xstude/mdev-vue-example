<template>
    <div class="city">
          <el-select v-model="provinceId"  placeholder="请选择" class="select-width">
          <el-option  v-for="item in provinceOptions"   :label="item.name"   :value="item.id"> </el-option>
        </el-select>
        <el-select v-model="cityId"  placeholder="请选择" class="select-width">
          <el-option v-for="item in cityOptions" :label="item.name"  :value="item.id"></el-option>
        </el-select>
    </div>
</template>
<style scoped>
    .city{
      float:left;
    }
    .select-width{
        float:left;
        width:120px;
        margin-right:20px;
    }
</style>
<script>
    module.exports = {
        props: ['provinces','citys'],
        data: function () {
            return {
                "provinceId": "",
                "provinceOptions": this.provinces,
                "cityId": "",
                "cityOptions": this.citys
            }
        },
        beforeMount: function () {

        },
        methods: {
            addForum: function () {
                this.addForumForm = true;
            }
        }
    };

</script>