module.exports = {
    beforeMount: function () {

    },
    methods: {
        addForum: function () {
            this.addForumForm = true;
        },
        saveForum: function () {
            var that = this;
            if (this.forumForm.forumID==="") {
                this.$notify.error({
                  title: '错误',
                  message: '请填加论坛ID',
                  duration: 2000
                });
                return;
            }
            console.log('submit');
            //成功后
            that.addForumForm = false;
            that.$notify({
              title: '成功',
              message: '填加论坛成功',
              type: 'success'
            });            
        },
        search: function (curPage) {
            var page;
            parseInt(curPage) > 0 ? page = parseInt(curPage) : page = 1;
            this.curPage = page;
            //发送请求
            console.log(page);
        },
        delForum: function (item, type) {
            var id = item.id, that = this;
            if(id===''){
                return;
            }
            that.$notify({
              title: '成功',
              message: '删除论坛成功',
              type: 'success'
            }); 
            //更新数据
            if(type===1) {
                 this.daohangList.forEach(function (item, i) {
                    if(item.id===id){
                        that.daohangList.splice(i, 1);
                    }
                });               
             }else if(type===2){
                 this.tuijianList.forEach(function (item, i) {
                    if(item.id===id){
                        that.tuijianList.splice(i, 1);
                    }
                });
             }
     
        }
    }
};
