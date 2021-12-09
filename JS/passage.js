//请求加载对应的文章
function request(params) {
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            $("div.v").empty();
             $(function() {
            var  testEditormdView;    
            testEditormdView = editormd.markdownToHTML("test-editormd-view", {
                markdown:xmlhttp.responseText,
                htmlDecode      : "style,script,iframe",  // you can filter tags decode
                emoji           : true,
                taskList        : true,
                tex             : true,  // 默认不解析
                flowChart       : true,  // 默认不解析
                sequenceDiagram : true,  // 默认不解析
            });
        });
        timeRequest(params);
        }
    }
    xmlhttp.open("GET","../php/markdownReturn.php?title="+params,true);
    xmlhttp.send();
}
function timeRequest(params) {
    var xmlhttp2;
    if (window.XMLHttpRequest)
    {
        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp2=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp2.onreadystatechange=function()
    {
        if (xmlhttp2.readyState==4 && xmlhttp2.status==200)
        {
            $("span.time").html(xmlhttp2.responseText);
        }
    }
    xmlhttp2.open("GET","../php/timeReturn.php?title="+params,true);
    xmlhttp2.send();
    
}
