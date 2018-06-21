<script type="text/javascript">

var banner = new FragmentBanner({
    container : "#banner1",//选择容器 必选
    imgs : ['images/a1.png','images/a2.png','images/a3.png','images/a4.png','images/a5.png'],//图片集合 必选
    size : {
        width : 1000,
        height : 560
    },//容器的大小 可选
    //行数与列数 可选
    grid : {
        line : 12,
        list : 14
    },
    index: 0,//图片集合的索引位置 可选
    type : 2,//切换类型 1 ， 2 可选
    boxTime : 5000,//小方块来回运动的时长 可选
    fnTime : 10000//banner切换的时长 可选
});

/*
** 只填两个必要参数也是可以的
*/
var banenr2 = new FragmentBanner({
    container : "#banner2",//选择容器 必选
    imgs : ['images/a1.png','images/a2.png','images/a3.png','images/a4.png','images/a5.png'],//图片集合
});

</script>