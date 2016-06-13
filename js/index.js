var book = angular.module('jianshu',['ngAnimate','ngTouch','ngRoute']);

book.controller('indexCtrl',['$scope',function($scope){
    if(localStorage.sp){
      $scope.isFirstOpen = false;
    }else{
      $scope.isFirstOpen = true;
    }
    $scope.enter = function(){
      localStorage.sp = true;
      $scope.isFirstOpen = false;
    }
    // $scope.a = '1';
    // $scope.b = '1';
}])

book.directive('jsShanping',[function(){
  return {
    restrict:'E',
    replace:true,
    templateUrl:'views/directive/shanping.html',
    link:function($scope,el){
      $(function(){
          var swiper3 = new Swiper('.swiper-container3', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false
        });
      })
    }
  }
}])


book.directive('jsTitle',[function(){
  return {
    restrict:'E',
    replace:true,
    templateUrl:'views/directive/title.html',
  }
}])
book.directive('jsFooter',[function(){
  return {
      replace:true,
      restrict:'E',
      templateUrl:'views/directive/footer.html',
  }
}])

book.directive('jsSwFont',[function(){
  return {
      replace:true,
      restrict:'E',
      templateUrl:'views/directive/swfont.html',
      link:function($scope,el){
        $scope.lists = [
        {name:'新上榜'},
        {name:'日报'},
        {name:'七日热门'},
        {name:'三十日热门'},
        {name:'市集'},
        {name:'有奖活动'},
        {name:'简书出版'},
        {name:'简书播客'},
        ]
        $(function(){
          var swiper = new Swiper('.swiper-container1', {
            slidesPerView: false,
            spaceBetween: 30
        });
        })
      }
  }
}])

book.directive('jsSwImg',[function(){
  return {
      replace:true,
      restrict:'E',
      templateUrl:'views/directive/swimg.html',
      link:function($scope,el){
        $(function(){
          var swiper2 = new Swiper('.swiper-container2', {
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false
        });
        })
      }
  }
}])

