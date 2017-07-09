// 返回顶部效果
        $(window).scroll(function(){
            var sc = $(window).scrollTop();
            if(sc>250){
                $('#totop').css('display','block');
            }else{
                $('#totop').css('display','none');
            }
        });
        $('#totop').click(function(){
            var sc = $(window).scrollTop();
            $('body,html').animate({scrollTop:0},500);
        });
        
        $(function(){
            //logo图标处理
            $('#shop').mouseover(function(){
                $('#shop2').css('display','block');
            })
            $('#shop2').mouseout(function(){
                $('#shop2').css('display','none');
            })
            //添加模块
            var arr = [
            {'name':'2017-03-10 ','id':'也爱看电影','imgurl':'<img class="game" src="images/game0.gif">','ps':'GadioNews4.28~5.5开播！','tip':'西总回来啦！'},
            {'name':'2017-03-10 ','id':'知识挖掘机','imgurl':'<img class="game" src="images/game1.jpg">','ps':'下周节目预告！7.3~7.9','tip':'Patrician系列的扩展阅读。'},
            {'name':'2017-03-10 ','id':'怀旧','imgurl':'<img class="game" src="images/game2.jpg">','ps':'一张角色素描究竟能藏多少秘密？','tip':'消磨时间的个人秘方小推荐'},
            {'name':'2017-03-10 ','id':'安利大帝','imgurl':'<img class="game" src="images/game2.png">','ps':'你们最爱的韩国美少女电竞选手也出雕像了','tip':'手机入脑，迎接15年后的攻壳世界'},
            {'name':'2017-03-09 ','id':'特别二次元','imgurl':'<img class="game" src="images/game3.jpg">','ps':'这款ARPG或许会让我明年剁个手','tip':'来听E3现场的一些情报吧！'},
            {'name':'2017-03-09 ','id':'混核理论','imgurl':'<img class="game" src="images/game4.jpg">','ps':'押井守：不可思议的映伦审查！','tip':'请大家放心，后面还有很多！'}
            ];
            var str = '';
            for(var i = 0;i<6;i++){
                str = '<div class="col-sm-4 root"><span>'+ arr[i].name + '</span><a href="#" class="pull-right">'+ arr[i].id +'</a><div class="pic">'+arr[i].imgurl+'<div class="shade cs"><div class="fang"><img src="http://alioss.g-cores.com/uploads/user/023a9b39-d4e4-4aab-9388-ae8666ea6a03_normal.jpg" alt="" /></div><p>27 Comments</p></div></div><a href="#">'+arr[i].ps+'</a><span>'+arr[i].tip+'</span></div>'
                $('.piclist').append(str);
            }

            //添加模块
            var arr = [
            {'name':'2017-03-08 ','id':'也爱看电影','imgurl':'<img class="game" src="images/game5.jpg">','ps':'GadioNews4.28~5.5开播！','tip':'西总回来啦！'},
            {'name':'2017-03-08 ','id':'知识挖掘机','imgurl':'<img class="game" src="images/game6.jpg">','ps':'下周节目预告！7.3~7.9','tip':'Patrician系列的扩展阅读。'},
            {'name':'2017-03-08 ','id':'怀旧','imgurl':'<img class="game" src="images/game7.jpg">','ps':'一张角色素描究竟能藏多少秘密？','tip':'消磨时间的个人秘方小推荐'},
            {'name':'2017-03-08 ','id':'安利大帝','imgurl':'<img class="game" src="images/game8.jpg">','ps':'你们最爱的韩国美少女电竞选手也出雕像了','tip':'手机入脑，迎接15年后的攻壳世界'},
            {'name':'2017-03-08 ','id':'特别二次元','imgurl':'<img class="game" src="images/game9.jpg">','ps':'这款ARPG或许会让我明年剁个手','tip':'来听E3现场的一些情报吧！'},
            {'name':'2017-03-08 ','id':'混核理论','imgurl':'<img class="game" src="images/game10.jpg">','ps':'押井守：不可思议的映伦审查！','tip':'请大家放心，后面还有很多！'}
            ];
            var str = '';
            for(var i = 0;i<6;i++){
                str = '<div class="col-sm-4 root"><span>'+ arr[i].name + '</span><a href="#" class="pull-right">'+ arr[i].id +'</a><div class="pic">'+arr[i].imgurl+'<div class="shade cs"><div class="fang"><img src="http://alioss.g-cores.com/uploads/user/023a9b39-d4e4-4aab-9388-ae8666ea6a03_normal.jpg" alt="" /></div><p>27 Comments</p></div></div><a href="#">'+arr[i].ps+'</a><span>'+arr[i].tip+'</span></div>'
                $('.piclist_1').append(str);
            }

            //添加模块
            var arr = [
            {'name':'2017-03-07 ','id':'也爱看电影','imgurl':'<img class="game" src="images/game11.jpg">','ps':'GadioNews4.28~5.5开播！','tip':'西总回来啦！'},
            {'name':'2017-03-07 ','id':'知识挖掘机','imgurl':'<img class="game" src="images/game12.jpg">','ps':'下周节目预告！7.3~7.9','tip':'Patrician系列的扩展阅读。'},
            {'name':'2017-03-07 ','id':'怀旧','imgurl':'<img class="game" src="images/game13.jpg">','ps':'一张角色素描究竟能藏多少秘密？','tip':'消磨时间的个人秘方小推荐'},
            {'name':'2017-03-07 ','id':'安利大帝','imgurl':'<img class="game" src="images/game14.jpg">','ps':'你们最爱的韩国美少女电竞选手也出雕像了','tip':'手机入脑，迎接15年后的攻壳世界'},
            {'name':'2017-03-07 ','id':'特别二次元','imgurl':'<img class="game" src="images/game15.jpg">','ps':'这款ARPG或许会让我明年剁个手','tip':'来听E3现场的一些情报吧！'},
            {'name':'2017-03-07 ','id':'混核理论','imgurl':'<img class="game" src="images/game16.jpg">','ps':'押井守：不可思议的映伦审查！','tip':'请大家放心，后面还有很多！'}
            ];
            var str = '';
            for(var i = 0;i<6;i++){
                str = '<div class="col-sm-4 root"><span>'+ arr[i].name + '</span><a href="#" class="pull-right">'+ arr[i].id +'</a><div class="pic">'+arr[i].imgurl+'<div class="shade cs"><div class="fang"><img src="http://alioss.g-cores.com/uploads/user/023a9b39-d4e4-4aab-9388-ae8666ea6a03_normal.jpg" alt="" /></div><p>27 Comments</p></div></div><a href="#">'+arr[i].ps+'</a><span>'+arr[i].tip+'</span></div>'
                $('.piclist_2').append(str);
            }

            //图片hover效果
            $('.pic').hover(function(){
                $(this).find('img').css('-webkit-transform','scale(1.04)');
                $(this).find('.shade').css('opacity','0.9');
                $(this).find('.shade').css('transition','0.6s');
                $(this).find('.game').css('transition','0.6s');
            },function(){
                $(this).find('img').css('-webkit-transform','scale(1)');
                $(this).find('.shade').css('opacity','0');
                $(this).find('.shade').css('transition','0.6s');
                $(this).find('.game').css('transition','0.6s');
            });

            //平台hover效果
            $('#platform').hover(function(){
                $('#platform').css('display','block');
            },function(){
                $('#platform').css('display','none');
            })
            $('.platform').hover(function(){
                $('#platform').css('display','block');
            },function(){
                $('#platform').css('display','none');
            })
        });