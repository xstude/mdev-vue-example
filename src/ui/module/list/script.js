module.exports = {
    beforeMount: function () {

    },
    methods: {
        delList: function (id) {
            var that = this;
            if(id==""){
              return;
            }
             that.$notify({
              title: '成功',
              message: '删除主题论坛成功',
              type: 'success'
            });  

            this.forumDataList.forEach(function (item, i) {
              if(item.id===id){
                  that.forumDataList.splice(i, 1);
              }
            });            
        },
        edit: function (item) {
            this.forumListDialog = true;
            this.listForm = item;
        },
        search: function (curPage) {
            var page;
            parseInt(curPage) > 0 ? page = parseInt(curPage) : page = 1;
            this.curPage = page;
            //发送请求
            console.log(page);
        },
        handleRemove: function(file, fileList) {
            //console.log(file, fileList);
        },
        handlePreview: function(file) {
            //console.log(file);
        },
        addForum: function () {
            this.forumListDialog = true;
        },
        saveTopicForum: function () {
            var that = this;
            //判断必填项
            if (this.listForm.headImg == "") {
                this.$notify.error({
                  title: '错误',
                  message: '请上传论坛头像',
                  duration: 2000
                });
                return;
            }
            if (this.listForm.name == "") {
                this.$notify.error({
                  title: '错误',
                  message: '请填写论坛名称',
                  duration: 2000
                });
                return;
            }
            if(this.forumType=="0") {
                if (this.listForm.cityId == "") {
                    this.$notify.error({
                      title: '错误',
                      message: '请选择论坛城市',
                      duration: 2000
                    });
                    return;
                }
            } else {
                if (this.listForm.lpId == "") {
                    this.$notify.error({
                      title: '错误',
                      message: '请填写楼盘ID',
                      duration: 2000
                    });
                    return;
                } 
            }   
            if (this.listForm.content === "") {
                this.$notify.error({
                  title: '错误',
                  message: '请填写论坛描述',
                  duration: 2000
                });
                return;
            }
            //上传数据 
        }
    }
};