var wz = [
    {content:[
      {name:'一位喵先生',time:'06.08 14:09',neirong:'让你的兴趣 成为你的本事',jilu:'39次阅 42次评论 139次喜欢',href:'../../images/t1.png',touxiang:'touxiang1'},
      {name:'江北不吃米',time:'07.28 23:09',neirong:'通过12个APP 我将我的生活倾囊相授',jilu:'2659次阅 71次评论 179次喜欢',href:'../../images/t2.png',touxiang:'touxiang2'},
      {name:'用时间酿酒',time:'01.04 14:29',neirong:'大学不谈恋爱就不完整 屁嘞',jilu:'362次阅 52次评论 159次喜欢',href:'../../images/t3.png',touxiang:'touxiang3'},
      {name:'剑圣喵大师',time:'06.08 18:09',neirong:'你看起来很厉害 所以一事无成',jilu:'49次阅 <514></514>次评论 179次喜欢',href:'../../images/t4.png',touxiang:'touxiang4'},
      {name:'忙碌碌',time:'06.08 14:09',neirong:'没有人负责你的孤独',jilu:'519次阅 466次评论 179次喜欢',href:'../../images/t5.png',touxiang:'touxiang5'},
      {name:'张铁定',time:'08.08 14:16',neirong:'每个工会都有一个贼T 为了艾泽拉斯',jilu:'79次阅 75次评论 19次喜欢',href:'../../images/t6.png',touxiang:'touxiang6'},
      {name:'巴塞电影',time:'02.16 14:09',neirong:'十部改变人生的旅行佳片',jilu:'49次阅 71次评论 579次喜欢',href:'../../images/t7.png',touxiang:'touxiang7'},
      {name:'简书播客',time:'06.08 19:09',neirong:'恋人间最好的状态是什么',jilu:'2452次阅 55次评论 279次喜欢',href:'../../images/t8.png',touxiang:'touxiang8'},
      {name:'隔壁村的二姑',time:'09.28 14:39',neirong:'想涨工资 你得学会怎么写简历',jilu:'175次阅 764次评论 259次喜欢',href:'../../images/t9.png',touxiang:'touxiang9'},
      {name:'丝竹凝玉',time:'06.08 21:09',neirong:'姑娘：管好你的嘴 ',jilu:'2546次阅 32次评论 79次喜欢',href:'../../images/t10.png',touxiang:'touxiang10'},
      ]},
    {content:[
      {name:'一位喵先生',time:'06.08 14:09',neirong:'让你的兴趣 成为你的本事',jilu:'39次阅 42次评论 139次喜欢',href:'../../images/t8.png',touxiang:'touxiang1'},
      {name:'江北不吃米',time:'07.28 23:09',neirong:'通过12个APP 我将我的生活倾囊相授',jilu:'2659次阅 71次评论 179次喜欢',href:'../../images/t2.png',touxiang:'touxiang2'},
      {name:'用时间酿酒',time:'01.04 14:29',neirong:'大学不谈恋爱就不完整 屁嘞',jilu:'362次阅 52次评论 159次喜欢',href:'../../images/t3.png',touxiang:'touxiang3'},
      {name:'剑圣喵大师',time:'06.08 18:09',neirong:'你看起来很厉害 所以一事无成',jilu:'49次阅 <514></514>次评论 179次喜欢',href:'../../images/t4.png',touxiang:'touxiang4'},
      {name:'忙碌碌',time:'06.08 14:09',neirong:'没有人负责你的孤独',jilu:'519次阅 466次评论 179次喜欢',href:'../../images/t5.png',touxiang:'touxiang5'},
      {name:'张铁定',time:'08.08 14:16',neirong:'每个工会都有一个贼T 为了艾泽拉斯',jilu:'79次阅 75次评论 19次喜欢',href:'../../images/t6.png',touxiang:'touxiang6'},
      {name:'巴塞电影',time:'02.16 14:09',neirong:'十部改变人生的旅行佳片',jilu:'49次阅 71次评论 579次喜欢',href:'../../images/t7.png',touxiang:'touxiang7'},
      {name:'简书播客',time:'06.08 19:09',neirong:'恋人间最好的状态是什么',jilu:'2452次阅 55次评论 279次喜欢',href:'../../images/t8.png',touxiang:'touxiang8'},
      {name:'隔壁村的二姑',time:'09.28 14:39',neirong:'想涨工资 你得学会怎么写简历',jilu:'175次阅 764次评论 259次喜欢',href:'../../images/t9.png',touxiang:'touxiang9'},
      {name:'丝竹凝玉',time:'06.08 21:09',neirong:'姑娘：管好你的嘴 ',jilu:'2546次阅 32次评论 79次喜欢',href:'../../images/t10.png',touxiang:'touxiang10'},
      ]},
      {content:[
      {name:'一位喵先生',time:'06.08 14:09',neirong:'让你的兴趣 成为你的本事',jilu:'39次阅 42次评论 139次喜欢',href:'../../images/t6.png',touxiang:'touxiang1'},
      {name:'江北不吃米',time:'07.28 23:09',neirong:'通过12个APP 我将我的生活倾囊相授',jilu:'2659次阅 71次评论 179次喜欢',href:'../../images/t2.png',touxiang:'touxiang2'},
      {name:'用时间酿酒',time:'01.04 14:29',neirong:'大学不谈恋爱就不完整 屁嘞',jilu:'362次阅 52次评论 159次喜欢',href:'../../images/t3.png',touxiang:'touxiang3'},
      {name:'剑圣喵大师',time:'06.08 18:09',neirong:'你看起来很厉害 所以一事无成',jilu:'49次阅 <514></514>次评论 179次喜欢',href:'../../images/t4.png',touxiang:'touxiang4'},
      {name:'忙碌碌',time:'06.08 14:09',neirong:'没有人负责你的孤独',jilu:'519次阅 466次评论 179次喜欢',href:'../../images/t5.png',touxiang:'touxiang5'},
      {name:'张铁定',time:'08.08 14:16',neirong:'每个工会都有一个贼T 为了艾泽拉斯',jilu:'79次阅 75次评论 19次喜欢',href:'../../images/t6.png',touxiang:'touxiang6'},
      {name:'巴塞电影',time:'02.16 14:09',neirong:'十部改变人生的旅行佳片',jilu:'49次阅 71次评论 579次喜欢',href:'../../images/t7.png',touxiang:'touxiang7'},
      {name:'简书播客',time:'06.08 19:09',neirong:'恋人间最好的状态是什么',jilu:'2452次阅 55次评论 279次喜欢',href:'../../images/t8.png',touxiang:'touxiang8'},
      {name:'隔壁村的二姑',time:'09.28 14:39',neirong:'想涨工资 你得学会怎么写简历',jilu:'175次阅 764次评论 259次喜欢',href:'../../images/t9.png',touxiang:'touxiang9'},
      {name:'丝竹凝玉',time:'06.08 21:09',neirong:'姑娘：管好你的嘴 ',jilu:'2546次阅 32次评论 79次喜欢',href:'../../images/t10.png',touxiang:'touxiang10'},
      ]},  
      {content:[
      {name:'一位喵先生',time:'06.08 14:09',neirong:'让你的兴趣 成为你的本事',jilu:'39次阅 42次评论 139次喜欢',href:'../../images/t2.png',touxiang:'touxiang1'},
      {name:'江北不吃米',time:'07.28 23:09',neirong:'通过12个APP 我将我的生活倾囊相授',jilu:'2659次阅 71次评论 179次喜欢',href:'../../images/t2.png',touxiang:'touxiang2'},
      {name:'用时间酿酒',time:'01.04 14:29',neirong:'大学不谈恋爱就不完整 屁嘞',jilu:'362次阅 52次评论 159次喜欢',href:'../../images/t3.png',touxiang:'touxiang3'},
      {name:'剑圣喵大师',time:'06.08 18:09',neirong:'你看起来很厉害 所以一事无成',jilu:'49次阅 <514></514>次评论 179次喜欢',href:'../../images/t3.png',touxiang:'touxiang4'},
      {name:'忙碌碌',time:'06.08 14:09',neirong:'没有人负责你的孤独',jilu:'519次阅 466次评论 179次喜欢',href:'../../images/t5.png',touxiang:'touxiang5'},
      {name:'张铁定',time:'08.08 14:16',neirong:'每个工会都有一个贼T 为了艾泽拉斯',jilu:'79次阅 75次评论 19次喜欢',href:'../../images/t6.png',touxiang:'touxiang6'},
      {name:'巴塞电影',time:'02.16 14:09',neirong:'十部改变人生的旅行佳片',jilu:'49次阅 71次评论 579次喜欢',href:'../../images/t7.png',touxiang:'touxiang7'},
      {name:'简书播客',time:'06.08 19:09',neirong:'恋人间最好的状态是什么',jilu:'2452次阅 55次评论 279次喜欢',href:'../../images/t8.png',touxiang:'touxiang8'},
      {name:'隔壁村的二姑',time:'09.28 14:39',neirong:'想涨工资 你得学会怎么写简历',jilu:'175次阅 764次评论 259次喜欢',href:'../../images/t9.png',touxiang:'touxiang9'},
      {name:'丝竹凝玉',time:'06.08 21:09',neirong:'姑娘：管好你的嘴 ',jilu:'2546次阅 32次评论 79次喜欢',href:'../../images/t10.png',touxiang:'touxiang10'},
      ]},  
      {content:[
      {name:'一位喵先生',time:'06.08 14:09',neirong:'让你的兴趣 成为你的本事',jilu:'39次阅 42次评论 139次喜欢',href:'../../images/t5.png',touxiang:'touxiang1'},
      {name:'江北不吃米',time:'07.28 23:09',neirong:'通过12个APP 我将我的生活倾囊相授',jilu:'2659次阅 71次评论 179次喜欢',href:'../../images/t4.png',touxiang:'touxiang2'},
      {name:'用时间酿酒',time:'01.04 14:29',neirong:'大学不谈恋爱就不完整 屁嘞',jilu:'362次阅 52次评论 159次喜欢',href:'../../images/t3.png',touxiang:'touxiang3'},
      {name:'剑圣喵大师',time:'06.08 18:09',neirong:'你看起来很厉害 所以一事无成',jilu:'49次阅 <514></514>次评论 179次喜欢',href:'../../images/t7.png',touxiang:'touxiang4'},
      {name:'忙碌碌',time:'06.08 14:09',neirong:'没有人负责你的孤独',jilu:'519次阅 466次评论 179次喜欢',href:'../../images/t5.png',touxiang:'touxiang5'},
      {name:'张铁定',time:'08.08 14:16',neirong:'每个工会都有一个贼T 为了艾泽拉斯',jilu:'79次阅 75次评论 19次喜欢',href:'../../images/t6.png',touxiang:'touxiang6'},
      {name:'巴塞电影',time:'02.16 14:09',neirong:'十部改变人生的旅行佳片',jilu:'49次阅 71次评论 579次喜欢',href:'../../images/t7.png',touxiang:'touxiang7'},
      {name:'简书播客',time:'06.08 19:09',neirong:'恋人间最好的状态是什么',jilu:'2452次阅 55次评论 279次喜欢',href:'../../images/t8.png',touxiang:'touxiang8'},
      {name:'隔壁村的二姑',time:'09.28 14:39',neirong:'想涨工资 你得学会怎么写简历',jilu:'175次阅 764次评论 259次喜欢',href:'../../images/t9.png',touxiang:'touxiang9'},
      {name:'丝竹凝玉',time:'06.08 21:09',neirong:'姑娘：管好你的嘴 ',jilu:'2546次阅 32次评论 79次喜欢',href:'../../images/t10.png',touxiang:'touxiang10'},
      ]},  
      {content:[
      {name:'一位喵先生',time:'06.08 14:09',neirong:'让你的兴趣 成为你的本事',jilu:'39次阅 42次评论 139次喜欢',href:'../../images/t7.png',touxiang:'touxiang1'},
      {name:'江北不吃米',time:'07.28 23:09',neirong:'通过12个APP 我将我的生活倾囊相授',jilu:'2659次阅 71次评论 179次喜欢',href:'../../images/t2.png',touxiang:'touxiang2'},
      {name:'用时间酿酒',time:'01.04 14:29',neirong:'大学不谈恋爱就不完整 屁嘞',jilu:'362次阅 52次评论 159次喜欢',href:'../../images/t9.png',touxiang:'touxiang3'},
      {name:'剑圣喵大师',time:'06.08 18:09',neirong:'你看起来很厉害 所以一事无成',jilu:'49次阅 <514></514>次评论 179次喜欢',href:'../../images/t4.png',touxiang:'touxiang4'},
      {name:'忙碌碌',time:'06.08 14:09',neirong:'没有人负责你的孤独',jilu:'519次阅 466次评论 179次喜欢',href:'../../images/t5.png',touxiang:'touxiang5'},
      {name:'张铁定',time:'08.08 14:16',neirong:'每个工会都有一个贼T 为了艾泽拉斯',jilu:'79次阅 75次评论 19次喜欢',href:'../../images/t6.png',touxiang:'touxiang6'},
      {name:'巴塞电影',time:'02.16 14:09',neirong:'十部改变人生的旅行佳片',jilu:'49次阅 71次评论 579次喜欢',href:'../../images/t7.png',touxiang:'touxiang7'},
      {name:'简书播客',time:'06.08 19:09',neirong:'恋人间最好的状态是什么',jilu:'2452次阅 55次评论 279次喜欢',href:'../../images/t8.png',touxiang:'touxiang8'},
      {name:'隔壁村的二姑',time:'09.28 14:39',neirong:'想涨工资 你得学会怎么写简历',jilu:'175次阅 764次评论 259次喜欢',href:'../../images/t9.png',touxiang:'touxiang9'},
      {name:'丝竹凝玉',time:'06.08 21:09',neirong:'姑娘：管好你的嘴 ',jilu:'2546次阅 32次评论 79次喜欢',href:'../../images/t10.png',touxiang:'touxiang10'},
      ]},  
      {content:[
      {name:'一位喵先生',time:'06.08 14:09',neirong:'让你的兴趣 成为你的本事',jilu:'39次阅 42次评论 139次喜欢',href:'../../images/t1.png',touxiang:'touxiang1'},
      {name:'江北不吃米',time:'07.28 23:09',neirong:'通过12个APP 我将我的生活倾囊相授',jilu:'2659次阅 71次评论 179次喜欢',href:'../../images/t2.png',touxiang:'touxiang2'},
      {name:'用时间酿酒',time:'01.04 14:29',neirong:'大学不谈恋爱就不完整 屁嘞',jilu:'362次阅 52次评论 159次喜欢',href:'../../images/t7.png',touxiang:'touxiang3'},
      {name:'剑圣喵大师',time:'06.08 18:09',neirong:'你看起来很厉害 所以一事无成',jilu:'49次阅 <514></514>次评论 179次喜欢',href:'../../images/t2.png',touxiang:'touxiang4'},
      {name:'忙碌碌',time:'06.08 14:09',neirong:'没有人负责你的孤独',jilu:'519次阅 466次评论 179次喜欢',href:'../../images/t5.png',touxiang:'touxiang5'},
      {name:'张铁定',time:'08.08 14:16',neirong:'每个工会都有一个贼T 为了艾泽拉斯',jilu:'79次阅 75次评论 19次喜欢',href:'../../images/t6.png',touxiang:'touxiang6'},
      {name:'巴塞电影',time:'02.16 14:09',neirong:'十部改变人生的旅行佳片',jilu:'49次阅 71次评论 579次喜欢',href:'../../images/t7.png',touxiang:'touxiang7'},
      {name:'简书播客',time:'06.08 19:09',neirong:'恋人间最好的状态是什么',jilu:'2452次阅 55次评论 279次喜欢',href:'../../images/t8.png',touxiang:'touxiang8'},
      {name:'隔壁村的二姑',time:'09.28 14:39',neirong:'想涨工资 你得学会怎么写简历',jilu:'175次阅 764次评论 259次喜欢',href:'../../images/t9.png',touxiang:'touxiang9'},
      {name:'丝竹凝玉',time:'06.08 21:09',neirong:'姑娘：管好你的嘴 ',jilu:'2546次阅 32次评论 79次喜欢',href:'../../images/t10.png',touxiang:'touxiang10'},
      ]},  
      {content:[
      {name:'一位喵先生',time:'06.08 14:09',neirong:'让你的兴趣 成为你的本事',jilu:'39次阅 42次评论 139次喜欢',href:'../../images/t9.png',touxiang:'touxiang1'},
      {name:'江北不吃米',time:'07.28 23:09',neirong:'通过12个APP 我将我的生活倾囊相授',jilu:'2659次阅 71次评论 179次喜欢',href:'../../images/t7.png',touxiang:'touxiang2'},
      {name:'用时间酿酒',time:'01.04 14:29',neirong:'大学不谈恋爱就不完整 屁嘞',jilu:'362次阅 52次评论 159次喜欢',href:'../../images/t3.png',touxiang:'touxiang3'},
      {name:'剑圣喵大师',time:'06.08 18:09',neirong:'你看起来很厉害 所以一事无成',jilu:'49次阅 <514></514>次评论 179次喜欢',href:'../../images/t3.png',touxiang:'touxiang4'},
      {name:'忙碌碌',time:'06.08 14:09',neirong:'没有人负责你的孤独',jilu:'519次阅 466次评论 179次喜欢',href:'../../images/t5.png',touxiang:'touxiang5'},
      {name:'张铁定',time:'08.08 14:16',neirong:'每个工会都有一个贼T 为了艾泽拉斯',jilu:'79次阅 75次评论 19次喜欢',href:'../../images/t6.png',touxiang:'touxiang6'},
      {name:'巴塞电影',time:'02.16 14:09',neirong:'十部改变人生的旅行佳片',jilu:'49次阅 71次评论 579次喜欢',href:'../../images/t7.png',touxiang:'touxiang7'},
      {name:'简书播客',time:'06.08 19:09',neirong:'恋人间最好的状态是什么',jilu:'2452次阅 55次评论 279次喜欢',href:'../../images/t8.png',touxiang:'touxiang8'},
      {name:'隔壁村的二姑',time:'09.28 14:39',neirong:'想涨工资 你得学会怎么写简历',jilu:'175次阅 764次评论 259次喜欢',href:'../../images/t9.png',touxiang:'touxiang9'},
      {name:'丝竹凝玉',time:'06.08 21:09',neirong:'姑娘：管好你的嘴 ',jilu:'2546次阅 32次评论 79次喜欢',href:'../../images/t10.png',touxiang:'touxiang10'},
      ]},  
    ];

