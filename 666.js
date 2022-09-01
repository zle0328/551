  
window.addEventListener('load',function(){
   var leftbtn=document.querySelector(' .prev');   //左按钮
    var rightbtn=document.querySelector(' .next');  //右按钮
    var windows=document.querySelector('.banner');  //显示窗口区域
    var circleul=document.querySelector('.img-list');  //装图片的 ul
    var circleol=document.querySelector('.circle');  //装下方小点点的 ol



      windows.addEventListener('mouseenter',function(){
        leftbtn.style.display='block';
        rightbtn.style.display='block';
        clearInterval(timer)    //清除定时器自动播放，此处不需要管
        timer=null;
    })
    windows.addEventListener('mouseleave',function(){
        leftbtn.style.display='none'
        rightbtn.style.display='none'
        timer=setInterval(function(){
            rightbtn.click();
        },2000)
    })
    leftbtn.addEventListener('click',function(){  //按钮点击后变色一下的效果
        leftbtn.style.color='grey'
        var timer=setTimeout(function(){
            leftbtn.style.color='aliceblue'
        },100)
    })
    rightbtn.addEventListener('click',function(){
        rightbtn.style.color='grey'
        var timer=setTimeout(function(){
           rightbtn.style.color='aliceblue'
        },100)
    })

    for(var i=0;i<circleul.children.length;i++){
        lis=document.createElement('li');
        lis.setAttribute('index',i);
        circleol.appendChild(lis);
        lis.addEventListener('click',function(){
            var currentindex=this.getAttribute('index');//bug整改（3行）
            num=currentindex;
            circlechange=currentindex;
            for(var i=0;i<circleol.children.length;i++){
                circleol.children[i].className='';
            }
            this.className='circlecolor';
            var imgwidth=windows.offsetWidth-6;
            var long=this.getAttribute('index')*imgwidth;
            run(circleul,-long);
        })
    }
    circleol.children[0].className='circlecolor';
    //克隆第一张图片至末尾
    var firstimg=circleul.children[0].cloneNode(true);
    circleul.appendChild(firstimg);
 
//右侧按钮点击滚动
    num=0;
    circlechange=0;
    rightbtn.addEventListener('click',function(){
        if(num==circleul.children.length-1){
            circleul.style.left=0;
            num=0;
        }
        num++;
        long=num*windows.offsetWidth-6*num;
        run(circleul,-long);
    //小圆圈跟着一起变化
        circlechange++;
        if(circlechange==circleul.children.length-1){
           circlechange=0;
        }
        for(var i=0;i<circleol.children.length;i++){
             circleol.children[i].className='';
        }
        circleol.children[circlechange].className='circlecolor';
    })
    
    //左侧按钮滚动
    leftbtn.addEventListener('click',function(){
        if(num==0){
            circleul.style.left=(circleul.children.length-1)*windows.offsetWidth;
            num=circleul.children.length-1;
        }
        num--;
        long=num*windows.offsetWidth-6*num;
        run(circleul,-long);
    //小圆圈跟着一起变化
        circlechange--;
        if(circlechange<0){
           circlechange=circleol.children.length-1;  //注意此处是ol的子节点的长度-1
        }
        for(var i=0;i<circleol.children.length;i++){
             circleol.children[i].className='';
        }
        circleol.children[circlechange].className='circlecolor';
    })
   //自动播放
        var timer=setInterval(function(){
            rightbtn.click();
        },2000)
 
    })
 
    function run(obj,long,callback){
        clearInterval(obj.timer)
        obj.timer=setInterval(function(){
            if(obj.offsetLeft==long){
                window.clearInterval(obj.timer);
                if(callback){
                    callback();
                }
            }else{
                step=(long-obj.offsetLeft)/10
                step=step>0?Math.ceil(step):Math.floor(step)
                obj.style.left=obj.offsetLeft+step+'px';
            }
        },20)
    }
 
 
