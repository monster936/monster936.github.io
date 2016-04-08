window.onload = function(){
	(function(){
        var oTimer = setInterval(function(){
	        iNoww +=0.52;
	        if(iNoww > 22.2){
	            clearInterval(oTimer);
	            $(".loading").hide();
	            $("#startdiv").show();
	            return false;
	        };
	        $(".loadingAft").css("width",iNoww+"rem");
	    },100);
	})();
};
var $$ = function(obj){ return typeof obj=="string" ? document.getElementById(obj) : obj};
$(".mainCon").css("height",$(window).height());
$$("startdiv").style.height = document.documentElement.clientHeight + "px";
$$("maindiv").style.height = document.documentElement.clientHeight + "px";
    //获得主界面
var mainDiv=$$("maindiv");
    //获得开始界面
var startdiv=$$("startdiv");
    //获得游戏中分数显示界面
var scorediv=$$("scorediv");
    //获得分数界面
var scorelabel=$$("label");
    //获得暂停界面
    //获得游戏结束界面
var enddiv=$$("enddiv");
//获得游戏结束后分数统计界面
var planscore=$$("planscore");
//剩余机会
var haveChance=$$("haveChance");
var buJi = $$("buji");
//初始化分数
var scores=0;
var set;
var ourPlan=$$('ourplan');
var chance = 1;
var bBtn = true;
var a = 1;
var number=0;
var zdLeft = 28;
var fjzd = "http://zhenimg.com/marketpic/appimg/2015brand/bullet1.png"
/*加载页面开始*/
var times = 2000;
var iNoww = 0;
var globleBtn = true;
var numCf = 10000;
var pd = 1;
var ppd = 1;
var zdpd = true;
var swTime1 = 400;
var swTime2 = 780;
var animateTime = 16000;
var myfjW = 70;
var myfjH = 70;
var an = null;
var apda = true;
var resetPd = resetPdd = true;
var wdpzBtn = false;
var aNum = 0;
$("#buji")[0].bBtn = $("#buji1")[0].bBtn = $("#buji2")[0].bBtn = $("#buji3")[0].bBtn =true;
var yidongFun = function(a){
      $(a).addClass("buji1");
      if($(a).find("span").length > 0) animateTime = 21000;
      if($(a)[0].bBtn){
          $(a).stop().animate({top : "33rem"},animateTime,function(){
                $(a).addClass("cz").hide();
         });
     }
};
var clickStart = function(a,b,c){
    $(a)[0].aaa=setTimeout(function(){
           $(a).fadeIn(300);
           $(a).addClass(b);
           $(a).find("span").addClass(b);
    },c);
    $(a)[0].bbb = setTimeout(function(){
          yidongFun(a);
        },c + 300);
};
var contineFun = function(a,b,c){
   if($(a).hasClass(b) && !$(a).hasClass("cz")){
          numCf = 0;
          yidongFun(a);
      }else{
          if(!$(a).hasClass("cz")){
                clickStart(a,b,c);
          }
      }
};

var zantingFun = function(a,d){
     $(a).stop();
     $(a).removeClass(d);
     $(a).find("span").removeClass(d);
};

var hbFun = function(a,b){
    $(a).fadeOut(1000);
    $(b).fadeIn(1000);
    setTimeout(function(){
       $(b).fadeOut(1000);
       $(a).fadeIn(1000);
    },5000)
};

var addClassFun = function(){
    $("#buji").addClass("add");
};

var zantingcsFun = function(){
    clearTimeout($("#buji")[0].aaa);
    clearTimeout($("#buji")[0].bbb);
    clearTimeout($("#buji1")[0].aaa);
    clearTimeout($("#buji1")[0].bbb);
    clearTimeout($("#buji2")[0].aaa);
    clearTimeout($("#buji2")[0].bbb);
    clearTimeout($("#buji3")[0].aaa);
    clearTimeout($("#buji3")[0].bbb);
   $("#audio").find("audio").get(0).pause();
   zantingFun("#buji","buji1");
   zantingFun("#buji1","buji1");
   zantingFun("#buji2","buji1");
   zantingFun("#buji3","buji1");
};

var restartGame = function(){
	 setTimeout(function(){
        $("#buji")[0].bBtn = $("#buji1")[0].bBtn = $("#buji2")[0].bBtn = $("#buji3")[0].bBtn =true;
        $("#buji,#buji1,#buji2,#buji3").removeClass("yt cz");
        numCf = 5000;
        clickStart("#buji","yt",numCf);
        clickStart("#buji1","yt",numCf + 20000);
        clickStart("#buji2","yt",numCf + 40000);
        clickStart("#buji3","yt",numCf + 60000);
    },15000)
}

