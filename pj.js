var html = "<center> " + "<div  style='width:35%;border: 4px dashed #FF0000;' >" + "<center> " + "<h1>一键评教使用教程</h1>"
    + "<p style='font-size:16px;'> ① 先点击左上方各个老师的 [选择评价] 按钮" + "<br/>" + "<br/>"
    + "② 待下方出现内容后再点击 [一键好评] 按钮 " + "<br/>" + "<br/>" + "③ 最后点击 [保存结果] 按钮" + "<br/>" + "<br/>" + "</p> "
    + "<input type='button' id='xuan' style= 'height:30px;width:100px' value='一键好评' />"
    + "<input type='button' id='cha' style= 'height:30px;width:100px' value='一键差评' />"
    + "<br/>" + "<br/>" + "<input type='button' id='jianyi' style= 'height:30px;width:100px' value='随机提建议' />"
    + "<input type='button' id='yijian' style= 'height:30px;width:100px' value='随机提意见' />"
    + "<p>轻轻松松一门课就评教完了~</p>"
    + "<p style='font-size:16px;'>©<a style='font-size:16px;' id='leon' herf='http://blog.sharecode.pub' target='_blank'>Leon</a></p>"
    + "</center>" + "</div>" + "<center> ";
document.getElementById('Panel1').insertAdjacentHTML('afterEnd', html);
document.getElementById('Panel1').style.height = '';
document.getElementById('Panel2').style.height = '';
alert("Leon提醒你:\n \n 仔细阅读一键评教教程将事半功倍!");
var buttons = document.getElementById('xuan');
buttons.onclick = function pj() {
    var a = document.body.getElementsByTagName('input');
    for (var i = 0; i < a.length; i++) {
        if (a[i].value == 95)a[i].checked = true;
        if (a[i].id == 'GVpjzb_ctl19_RaBxz_1')a[i].checked = true;
    }
}
var cha = document.getElementById('cha');
cha.onclick = function cp() {
    alert("给你开玩笑滴!怎么可能让你差评~\n爱差评的不是好孩子!\n\n©Leon 版权所有");
}
var leon = document.getElementById('leon');
leon.onclick = function tz() {
    window.open("http://blog.sharecode.pub/2015/06/18/jw-wxit-helper-chrome-plugin/");
}
var yijian = document.getElementById('yijian');
yijian.onclick = function yijian() {
    document.getElementById('Txtyjjy').innerHTML = "这个老师还行吧....";
}
var jianyi = document.getElementById('jianyi');
jianyi.onclick = function jianyi() {
    document.getElementById('Txtyjjy').innerHTML = "这个老师非常棒!!!";
}
