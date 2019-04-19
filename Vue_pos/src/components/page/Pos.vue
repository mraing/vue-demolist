<template>
  <div class="pos">
    <div>
      <el-row >
        <el-col :span='7' id="order-list" class="pos-order">
          <el-tabs class="tabs-box">
            <el-tab-pane label="点餐">
              <el-table :data="tableData" border style="width: 100%" >
                <el-table-column prop="goodsName" label="商品"></el-table-column>
                <el-table-column prop="count" label="量" width="50"></el-table-column>
                <el-table-column prop="price" label="金额" width="70"></el-table-column>
                <el-table-column  label="操作" width="100" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="delSingGoods(scope.row)">删除</el-button>
                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="totalDiv">
                <small>数量：</small>{{totalCount}} &nbsp;&nbsp;&nbsp;&nbsp; <small>金额：</small>{{totalMoney}} <small>元</small>
              </div>
              <div class="pay-btn">
                <el-button type="warning" size="small">挂单</el-button>
                <el-button type="danger" size="small" @click="delAllGoods()">清空</el-button>
                <el-button type="success" size="small" @click="checkout()">结账</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单">
              挂单
            </el-tab-pane>
            <el-tab-pane label="外卖">
              外卖
            </el-tab-pane>
          </el-tabs>
        </el-col>

        <!--商品展示-->
        <el-col :span="17">
          <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-goods-list">
              <ul>
                <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                  <span>{{goods.goodsName}}</span>
                  <span class="o-price">￥{{goods.price}}元</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="goods-type">
            <el-tabs class="tabs-box">
              <el-tab-pane label="汉堡">
                <ul class='cookList'>
                  <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="小食">
                <ul class='cookList'>
                  <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <ul class='cookList'>
                  <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <ul class='cookList'>
                  <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>

  import Axios from 'axios'
  export default {
    data() {
      return {
        tableData : [],
        oftenGoods : [],
        type0Goods : [],
        type1Goods : [],
        type2Goods : [],
        type3Goods : [],
        totalCount:0,
        totalMoney:0

      }
    },

    //初始化之后
    created:function(){
      //请求数据
      const axios = require('axios');
      const mock = 'https://www.easy-mock.com/mock/5bc998824955ab61f0b7f49f/mock/mockData';
      axios.get(mock).then(response=>{
        this.oftenGoods = response.data.oftenGoods;
        this.type0Goods = response.data.type0Goods;
        this.type1Goods = response.data.type1Goods;
        this.type2Goods = response.data.type2Goods;
        this.type3Goods = response.data.type3Goods;
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
        alert('网络错误，请稍后重试');
      });
    },

    //DOM加载完成后执行事件
    mounted:function (response) {
      //高度100%
      const orderHeight = document.body.clientHeight;
      console.log(orderHeight);
      document.getElementById('order-list').style.height = orderHeight+"px";
    },
    methods:{
      //点击商品列表 增加商品
      addOrderList(goods){
        //汇总数量清空
        this.totalCount = 0;
        this.totalMoney = 0;

        //判断商品是否存在于订单列表中
        let isHave = false;
        for(let i = 0 ; i<this.tableData.length; i++){
//          console.log(this.tableData[i].goodsId);
          if(this.tableData[i].goodsId === goods.goodsId){
            isHave = true; //若存在
          }
        }
        if(isHave) {
          const arr = this.tableData.filter(o=>o.goodsId === goods.goodsId);
          arr[0].count++;
        }else{
          const newGoods={
            goodsId:goods.goodsId,
            goodsName:goods.goodsName,
            price:goods.price,
            count:1
          };

          this.tableData.push(newGoods);
        }

        //价格汇总
        this.tableData.filter(ele=>{
          this.totalCount += ele.count;
          this.totalMoney += ele.count*ele.price;
        })
      },
      //删除单个商品
      delSingGoods(goods){
        goods.count--;
        if(goods.count === 0){
          this.tableData=this.tableData.filter( (o)=>o.goodsId !== goods.goodsId);
        }
        this.getAllMoney();
      },


      getAllMoney(){
        //结算汇总 数量 金额
        //数量 金额先清空
        this.totalMoney = 0;
        this.totalCount = 0;
        //结算汇总 数量 金额
        if (this.tableData){
          this.tableData.forEach( (element)=>{
            this.totalCount += element.count;
            this.totalMoney = this.totalMoney + (element.price*element.count);
          })
        }
      },
      //清空
      delAllGoods(){
        this.$confirm('此操作将清空点餐列表，是否继续？','提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() =>{
          this.totalMoney = 0;
          this.totalCount = 0;
          this.tableData = [];
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
        }).catch(()=>{
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

      },
      //模拟结账
      checkout(){
        if(this.totalCount !== 0){
          let moneyTip = '应收款：'+this.totalMoney+'元，\n实际收款：';
          this.$prompt(moneyTip, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern: /^[0-9]*$/,
            inputErrorMessage: '金额数目只能是数字啦'
          }).then(({ value }) => {

            this.$notify({
              title: '结算成功',
              message: '应付金额: '+this.totalMoney+'元<br>'+
                       '实际收款: '+value+'元<br>'+
                       '应找零: <span style="color: red">'+(value-this.totalMoney)+'</span>元',
              duration: 10000,
              type: 'success',
              dangerouslyUseHTMLString:true
            });
            this.totalMoney = 0;
            this.totalCount = 0;
            this.tableData = [];
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          });
        }else{
          this.$message({
            message:'不能空结，老板了解你急切的心情！',
            type:'error'
          })
        }

      }
    }
  }
</script>

<style scoped>
  .tabs-box{
    padding: 0 10px;
  }
  .pos-order{
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda;
  }
  .pay-btn{
    margin-top: 10px;
  }
  .title{
    height: 20px;
    border-bottom:1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding:10px;
  }
  .often-goods{
    overflow: hidden;
  }
  .often-goods-list ul li{
    list-style: none;
    float:left;
    border:1px solid #E5E9F2;
    border-radius: 10px;
    padding:10px;
    margin:5px;
    background-color:#fff;
    position: relative;
    top: 0;
    transition: .3s;
  }
  .often-goods-list ul li:hover,.cookList li:hover{
    cursor: pointer;
    position: relative;
    top: -5px;
    border: 1px solid #1d8ce0;
  }
  .o-price{
    color:#58B7FF;
  }

  .cookList li{
    list-style: none;
    width:23%;
    border:1px solid #E5E9F2;
    border-radius: 10px;
    height: auto;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 5px;
    position: relative;
    top: 0;
    transition: .3s;
  }
  .cookList li span{
    display: block;
    width: 100%;
  }
  .foodImg{
    position:relative;
    height:70px;
    padding-top: 5px;
  }
  .foodImg>img{
    width:70px;
    height:70px;
  }
  .foodName{
    font-size: 14px;
    color:brown;
  }
  .foodPrice{
    font-size: 16px;
    padding-top:10px;
    padding-bottom:5px;
  }
  .totalDiv{
    display: block;
    background-color: #fff;
    color: #000;
    padding: 10px;
    font-size: 16px;
  }
</style>
