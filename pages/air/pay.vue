<template>
    <div class="container">
        <script src="/qrcode.js"></script>
        <div class="main">
            <div class="pay-title">
                支付总金额 <span class="pay-price">￥ {{order.price}}</span>
            </div>
            <div class="pay-main">
                <h4>微信支付</h4>
                <el-row type="flex" 
                justify="space-between" 
                align="middle"
                class="pay-qrcode">
                    <div class="qrcode">
                        <!-- 二维码 -->
                        <!-- <canvas id="qrcode-stage"></canvas> -->
                        <div id="qrcode"></div>
                        <p>请使用微信扫一扫</p>
                        <p>扫描二维码支付</p>
                    </div>
                    <div class="pay-example">
                        <img src="http://157.122.54.189:9093/images/wx-sweep2.jpg" alt="">
                    </div>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import { async } from 'q';
export default {
    data(){
        return{
            //订单详情
            order:{},
            //定时器
            timer:null
        }
    },
    mounted(){
        //订单id
        let {id} = this.$route.query;

        //等待本地的插件把本地存储的值赋值到store,之后再执行请求,才可以拿到token
        setTimeout(async () => {
            //请求订单详情
            let res = await this.$axios({
                url:"/airorders/"+id,
                headers:{
                    Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
                }
            })
            this.order = res.data

            //获取canvas元素
            new QRCode(document.getElementById("qrcode"),this.order.payInfo.code_url);

            //查询付款状态
            this.timer = setInterval(async () => {
                let res = await this.$axios({
                    url:'/airorders/checkpay',
                    method:"POST",
                    headers:{
                        Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
                    },
                    data:{
                        id:this.$route.query.id,
                        noce_str:this.order.price,
                        out_trade_no:this.order.orderNo
                    }
                });
                //获取支付状态
                let {statusTxt} = res.data;
                //支付完成后
                if(statusTxt === "支付完成"){
                    this.$message.success(statusTxt)

                    clearInterval(this.timer)
                }
            },3000);
        },10)
    },
     // 组件销毁时候使用的，一般情况下用于清除定时器
     destroyed(){
         clearInterval(this.timer)
     }
}
</script>

<style scoped lang="less">
.container{
    background:#f5f5f5;
    padding: 30px 0;

    .main{
        width:1000px;
        margin:0 auto;

        .pay-title{
            text-align: right;
            span{
                font-size:28px;
                color:orangered;
            }
        }

        .pay-main{
            background:#fff;
            margin-top:10px;
            border-top: 5px orange solid;
            padding:30px;

            h4{
                font-size: 28px;
                font-weight: normal;
                margin-bottom: 10px;
            }

            .pay-qrcode{
                padding:0 80px;
            }

            .qrcode{
                border:1px #ddd solid;
                padding:15px;
                height: fit-content;

                #qrcode-stage{
                    width:200px;
                    height:200px;
                    margin-bottom: 10px;
                }

                p{
                    line-height: 2;
                    text-align: center;
                }
            }
        }
    }
}
</style>