book.controller('wenzhangCtrl',['$scope','$routeParams',function($scope,$routeParams){
    $scope.wz = wz;
    var id = $routeParams.id;
    $scope.lists1 = $scope.wz[ 0 ].content;
}])

book.controller('wzCtrl',['$scope','$routeParams',function($scope,$routeParams){
    $scope.wz = wz;
    var id = $routeParams.id;
    $scope.lists1 = $scope.wz[ id ].content;
}])

var List = [
    {content:[
      {touxiang:'touxiang8',f1:'诗',f2:'86篇文章  39449人关注',f3:'出售各种炫酷物品 快来关注吧',f4:'商业合作'},
      {touxiang:'touxiang5',f1:'青春',f2:'86篇文章  39449人关注',f3:'年轻气盛与青梅竹马',f4:'商业合作'},
      {touxiang:'touxiang3',f1:'简书市集',f2:'86篇文章  39449人关注',f3:'出售各种炫酷物品 快来关注吧',f4:'商业合作'},
      {touxiang:'touxiang4',f1:'简书市集',f2:'86篇文章  39449人关注',f3:'出售各种炫酷物品 快来关注吧',f4:'商业合作'},
      {touxiang:'touxiang1',f1:'简书市集',f2:'86篇文章  39449人关注',f3:'出售各种炫酷物品 快来关注吧',f4:'商业合作'},
      {touxiang:'touxiang9',f1:'简书市集',f2:'86篇文章  39449人关注',f3:'出售各种炫酷物品 快来关注吧',f4:'商业合作'},
      ]},
      {content:[
      {touxiang:'touxiang1',f1:'简书市集',f2:'86篇文章  39449人关注',f3:'出售各种炫酷物品 快来关注吧',f4:'商业合作'},
      {touxiang:'touxiang2',f1:'简书魔兽征文大赛',f2:'86篇文章  39449人关注',f3:'出售各种炫酷物品 快来关注吧',f4:'商业合作'},
      {touxiang:'touxiang7',f1:'@IT',f2:'86篇文章  39449人关注',f3:'简书上的IT大社群',f4:'商业合作'},
      {touxiang:'touxiang10',f1:'连载',f2:'86篇文章  39449人关注',f3:'出售各种炫酷物品 快来关注吧',f4:'商业合作'},
      {touxiang:'touxiang5',f1:'程序员',f2:'86篇文章  39449人关注',f3:'出售各种炫酷物品 快来关注吧',f4:'商业合作'},
      {touxiang:'touxiang9',f1:'世间事',f2:'86篇文章  39449人关注',f3:'有趣 温暖 或者悲伤',f4:'商业合作'},
      ]}
    ];

