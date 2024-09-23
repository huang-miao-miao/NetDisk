<template>
  <div class="index">
    <div class="title">
      <div class="left">
        <i class="iconfont icon-wangpan"></i>
      <span>NetDisk</span>
      </div>
      <div class="right">
        <i class="iconfont icon-paixu"></i>
        <span>admin</span>
      </div>
    </div>
    <div class="layout">
        <div class="left">
          <ul>
            <li>
              <i class="iconfont icon-shouye"></i>
              <span>首页</span>
            </li>
            <li>
              <i class="iconfont icon-JC_054"></i>
              <span>分享</span>
            </li>
            <li>
              <i class="iconfont icon-icon"></i>
              <span>回收站</span>
            </li>
            <li>
              <i class="iconfont icon-shezhi"></i>
              <span>设置</span>
            </li>
          </ul>
        </div>
        <div class="center">
          <ul>
            <li>
              <i class="iconfont icon-all"></i>
              <span>设置</span>
            </li>
            <li>
              <i class="iconfont icon-shipin"></i>
              <span>视频</span>
            </li>
            <li>
              <i class="iconfont icon-yinpin"></i>
              <span>音频</span>
            </li>
            <li>
              <i class="iconfont icon-tupian"></i>
              <span>图片</span>
            </li>
            <li>
              <i class="iconfont icon-wenjian"></i>
              <span>文档</span>
            </li>
            <li>
              <i class="iconfont icon-qita"></i>
              <span>其他</span>
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="top">
            <el-button type="primary">
              上传
            </el-button>
            <el-button type="primary">
              新建文件夹
            </el-button>
            <el-button type="primary">
              批量删除
            </el-button>
            <el-button type="primary">
              批量移动
            </el-button>
            <i class="iconfont shuaxin"></i>
          </div>
          <div class="button"></div>
          我在右
        </div>
    </div>
  </div>
</template>

<script setup>
  
</script>

<style lang="scss" scoped>
  .index {
    position : absolute;
	  width : 100%;
	  height : 100%;
    display: flex;
    flex-direction: column;
    .title{
        flex:1;
        display: flex;
        padding: 0 30px;
        align-items: center;
        justify-content: space-between;
        box-shadow: 2px 2px 2px #888888;
        .left {
          display: flex;
          justify-content: center;
          align-items: center;
          .iconfont {
            padding-left: 18px;
            color: blue;
            font-size: 70px;
          }
          span {
            font-size: 38px;
            padding-left: 12px;
            text-align: center;
            color: blue;
            display: block;
          }
        }
        .right {
          display: flex;
          justify-content: center;
          align-items: center;
          .iconfont {
            font-size: 50px;
            padding-right: 18px;
          }
          padding-right: 30px;
        }
    }
    .layout {
        flex: 8;
        display: flex;
        .left {
          box-shadow: 2px 2px 2px #888888;
          flex: 1;
          ul {
            li {
              height: 150px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-size: 18px;
              cursor: pointer;
              .iconfont {
                font-size: 35px;
              }
              // .iconfont:hover {
              //   color: blue;
              // }
            }
          }
        }
        .center {
          flex: 1.5;
          box-shadow: 2px 2px 2px #888888;
          ul {
            margin-top: 50px;
            li {
              font-size: 20px;
              display: flex;
              padding: 40px 0;
              align-items: center;
              justify-content: center;
              // background-color: skyblue;
              height: 50px;
            }
          }
        }
        .right {
          flex: 8;
        }
        // background-color: blue;
    }
  }
</style>