/*创建飞机类*/
function plan(hp,X,Y,sizeX,sizeY,score,dietime,sudu,boomimage,imagesrc,classNm){
    this.planX=X;
    this.planY=Y;
    this.imagenode=null;
    this.planhp=hp;
    this.planscore=score;
    this.plansizeX=sizeX;
    this.plansizeY=sizeY;
    this.planboomimage=boomimage;
    this.planisdie=false;
    this.plandietimes=0;
    this.plandietime=dietime;
    this.plansudu=sudu;
    this.classNm = classNm;
   //行为移动行为
    this.planmove=function(){
       if(scores<=50000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+"px";
        }
       else if(scores>50000&&scores<=100000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+1+"px";
        }
        else if(scores>100000&&scores<=150000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+2+"px";
        }
        else if(scores>150000&&scores<=200000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+3+"px";
        }
        else if(scores>200000&&scores<=300000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+4+"px";
        }
        else if(scores>300000&&scores<=400000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+5+"px";
        }
        else{
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+7+"px";
        }
    }
    this.init=function(){
        this.imagenode=document.createElement("img");
        this.imagenode.style.left=this.planX/11+"rem";
        this.imagenode.style.top=this.planY/50+"rem";
        this.imagenode.src=imagesrc;
        this.imagenode.className = classNm;
        mainDiv.appendChild(this.imagenode);
    }
    this.init();
}

/*创建子弹类*/
function bullet(X,Y,sizeX,sizeY,imagesrc){
    this.bulletX=X;
    this.bulletY=Y;
    this.bulletimage=null;
    this.bulletattach=1;
    this.bulletsizeX=sizeX;
    this.bulletsizeY=sizeY;
   //行为移动行为*/
    this.bulletmove=function(){
        this.bulletimage.style.top=this.bulletimage.offsetTop-16+"px";
    }
    this.init=function(){
        this.bulletimage=document.createElement("img");
        this.bulletimage.style.left= this.bulletX+"px";
        this.bulletimage.style.top= this.bulletY+"px";
        this.bulletimage.src=imagesrc;
        mainDiv.appendChild(this.bulletimage);
    }
    this.init();
}

/*创建单行子弹类*/
function oddbullet(X,Y){
    bullet.call(this,X,Y,6,14,fjzd);
}

/*创建敌机类 */
function enemy(hp,a,b,sizeX,sizeY,score,dietime,sudu,boomimage,imagesrc,classNm){
    plan.call(this,hp,random(a,b),-100,sizeX,sizeY,score,dietime,sudu,boomimage,imagesrc,classNm);
}
//产生min到max之间的随机数
function random(min,max){
    return Math.floor(min+Math.random()*(max-min));
}
/*创建本方飞机类*/
function ourplan(X,Y){
    var imagesrc="http://zhenimg.com/marketpic/appimg/2015brand/my_feiji.png";
    plan.call(this,1,X,Y,myfjW,myfjH,0,660,0,"http://zhenimg.com/marketpic/appimg/2015brand/bf_fjbz.gif",imagesrc);
    this.imagenode.setAttribute('id','ourplan');
}

/*创建本方飞机 */
var selfplan=new ourplan(120,445);
function preventDefault(e){e.preventDefault();};/*阻止默认行为*/

