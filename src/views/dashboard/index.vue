<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">name: {{ name }}</div> -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span="16">
          <el-card>
            <div class="header" slot="header">企业新闻</div>
            <div>
              <el-row class="col" v-for="(item,index) in newsList" :key="index">
                <el-col :span="12">
                  <span class="spot"></span>
                  <a>{{item.news}}</a>
                </el-col>
                <el-col :span="12">
                  <div style="text-align:right">
                    <span style="color:#ccc;margin-right:10px">{{item.user}}</span>
                    <span style="color:#e5e5e5">[{{item.time}}]</span>
                  </div>
                </el-col>
              </el-row>              
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card style="height:220px">
            <div class="header" slot="header">企业格言</div>
            <div style="display:flex;flex-direction:column">
              <el-row class="motto">
                <h3 style="margin-top:5px">企业理念：</h3>
                <span>以人为本 以信为金</span>
              </el-row>
              <el-row class="motto">
                <h3>企业精神：</h3>
                <span>创新、负责、守信、努力</span>
              </el-row>
              <el-row class="motto">
                <h3>企业目标：</h3>
                <span>为员工、客户、股东、公众创造美好生活</span>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :span="16">
          <el-card>
            <div class="header" slot="header">桌面新闻</div>
            <div>
              <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in photos" :key="item">
                  <h3>{{ item }}</h3>
                  <!-- <img :src="'../../assets/indexpaomadeng/img_'+item+'.jpg'" alt="图片加载失败" style="b"> -->
                </el-carousel-item>
              </el-carousel>            
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card style="height:400px">
            <div class="header" slot="header">通讯录</div>
            <div>
              <el-input
                placeholder="搜索联系人"
                v-model="searchPeople"
                size='medium'
                suffix-icon='el-icon-search'
                clearable>
              </el-input>
              <div class="infinite-list-item" style="overflow:auto;height:280px">
                <div style="display: flex;padding:0 40px;justify-content: space-between;"> 
                  <span>姓名</span>
                  <span>职位</span>
                </div>
                <ul
                  class="list">
                  <li v-for="i in count" class="list-item" :key="i">{{ i }}</li>
                </ul>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :span="16">
          <el-card>
            <div class="header" slot="header">日历打卡</div>
            <div class="rili" style="position:relative">
              <el-calendar v-model="calendar">  
                <template
                  slot="dateCell"
                  slot-scope="{date, data}"
                >   
                <p :class="isSelected ? 'is-selected' : ''">
                  {{ data.day.split('-').slice(2).join(',') }} {{ isSelected ? '✔️' : ''}}
                </p>
                </template>           
              </el-calendar> 
              <div class="clock">
                <div style="font-size:18px">
                  <span>{{month}}/{{day}}</span>
                  <span style="margin-left:40px">星期{{week | weekFileter}}</span>
                  <p style="font-size:36px;margin:10px 0">{{hour}}:{{minute}}:{{second}}</p>
                </div>
                <el-button 
                  type="primary" 
                  round 
                  style="margin-left:20px;width:100px;"
                  @click="clock"
                >打卡</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card style="height:220px;text-align:center">
            <div class="header" slot="header" style="text-align:left">待办提醒</div>
              <el-row style="margin-top:20px">
                <el-col :span="11" class="waitDeal">
                  <el-button type="text">等待审批(10)</el-button>
                </el-col>
                <el-col :span="11" class="waitDeal" :offset="1">
                  <el-button type="text">等待阅读(10)</el-button>
                </el-col>
              </el-row>
              <el-row style="margin-top:20px">
                <el-col :span="11" class="waitDeal">
                  <el-button type="text">任务待办(10)</el-button>
                </el-col>
                <el-col :span="11" class="waitDeal" :offset="1">
                  <el-button type="text">日程待办(10)</el-button>
                </el-col>
              </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { findAll } from '@/api/user.js'
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ]),
  },
  data(){
    return{
      newsList:[{
        news:'喜讯：我公司今年的年中奖为一千万人民币！',
        user:'chang',
        time:'2020-2-10'
      },{
        news:'喜讯：我公司今年的年中奖为一千万人民币！',
        user:'rao',
        time:'2020-3-10'
      },{
        news:'喜讯：我公司今年的年中奖为一千万人民币！',
        user:'chun',
        time:'2020-6-10'
      },{
        news:'喜讯：我公司今年的年中奖为一千万人民币！',
        user:'chun',
        time:'2020-7-10'
      },{
        news:'喜讯：我公司今年的年中奖为一千万人民币！',
        user:'chun',
        time:'2020-8-10'
      }],
      photos:[1,2,3,4,5],
      searchPeople:'',
      count: 100,
      loading: false,
      calendar:new Date(),
      setIntervalId:'',
      month:'',
      day:'',
      week:'',
      hour:'',
      minute:'',
      second:'',
      isSelected:false
    }
  },
  created(){
    this.init()   
  },
  // watch: {
  //   second(newval,oldval){
  //       console.log(this.second)
  //   },
  // },
  methods:{
    init(){
      this.setIntervalId=setInterval(()=>{
        var date=new Date();
        var year=date.getFullYear(); //获取当前年份
        var mon=date.getMonth()+1; //获取当前月份
        mon=mon<10?'0'+mon:mon
        var da=date.getDate(); //获取当前日
        da=da<10?'0'+da:da
        var day=date.getDay(); //获取当前星期几
        var h=date.getHours(); //获取小时
        h=h<10?'0'+h:h
        var m=date.getMinutes(); //获取分钟
        m=m<10?'0'+m:m
        var s=date.getSeconds(); //获取秒
        s=s<10?'0'+s:s
        this.month=mon
        this.day=da
        this.week=day
        this.hour=h
        this.minute=m
        this.second=s
        //console.log('当前时间:'+year+'年'+this.month+'月'+this.day+'日'+'星期'+this.week+' '+this.hour+':'+m+':'+this.second)
        },1000) 
      //console.log(timestamp)
    },
    clock(){
      console.log(this.calendar)
    }
  },
  destroyed(){
    clearInterval(this.setIntervalId)
  },
  filters:{
    weekFileter(value){
      switch(value){
        case 0:
          return '日'
          break;
        case 1:
          return '一'
          break;
        case 2:
          return '二'
          break;
        case 3:
          return '三'
          break;
        case 4:
          return '四'
          break;
        case 5:
          return '五'
          break;
        case 6:
          return '六'
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.header{
  padding: 10px;     
}
.spot{
  display: inline-block;
  width: 5px;
  height: 5px;
  background-color: #000;
  border-radius: 50%;
  vertical-align: middle;
  margin-top: -4px;
  margin-right: 10px;
}
.col{
  border-bottom: 1px dashed #ccc;
  height: 30px;
  line-height: 30px; 
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
}
.col:last-child{
  border: none;
}
.col a:hover{
  color: blue;
}
.dashboard-container>>>.el-card__header{
  padding: 0;
  background-color: #EBEEF5;
}
.dashboard-container>>>.el-card__body{
  padding: 15px;
}
.motto{
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow: hidden;
  border-bottom: 1px dashed #ccc;
  h3{
    display: inline-block;
    font-size: 16px;
  }
}
.motto:last-child{
  border: none;
}
.infinite-list-item{
  position: relative;
  list-style: none;
  margin-top: 15px;
  .list-item{
    list-style: none;
  }
  &::-webkit-scrollbar {
    width: 5px; /*对垂直流动条有效*/
    height: 10px; /*对水平流动条有效*/
    }
  }
  ::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: rosybrown;
    border-radius: 3px;
  } 
  ::-webkit-scrollbar-thumb{
    border-radius: 7px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: orange;   
  }
  ::-webkit-scrollbar-button {
    //background-color:cyan;
  }
  ::-webkit-scrollbar-corner {
    background:khaki;    
  }
  .rili >>> .el-calendar-day{
    height: 40px;
    line-height:0px;
  }
  .rili >>> .el-calendar-table{
    width: 74%;
    text-align: center;
    //margin: 0 auto;
    thead{
      background-color: #ccc;
    }
  }
  .clock{
    position:absolute;
    top:65px;
    right:2%;
    width:200px;
  }
  .is-selected {
    color: #1989FA;
  }
  .waitDeal{
    background-color: #ecf5ff;
    border-radius: 8px;

  }
</style>
