module.exports = {
    beforeMount: function () {
    },
    methods: {
        showList: function (type) {
            if(type==0){
                this.clicked = 0;
            }else if(type==1){
                this.clicked = 1;
            }
            this.search();
        },
        search: function (curPage) {
            var page;
            parseInt(curPage) > 0 ? page = parseInt(curPage) : page = 1;
            this.curPage = page;
            //发送请求
            console.log(page);
        },
        operate: function (id, type) {
          var txt = "成";
          if ( type=== 1){
            txt += "恢复";
          } else if(type===2) {
            txt += "封禁";
          }
          this.$notify({
            title: '成功',
            message: '成功' + txt + '贴子',
            type: 'success'
          });
          this.topicDataList.forEach(function (item) {
              if(item.id === id) {
                  item.status = txt;
              }
          });
        },
    }
};