//移动事件
var ourPlan=$$('ourplan');
ourPlan.style.top = document.documentElement.clientHeight - selfplan.plansizeY - 10 + "px";
ourPlan.style.left = (document.documentElement.clientWidth - selfplan.plansizeX)/2 + "px";
function impact(obj, dobj,a) { 
    var o = { 
        x: parseInt(ourPlan.style.left)/40, 
        y: parseInt(ourPlan.style.top)/40, 
        w: parseInt(selfplan.plansizeX)/40, 
        h: parseInt(selfplan.plansizeY)/40
    } 
    var d = { 
        x: getDefaultStyle(dobj, 'left')/40, 
        y: getDefaultStyle(dobj, 'top')/40, 
        w: getDefaultStyle(dobj, 'width')/40, 
        h: getDefaultStyle(dobj, 'height')/40 
    } 
    var px, py;
    px = o.x <= d.x ? d.x : o.x; 
    py = o.y <= d.y ? d.y : o.y; 
    //判断点是否都在两个对象中 
    if (px >= o.x && px <= o.x + o.w && py >= o.y && py <= o.y + o.h && px >= d.x && px <= d.x + d.w && py >= d.y && py <= d.y + d.h) { 
        if(a == 1){  /*补给1*/
               if(pd == 1){
                  hbFun(".oDiv",".oDiv2");
              }
            setTimeout(function(){
                     zdLeft = 28;
                     fjzd = "http://zhenimg.com/marketpic/appimg/2015brand/bullet1.png";
                     swTime1 = 400;
                     swTime2 = 780;
                     pd = 1;
            },25000)
            pd= 0;
            zdLeft = 23;
            swTime1 = 80;
            swTime2 = 20;
            fjzd = "http://zhenimg.com/marketpic/appimg/2015brand/bullet2.png"
            $("#buji").stop();
            $("#buji").fadeOut(300,function(){
                $("#buji").css("top",0);
            });
            $("#buji").addClass("cz");
           }

         if(a==2){ /*补给2*/
                if(zdpd){
                 chance = parseInt($("#haveChance").html()) + 1;
                 $("#haveChance").html(chance);
                 hbFun(".oDiv",".oDiv3");
                }
                setTimeout(function(){
                  zdpd = true;
                },25000)
               $("#buji1").stop();
               zdpd = false;
              $("#buji1").fadeOut(300,function(){
                $("#buji1").css("top",0);
            });
            $("#buji1").addClass("cz");
         }
         if(a == 3){  /*补给3*/
              if(ppd == 1){
                  hbFun(".oDiv",".oDiv2");
              }
            setTimeout(function(){
                zdLeft = 28;
                fjzd = "http://zhenimg.com/marketpic/appimg/2015brand/bullet1.png";
                swTime1 = 400;
                swTime2 = 780;
                ppd = 1;
            },25000)
            ppd= 0;
            zdLeft = 23;
            fjzd = "http://zhenimg.com/marketpic/appimg/2015brand/bullet2.png";
            swTime1 = 80;
            swTime2 = 20;
            $("#buji2").stop();
            $("#buji2").fadeOut(300,function(){
                $("#buji2").css("top",0);
            });
            $("#buji2").addClass("cz");
           }
            if(a == 4){  /*补给4*/
            if(bBtn){
              hbFun(".oDiv",".oDiv3");
              aNum++;
            }
            selfplan.imagenode.src = "http://zhenimg.com/marketpic/appimg/2015brand/buji_fj.gif";
            selfplan.plansizeX = 105;
            selfplan.plansizeY = 108;
            zdLeft = 44;
            bBtn = false;
            wdpzBtn = true;
            addClassFun();
            setTimeout(function(){
                bBtn = true;
                wdpzBtn = false;
                selfplan.imagenode.src = "http://zhenimg.com/marketpic/appimg/2015brand/my_feiji.png";
                selfplan.plansizeX = 70;
                selfplan.plansizeY = 70;
                zdLeft = 28;
            },25000)

            $("#buji3").stop();
            $("#buji3").fadeOut(300,function(){
                $("#buji3").css("top",0);
            });
            $("#buji3").addClass("cz");
           }

       } else { 
        return false; 
    } 
}
function getDefaultStyle(obj, attribute){ 
    return parseInt(obj.currentStyle ? obj.currentStyle[attribute] : document.defaultView.getComputedStyle(obj, false)[attribute]); 
}
var yidong=function(){
    ourPlan.addEventListener("touchmove",function(ev){
        var oevent=ev || event;
        var chufa=oevent.srcElement||oevent.target;
        var selfplanX=oevent.changedTouches[0].pageX;
        var selfplanY=oevent.changedTouches[0].pageY;
        var oLeft = selfplanX-selfplan.plansizeX/2;
        var oTop = selfplanY-selfplan.plansizeY/2;
        if(oLeft < 0) oLeft = 0;
        if(oLeft > document.body.clientWidth - selfplan.plansizeX) oLeft = document.body.clientWidth - selfplan.plansizeX;
        if(oTop < 0) oTop = 0;
        if(oTop > document.documentElement.clientHeight - selfplan.plansizeY) oTop = document.documentElement.clientHeight - selfplan.plansizeY;
        ourPlan.style.left=oLeft+"px";
        ourPlan.style.top=oTop+"px";
        var aT = parseInt(ourPlan.style.top)/40 + parseInt(selfplan.plansizeY)/40;
        var aL = parseInt(ourPlan.style.left)/40 + parseInt(selfplan.plansizeX)/40;
        if($("#buji").is(":animated")){
     	impact(ourPlan,buJi,1);
       }
      if($("#buji1").is(":animated")){
          impact(ourPlan,$("#buji1")[0],2);
      }
      if($("#buji2").is(":animated")){
          impact(ourPlan,$("#buji2")[0],3);
      }
      if($("#buji3").is(":animated")){
          impact(ourPlan,$("#buji3")[0],4);
          addClassFun();
    }
	console.log(aNum)
    if($(".add").length > 0 && !$("#buji3").is(":animated")){
        if(resetPd){
           restartGame();
      	}
        resetPd = false;
  	}
    if($(".add").length > 0 && !$("#buji3").is(":animated") && (aNum==2)){
        if(resetPdd){
           restartGame();
      	}
        resetPdd = false;
  	}
  },true);
  document.addEventListener('touchmove',preventDefault,false);

//    document.getElementsByTagName('img')[0].style.left=selfplanX-selfplan.plansizeX/2+"px";
//    document.getElementsByTagName('img')[0]..style.top=selfplanY-selfplan.plansizeY/2+"px";
}
/*暂停事件*/
var zanting=function(){
       $("#hbBg").css("position","fixed").animate({opacity : .5},300,function(){
           $("#ztArea").show();
        });
        zantingcsFun();
       if(number==0){
        if(document.removeEventListener){
            mainDiv.removeEventListener("touchstart",yidong,true);
            bodyobj.removeEventListener("touchstart",bianjie,true);
        }
        else if(document.detachEvent){
            mainDiv.detachEvent("ontouchstart",yidong);
            bodyobj.detachEvent("ontouchstart",bianjie);
        }
        number=1;
        clearInterval(set);
    }
    else{
        if(document.addEventListener){
            mainDiv.addEventListener("touchstart",yidong,true);
            bodyobj.addEventListener("touchstart",bianjie,true);
        }
        else if(document.attachEvent){
            mainDiv.attachEvent("ontouchstart",yidong);
            bodyobj.attachEvent("ontouchstart",bianjie);
        }
        set=setInterval(start,20);
        number=0;
    }
}
//判断本方飞机是否移出边界,如果移出边界,则取消touchstart事件,反之加上touchstart事件
var bianjie=function(){
    bodyobj.addEventListener("touchmove",function(ev){
        var oevent=ev||event;
        var bodyobjX=oevent.changedTouches[0].pageX;
        var bodyobjY=oevent.changedTouches[0].pageY;
        if(bodyobjX<505||bodyobjX>815||bodyobjY<0||bodyobjY>736){
            if(document.removeEventListener){
                mainDiv.removeEventListener("touchstart",yidong,true);
            }
            else if(document.detachEvent){
                mainDiv.detachEvent("ontouchstart",yidong);
            }
        }
        else{
            if(document.addEventListener){
                mainDiv.addEventListener("touchstart",yidong,true);
            }
            else if(document.attachEvent){
                mainDiv.attachEvent("ontouchstart",yidong);
            }
        }
    });
    document.addEventListener('touchmove',preventDefault,false);
}
//暂停界面重新开始事件
//function chongxinkaishi(){
//    location.reload(true);
//    startdiv.style.display="none";
//    maindiv.style.display="block";
//}
var bodyobj=document.getElementsByTagName("body")[0];
if(document.addEventListener){
    //为本方飞机添加移动和暂停
    mainDiv.addEventListener("touchstart",yidong,true);
    //为本方飞机添加暂停事件
    $(".ztBtn")[0].addEventListener("click",zanting,true);
    //为body添加判断本方飞机移出边界事件
    bodyobj.addEventListener("touchstart",bianjie,true);
    //为暂停界面的继续按钮添加暂停事件
    $("#reStart")[0].addEventListener("click",jixu,true);
    $("#contine").bind("click",function(){
        $("#audio").find("audio").get(0).play();
        number=0;
        $("#ztArea").fadeOut(300);
        $("#hbBg").animate({opacity :0},300,function(){
            $("#hbBg").css("position","static");
        });
        set=setInterval(start,20);
        numCf = 5000;
        contineFun("#buji","yt",numCf);
        contineFun("#buji1","yt",numCf + 20000);
        contineFun("#buji2","yt",numCf + 40000);
        contineFun("#buji3","yt",numCf + 60000);
    });
//    suspenddiv.getElementsByTagName("button")[1].addEventListener("click",chongxinkaishi,true);
    //为暂停界面的返回主页按钮添加事件
}
else if(document.attachEvent){
    //为本方飞机添加移动
    mainDiv.attachEvent("ontouchstart",yidong);
    //为本方飞机添加暂停事件
    selfplan.imagenode.attachEvent("onclick",zanting);
    //为body添加判断本方飞机移出边界事件
    bodyobj.attachEvent("ontouchstart",bianjie);
    //为暂停界面的继续按钮添加暂停事件
//    suspenddiv.getElementsByTagName("button")[1].attachEvent("click",chongxinkaishi,true);
    //为暂停界面的返回主页按钮添加事件
}
//初始化隐藏本方飞机
selfplan.imagenode.style.display="none";