book.controller('zhuantiCtrl',['$scope','$routeParams',function($scope,$routeParams){
    $scope.Lists = List;
    var id = $routeParams.id;
    $scope.lists2 = $scope.Lists[ 0 ].content;
}])

book.controller('ztCtrl',['$scope','$routeParams',function($scope,$routeParams){
    $scope.Lists = List;
    var id = $routeParams.id;
    $scope.lists3 = $scope.Lists[ id ].content;
}])


book.controller('guanzhuCtrl',['$scope',function($scope){

}])

book.controller('fenxiangCtrl',['$scope',function($scope){

}])

book.controller('xiaoxiCtrl',['$scope',function($scope){

}])

book.controller('wodeCtrl',['$scope',function($scope){

}])

book.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
      controller:'wenzhangCtrl',
      templateUrl:'views/templates/wenzhang.html',
    }).when('/wenzhang',{
      controller:'wenzhangCtrl',
      templateUrl:'views/templates/wenzhang.html',
    }).when('/wz/:id',{
      controller:'wzCtrl',
      templateUrl:'views/templates/wz.html',
    }).when('/zhuanti',{
      controller:'zhuantiCtrl',
      templateUrl:'views/templates/zhuanti.html',
    }).when('/zt/:id',{
      controller:'ztCtrl',
      templateUrl:'views/templates/zt.html',
    }).when('/xiaoxi',{
      controller:'xiaoxiCtrl',
      templateUrl:'views/templates/xiaoxi.html',
    }).when('/fenxiang',{
      controller:'fenxiangCtrl',
      templateUrl:'views/templates/fenxiang.html',
    }).when('/guanzhu',{
      controller:'guanzhuCtrl',
      templateUrl:'views/templates/guanzhu.html',
    }).when('/wode',{
      controller:'wodeCtrl',
      templateUrl:'views/templates/wode.html',
    }).otherwise({
      redirectTo:'/'
    })
}])
