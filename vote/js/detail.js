let  detailRender=(function (){

    let passId=null,
        $span=$.Callbacks();
    let queryData=function () {
        $.ajax({
            url:'/getUser',
            dataType:'json',
            data:{
                userId:passId
            },
            success:result=>{
                let {code,message,data}=result;
                if (code==0){
                    $span.fire(data);
                    return;
                    alert('详细信息不存在，是否跳转回主页面');
                    window.location.href='index.html';
                }
            }
        })
    };
    $span.add(result=>{
        let str=``;
        let {id,name,picture,sex,phone,bio,isMatch,matchId,slogn,voteNum}=result;

    });

      return{
             init:function(){
passId=window.location.href.myQueryURLParameter()['userId'];
queryData();
            }
     }
    })();
detailRender.init();