/*敌机对象数组*/
var enemys=[];

/*子弹对象数组*/
var bullets=[];
var mark=0;
var mark1=0;
var backgroundPositionY=0;
/*开始函数*/
function start(){
    $(".oDiv")[0].style.backgroundPositionY = backgroundPositionY+"px";
    backgroundPositionY+=0.5;
    if(backgroundPositionY==736){
        backgroundPositionY=0;
    }
    mark++;
    /*创建敌方飞机*/
    if(mark==20){
        mark1++;
        //中飞机
        if(mark1%5==0){
            enemys.push(new enemy(6,5,250,46,60,5000,swTime1,random(1,4),"http://zhenimg.com/marketpic/appimg/2015brand/middle_fjbz.gif","http://zhenimg.com/marketpic/appimg/2015brand/enemy3_fly_1.png","airplan"));
        }
        //大飞机
        if(mark1==20){
            enemys.push(new enemy(12,25,200,110,164,3000,swTime2,1,"http://zhenimg.com/marketpic/appimg/2015brand/big_fjbz.gif","http://zhenimg.com/marketpic/appimg/2015brand/enemy2_fly_1.png","airplan airplan1"));
            $(".airplan1").css("top","-10rem");
            mark1=0;
        }
       //小飞机
        else{
            enemys.push(new enemy(1,1,255,34,24,1000,swTime1,random(1,5),"http://zhenimg.com/marketpic/appimg/2015brand/small_fjbz.gif","http://zhenimg.com/marketpic/appimg/2015brand/enemy1_fly_1.png","airplan"));
        }
        mark=0;
    }

/*移动敌方飞机 */
    var enemyslen=enemys.length;
    for(var i=0;i<enemyslen;i++){
        if(enemys[i].planisdie!=true){
            enemys[i].planmove();
        }
/*如果敌机超出边界,删除敌机*/
        if(enemys[i].imagenode.offsetTop>736){
            mainDiv.removeChild(enemys[i].imagenode);
            enemys.splice(i,1);
            enemyslen--;
        }
        //当敌机死亡标记为true时，经过一段时间后清除敌机
        if(enemys[i].planisdie==true){
            enemys[i].plandietimes+=20;
            if(enemys[i].plandietimes==enemys[i].plandietime){
                mainDiv.removeChild(enemys[i].imagenode);
                enemys.splice(i,1);
                enemyslen--;
            }
        }
    }

/*创建子弹*/
    if(mark%4==0){
        bullets.push(new oddbullet(parseInt(selfplan.imagenode.style.left)+zdLeft,parseInt(selfplan.imagenode.style.top)-5));
    }

/*移动子弹*/
    var bulletslen=bullets.length;
    for(var i=0;i<bulletslen;i++){
        bullets[i].bulletmove();
/*如果子弹超出边界,删除子弹*/
        if(bullets[i].bulletimage.offsetTop<0){
            mainDiv.removeChild(bullets[i].bulletimage);
            bullets.splice(i,1);
            bulletslen--;
        }
    }

/*碰撞判断*/ 
    for(var k=0;k<bulletslen;k++){
        for(var j=0;j<enemyslen;j++){
            //判断碰撞本方飞机
            if(enemys[j].planisdie==false){
                if(enemys[j].imagenode.offsetLeft+enemys[j].plansizeX>=selfplan.imagenode.offsetLeft&&enemys[j].imagenode.offsetLeft<=selfplan.imagenode.offsetLeft+selfplan.plansizeX){
                  if(enemys[j].imagenode.offsetTop+enemys[j].plansizeY>=selfplan.imagenode.offsetTop+40&&enemys[j].imagenode.offsetTop<=selfplan.imagenode.offsetTop-20+selfplan.plansizeY){
                    if(wdpzBtn){
                            //碰撞无敌飞机
                           enemys[j].planhp=enemys[j].planhp-bullets[k].bulletattach;
                            //敌机血量为0，敌机图片换为爆炸图片，死亡标记为true，计分
                            if(enemys[j].planhp==0){
                                scores=scores+enemys[j].planscore;
                                scorelabel.innerHTML=scores;
                                enemys[j].imagenode.src=enemys[j].planboomimage;
                                enemys[j].planisdie=true;
                            }
                    }
                    if(bBtn){
                              selfplan.imagenode.src="http://zhenimg.com/marketpic/appimg/2015brand/bf_fjbz.gif";
                              var arrPlan = [ourPlan.style.top,ourPlan.style.left];
                              setTimeout(function(){
                                    ourPlan.style.display = "none";
                                    selfplan.imagenode.src="http://zhenimg.com/marketpic/appimg/2015brand/my_feiji.png";
                                    chance--;
                                    if(chance <= -1) chance = -1;
                                    if(chance == -1){
                                           clearInterval(set);
                                           $("#audio").find("audio").get(0).pause();
                                           $("#hbBg").css("position","fixed").animate({opacity : .5},300,function(){
                                               $("#endGame").show();
                                               $("#planscore").html($("#label").html());
                                            });
                                            zantingcsFun();
                                            return false;
                                    }else{
                                    	ourPlan.style.top = document.documentElement.clientHeight - selfplan.plansizeY - 10 + "px";
                                    	ourPlan.style.left = (document.documentElement.clientWidth - selfplan.plansizeX)/2 + "px";
                                    }
                                    if(chance <=-1) chance = 0;
                                    haveChance.innerHTML = chance;
                               },1200);
                               setTimeout(function(){
                                    ourPlan.style.display = "block";
                               },1300);
                              if(document.removeEventListener){
                                  mainDiv.removeEventListener("touchstart",yidong,true);
                                  bodyobj.removeEventListener("touchstart",bianjie,true);
                              }
                              setTimeout(function(){
                                 $("#ourplan").animate({top : arrPlan[0],left : arrPlan[1] },200);
                              },2200);
                              bBtn = false;
                              setTimeout(function(){bBtn = true;},4000);
                        }
                   }
                }
                //判断子弹与敌机碰撞
                if((bullets[k].bulletimage.offsetLeft+bullets[k].bulletsizeX>enemys[j].imagenode.offsetLeft)&&(bullets[k].bulletimage.offsetLeft<enemys[j].imagenode.offsetLeft+enemys[j].plansizeX)){
                    if(bullets[k].bulletimage.offsetTop<=enemys[j].imagenode.offsetTop+enemys[j].plansizeY&&bullets[k].bulletimage.offsetTop+bullets[k].bulletsizeY>=enemys[j].imagenode.offsetTop){
                        //敌机血量减子弹攻击力
                        enemys[j].planhp=enemys[j].planhp-bullets[k].bulletattach;
                        //敌机血量为0，敌机图片换为爆炸图片，死亡标记为true，计分
                        if(enemys[j].planhp==0){
                            scores=scores+enemys[j].planscore;
                            scorelabel.innerHTML=scores;
                            enemys[j].imagenode.src=enemys[j].planboomimage;
                            enemys[j].planisdie=true;
                        }
                        //删除子弹
                        mainDiv.removeChild(bullets[k].bulletimage);
                            bullets.splice(k,1);
                            bulletslen--;
                            break;
                    }
                }
            }
        }
    }
}
/*开始游戏按钮点击事件*/

