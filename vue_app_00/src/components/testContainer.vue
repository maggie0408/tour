<template>
    <div class="app-testContainer">
        <h1>testContainer.vue</h1>
        <h1>生命周期</h1>
        <input type="button" value="修改" @click="msg='ok'">
        <p id="h3">{{msg}}</p>
    </div>
</template>

<script>
    export default{
        data(){
            return {msg:"脚手架"}
        },
        methods:{
            show(){console.log("执行 show 方法");}
        },
        beforeCreate(){//生命周期第1个函数，实例被建之前就会执行            
            //注意：执行此函数时，data和methods还未初始化。因此无法调用它们的数据
            //console.log(this.msg);//undefined
            //this.show();//报错
        },
        created(){//生命周期的第2个函数，实例被创建之后可执行
            //注意：执行函数时，data和methods已被初始化，可调用当中数据
            //console.log(this.msg);//打印出：脚手架
            //this.show();//打印出：执行show方法

        },
        beforeMount(){//生命周期的第3个函数，模板在内存中已编辑完成，但尚未把模板渲染到页面
            //console.log(document.getElementById("h3").innerText);
            //console.log(h3.innerText);

        },
        mounted(){//实例创建的最后一个函数，模板已在内存中编辑完成，并把模板渲染到页面，结束；
            //若无其它操作，就一直在内存中一动不动
            var h3=document.getElementById("h3");
            console.log("4:"+h3.innerText);
        },
        beforeUpdate(){//接下来运行第二个事件
            //执行该函数时，页面显示的数据是旧的，但data中的数据是新的
            console.log("内存中DATA变量："+this.msg);
            var h3=document.getElementById("h3");
            console.log("模板中数据5："+h3.innerText);
        },
        updated(){
            console.log("内存中DATA："+this.msg);
            var h3=document.getElementById("h3");
            console.log("模板中数据6："+h3.innerText);            
        }
    }
</script>

<style>
    
</style>