/*   
window.addEventListener('load',function(){
   var leftbtn=document.querySelector(' .prev');   //左按钮
    var rightbtn=document.querySelector('.next');  //右按钮
    var windows=document.querySelector('.banner');  //显示窗口区域
    var circleul=document.querySelector('.img-list');  //装图片的 ul
    var lunboimg=document.querySelector('.lunboimg');  //图片
    var circleol=document.querySelector('.circle');  //装下方小点点的 ol
    var num2 = 9
    
    



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
        console.log(num2)
        leftbtn.style.color='grey'
        var timer=setTimeout(function(){
            leftbtn.style.color='aliceblue'
        },100)
        lunboimg.className = ''
        setTimeout(() => {
            lunboimg.src= "./img/" + num2 + ".webp "
            lunboimg.className = 'lunboimg-add'
            num2++ 
        }, 100);
        console.log(lunboimg)
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
 
 
 */
window.onload = function(){
    let prev = document.getElementsByClassName("prev")[0];
    let next = document.getElementsByClassName("next")[0];
    let imgs = document.getElementsByClassName("banner-img");
    let dots = document.getElementsByClassName("dot");
    let index = 0;
    imgs[index].style.opacity = 1;
    dots[index].className = "dot active"
    prev.onclick = function(){
        index--;
        if(index >= 0){
            imgs[index].style.opacity = 1;
            imgs[index + 1].style.opacity = 0;
            dots[index].className = "dot active";
            dots[index + 1].className = "dot";}
        else{
            index = imgs.length - 1;
            imgs[index].style.opacity = 1;
            imgs[0].style.opacity = 0;
            dots[0].className = "dot";
            dots[dots.length - 1].className = "dot active";
        }
        clearInterval(timer);
        timer = autoRun();

    }
    next.onclick = function(){
        
        index++;
        if(index < imgs.length){
            imgs[index - 1].style.opacity = 0;
            imgs[index].style.opacity = 1;
            dots[index].className = "dot active";
            dots[index - 1].className = "dot";
        }
        else{
            index = 0;
            imgs[imgs.length - 1].style.opacity = 0;
            imgs[index].style.opacity = 1;
            dots[dots.length - 1].className = "dot";
            dots[0].className = "dot active";
        }
        clearInterval(timer);
        timer = autoRun();
        
       
    }
    for(let i = 0; i < dots.length; i++){
        dots[i].onclick = function(){
            imgs[index].style.opacity = 0;
            dots[index].className = "dot";
            imgs[i].style.opacity = 1;
            dots[i].className = "dot active";
            index = i;
            clearInterval(timer);
            timer = autoRun();
        
        }
    }
    
    function autoRun(){
        let timer = setInterval(function(){
            index++;
            if(index < imgs.length){
                imgs[index - 1].style.opacity = 0;
                imgs[index].style.opacity = 1;
                dots[index].className = "dot active";
                dots[index - 1].className = "dot";
            }
            else{
                
                index = 0;
                imgs[imgs.length - 1].style.opacity = 0;
                imgs[index].style.opacity = 1;
                dots[dots.length - 1].className = "dot";
                dots[0].className = "dot active";
            }
        },5000);
        
        return timer;
    }
    let timer = autoRun();
}