function begin(){
  (function(){
      var keyBtn = $("#audio").find("audio").get(0);
      keyBtn.play();
      $('#audio').on('touchstart', function() {
          if (keyBtn.paused) {
              keyBtn.play();
          } else {
              keyBtn.pause();
          }
      });
    })();
    clickStart("#buji","yt",numCf);
    clickStart("#buji1","yt",numCf + 20000);
    clickStart("#buji2","yt",numCf + 40000);
    clickStart("#buji3","yt",numCf + 60000);
   $("#oDiv").css("display","block");
    $(".oDiv1").css("display","block");
    startdiv.style.display="none";
    mainDiv.style.display="block";
    selfplan.imagenode.style.display="block";
    scorediv.style.display="block";
    haveChance.style.display = "block";
    /*调用开始函数*/
    set=setInterval(start,20);
}
//游戏结束后点击继续按钮事件
function jixu(){
    location.reload(true);
}

$("#studentCome").bind("click",function(){
       $("#hbBg").css("position","fixed").animate({opacity : .5},300,function(){
           $("#endGame").show();
           $("#planscore").hide();
           $("#gameBtn").find("span:first").remove();
           $("#gameBtn").prepend('<span id="startGame" onclick="begin();">开始游戏</span>');
           $("#startGame").unbind("click").bind("click",function(){
                  $("#hbBg").animate({opacity :0},300,function(){
                      $("#hbBg").css("position","static");
                  });
                  $("#endGame").hide();
             });
        });
 });

  $("#zmBtn").bind("click",function(){
          $(".oDiv4").show();
         $("#hbBg").animate({opacity :0},300,function(){
            $("#hbBg").css("position","static");
        });
        $("#endGame").hide();
    });
  $(".bmtdBtn").bind("click",function(){
         $("#hbBg").css("position","fixed").animate({opacity : .5},300,function(){
           $("#endGame").show();
           $("#planscore").hide();
          $("#gameBtn").find("span:first").remove();
           $("#gameBtn").prepend('<span id="startGame1" onclick="jixu()">继续游戏</span>');
        });
 });
