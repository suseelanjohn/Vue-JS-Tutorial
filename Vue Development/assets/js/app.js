let app = new Vue({
    el:'#appRoot',
    data:{
        say:"Hello World"
    },
    created:function(){
        //will work on creation of vue instance 
        console.log("Vue Created");
    },
    mounted:function(){
        console.log(this.$el.textContent);
    },
    updated:function(){
        console.log("Vue Updated");
    },
    destroyed:function(){
        
    }
});