/*完成界面的初始化
    敌方小飞机一个
    我方飞机一个*/
var WeixinApi = (function () {

    "use strict";

    /**
     * 分享到微信朋友圈
     * @param       {Object}    data       待分享的信息
     * @p-config    {String}    appId      公众平台的appId（服务号可用）
     * @p-config    {String}    imageUrl   图片地址
     * @p-config    {String}    link       链接地址
     * @p-config    {String}    desc       描述
     * @p-config    {String}    title      分享的标题
     *
     * @param       {Object}    callbacks  相关回调方法
     * @p-config    {Boolean}   async                   ready方法是否需要异步执行，默认false
     * @p-config    {Function}  ready(argv)             就绪状态
     * @p-config    {Function}  dataLoaded(data)        数据加载完成后调用，async为true时有用，也可以为空
     * @p-config    {Function}  cancel(resp)    取消
     * @p-config    {Function}  fail(resp)      失败
     * @p-config    {Function}  confirm(resp)   成功
     * @p-config    {Function}  all(resp)       无论成功失败都会执行的回调
     */
    function weixinShareTimeline(data, callbacks) {
        callbacks = callbacks || {};
        var shareTimeline = function (theData) {
            WeixinJSBridge.invoke('shareTimeline', {
                "appid":theData.appId ? theData.appId : '',
                "img_url":theData.imgUrl,
                "link":theData.link,
                "desc":theData.title,
                "title":theData.desc, // 注意这里要分享出去的内容是desc
                "img_width":"120",
                "img_height":"120"
            }, function (resp) {
                switch (resp.err_msg) {
                    // share_timeline:cancel 用户取消
                    case 'share_timeline:cancel':
                        callbacks.cancel && callbacks.cancel(resp);
                        break;
                    // share_timeline:fail　发送失败
                    case 'share_timeline:fail':
                        callbacks.fail && callbacks.fail(resp);
                        break;
                    // share_timeline:confirm 发送成功
                    case 'share_timeline:confirm':
                    case 'share_timeline:ok':
                        callbacks.confirm && callbacks.confirm(resp);
                        break;
                }
                // 无论成功失败都会执行的回调
                callbacks.all && callbacks.all(resp);
            });
        };
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            if (callbacks.async && callbacks.ready) {
                window["_wx_loadedCb_"] = callbacks.dataLoaded || new Function();
                if(window["_wx_loadedCb_"].toString().indexOf("_wx_loadedCb_") > 0) {
                    window["_wx_loadedCb_"] = new Function();
                }
                callbacks.dataLoaded = function (newData) {
                    window["_wx_loadedCb_"](newData);
                    shareTimeline(newData);
                };
                // 然后就绪
                callbacks.ready && callbacks.ready(argv);
            } else {
                // 就绪状态
                callbacks.ready && callbacks.ready(argv);
                shareTimeline(data);
            }
        });
    }

    /**
     * 发送给微信上的好友
     * @param       {Object}    data       待分享的信息
     * @p-config    {String}    appId      公众平台的appId（服务号可用）
     * @p-config    {String}    imageUrl   图片地址
     * @p-config    {String}    link       链接地址
     * @p-config    {String}    desc       描述
     * @p-config    {String}    title      分享的标题
     *
     * @param       {Object}    callbacks  相关回调方法
     * @p-config    {Boolean}   async                   ready方法是否需要异步执行，默认false
     * @p-config    {Function}  ready(argv)             就绪状态
     * @p-config    {Function}  dataLoaded(data)        数据加载完成后调用，async为true时有用，也可以为空
     * @p-config    {Function}  cancel(resp)    取消
     * @p-config    {Function}  fail(resp)      失败
     * @p-config    {Function}  confirm(resp)   成功
     * @p-config    {Function}  all(resp)       无论成功失败都会执行的回调
     */
    function weixinSendAppMessage(data, callbacks) {
        callbacks = callbacks || {};
        var sendAppMessage = function (theData) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "appid":theData.appId ? theData.appId : '',
                "img_url":theData.imgUrl,
                "link":theData.link,
                "desc":theData.desc,
                "title":theData.title,
                "img_width":"120",
                "img_height":"120"
            }, function (resp) {
                switch (resp.err_msg) {
                    // send_app_msg:cancel 用户取消
                    case 'send_app_msg:cancel':
                        callbacks.cancel && callbacks.cancel(resp);
                        break;
                    // send_app_msg:fail　发送失败
                    case 'send_app_msg:fail':
                        callbacks.fail && callbacks.fail(resp);
                        break;
                    // send_app_msg:confirm 发送成功
                    case 'send_app_msg:confirm':
                    case 'send_app_msg:ok':
                        callbacks.confirm && callbacks.confirm(resp);
                        break;
                }
                // 无论成功失败都会执行的回调
                callbacks.all && callbacks.all(resp);
            });
        };
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            if (callbacks.async && callbacks.ready) {
                window["_wx_loadedCb_"] = callbacks.dataLoaded || new Function();
                if(window["_wx_loadedCb_"].toString().indexOf("_wx_loadedCb_") > 0) {
                    window["_wx_loadedCb_"] = new Function();
                }
                callbacks.dataLoaded = function (newData) {
                    window["_wx_loadedCb_"](newData);
                    sendAppMessage(newData);
                };
                // 然后就绪
                callbacks.ready && callbacks.ready(argv);
            } else {
                // 就绪状态
                callbacks.ready && callbacks.ready(argv);
                sendAppMessage(data);
            }
        });
    }

    /**
     * 分享到腾讯微博
     * @param       {Object}    data       待分享的信息
     * @p-config    {String}    link       链接地址
     * @p-config    {String}    desc       描述
     *
     * @param       {Object}    callbacks  相关回调方法
     * @p-config    {Boolean}   async                   ready方法是否需要异步执行，默认false
     * @p-config    {Function}  ready(argv)             就绪状态
     * @p-config    {Function}  dataLoaded(data)        数据加载完成后调用，async为true时有用，也可以为空
     * @p-config    {Function}  cancel(resp)    取消
     * @p-config    {Function}  fail(resp)      失败
     * @p-config    {Function}  confirm(resp)   成功
     * @p-config    {Function}  all(resp)       无论成功失败都会执行的回调
     */
    function weixinShareWeibo(data, callbacks) {
        callbacks = callbacks || {};
        var shareWeibo = function (theData) {
            WeixinJSBridge.invoke('shareWeibo', {
                "content":theData.desc,
                "link":theData.link
            }, function (resp) {
                switch (resp.err_msg) {
                    // share_weibo:cancel 用户取消
                    case 'share_weibo:cancel':
                        callbacks.cancel && callbacks.cancel(resp);
                        break;
                    // share_weibo:fail　发送失败
                    case 'share_weibo:fail':
                        callbacks.fail && callbacks.fail(resp);
                        break;
                    // share_weibo:confirm 发送成功
                    case 'share_weibo:confirm':
                    case 'share_weibo:ok':
                        callbacks.confirm && callbacks.confirm(resp);
                        break;
                }
                // 无论成功失败都会执行的回调
                callbacks.all && callbacks.all(resp);
            });
        };
        WeixinJSBridge.on('menu:share:weibo', function (argv) {
            if (callbacks.async && callbacks.ready) {
                window["_wx_loadedCb_"] = callbacks.dataLoaded || new Function();
                if(window["_wx_loadedCb_"].toString().indexOf("_wx_loadedCb_") > 0) {
                    window["_wx_loadedCb_"] = new Function();
                }
                callbacks.dataLoaded = function (newData) {
                    window["_wx_loadedCb_"](newData);
                    shareWeibo(newData);
                };
                // 然后就绪
                callbacks.ready && callbacks.ready(argv);
            } else {
                // 就绪状态
                callbacks.ready && callbacks.ready(argv);
                shareWeibo(data);
            }
        });
    }

    /**
     * 调起微信Native的图片播放组件。
     * 这里必须对参数进行强检测，如果参数不合法，直接会导致微信客户端crash
     *
     * @param {String} curSrc 当前播放的图片地址
     * @param {Array} srcList 图片地址列表
     */
    function imagePreview(curSrc,srcList) {
        if(!curSrc || !srcList || srcList.length == 0) {
            return;
        }
        WeixinJSBridge.invoke('imagePreview', {
            'current' : curSrc,
            'urls' : srcList
        });
    }

    /**
     * 显示网页右上角的按钮
     */
    function showOptionMenu() {
        WeixinJSBridge.call('showOptionMenu');
    }


    /**
     * 隐藏网页右上角的按钮
     */
    function hideOptionMenu() {
        WeixinJSBridge.call('hideOptionMenu');
    }

    /**
     * 显示底部工具栏
     */
    function showToolbar() {
        WeixinJSBridge.call('showToolbar');
    }

    /**
     * 隐藏底部工具栏
     */
    function hideToolbar() {
        WeixinJSBridge.call('hideToolbar');
    }

    /**
     * 返回如下几种类型：
     *
     * network_type:wifi     wifi网络
     * network_type:edge     非wifi,包含3G/2G
     * network_type:fail     网络断开连接
     * network_type:wwan     2g或者3g
     *
     * 使用方法：
     * WeixinApi.getNetworkType(function(networkType){
     *
     * });
     *
     * @param callback
     */
    function getNetworkType(callback) {
        if (callback && typeof callback == 'function') {
            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                // 在这里拿到e.err_msg，这里面就包含了所有的网络类型
                callback(e.err_msg);
            });
        }
    }

    /**
     * 关闭当前微信公众平台页面
     */
    function closeWindow() {
        WeixinJSBridge.call("closeWindow");
    }

    /**
     * 当页面加载完毕后执行，使用方法：
     * WeixinApi.ready(function(Api){
     *     // 从这里只用Api即是WeixinApi
     * });
     * @param readyCallback
     */
    function wxJsBridgeReady(readyCallback) {
        if (readyCallback && typeof readyCallback == 'function') {
            var Api = this;
            var wxReadyFunc = function () {
                readyCallback(Api);
            };
            if (typeof window.WeixinJSBridge == "undefined"){
                if (document.addEventListener) {
                    document.addEventListener('WeixinJSBridgeReady', wxReadyFunc, false);
                } else if (document.attachEvent) {
                    document.attachEvent('WeixinJSBridgeReady', wxReadyFunc);
                    document.attachEvent('onWeixinJSBridgeReady', wxReadyFunc);
                }
            }else{
                wxReadyFunc();
            }
        }
    }

    return {
        version         :"1.7",
        ready           :wxJsBridgeReady,
        shareToTimeline :weixinShareTimeline,
        shareToWeibo    :weixinShareWeibo,
        shareToFriend   :weixinSendAppMessage,
        showOptionMenu  :showOptionMenu,
        hideOptionMenu  :hideOptionMenu,
        showToolbar     :showToolbar,
        hideToolbar     :hideToolbar,
        getNetworkType  :getNetworkType,
        imagePreview    :imagePreview,
        closeWindow     :closeWindow
    };
})();

 // 需要分享的内容，请放到ready里
        WeixinApi.ready(function(Api) {

            // 微信分享的数据
            var wxData = {
                "appId": "", // 服务号可以填写appId
                "imgUrl" : 'http://zhenimg.com/marketpic/special/prize2014/wx.jpg',
                "link" : 'http://m.zhenpin.com/special/zhenpin2048/',
                "desc" : '土豪版2048，玩就赚现金！',
                "title" : "土豪版2048，玩就赚现金！"
                 
                
            };

            // 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
            Api.shareToFriend(wxData);

            // 点击分享到朋友圈，会执行下面这个代码
            Api.shareToTimeline(wxData);

            // 点击分享到腾讯微博，会执行下面这个代码
            Api.shareToWeibo(wxData);

      
        });
