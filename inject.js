// Copyright (c) 2015, 770470455@qq.com 
// http://leon.leanote.com
// --------------------------------------------------------------------
// version 1.0
// -------------------------------------------------------------------

var aa = document.getElementById('DataList1_ctl00_HyperLink1').text;
if (aa == '教学任务及课表') {
    document.getElementById('DataList1_ctl07_HyperLink1').target = "_blank";
    document.getElementById('DataList1_ctl07_HyperLink1').innerHTML = "一键评教 GO! GO! GO!";
    document.getElementById('DataList1_ctl07_HyperLink1').style.color = "red";
    var htmlButton = "<dt><input type='button' id='yijianchengji' value='打开成绩一键录入功能' /></dt>";
    document.getElementsByTagName('dt')[1].insertAdjacentHTML('afterEnd', htmlButton);
    document.getElementById('yijianchengji').onclick = function yijian() {
        if (document.getElementById('IFRAME1').contentWindow.document.getElementById('Btbccj') == null) {
            alert('请先进入学生成绩录入界面!');
        } else {
            if (document.getElementById('IFRAME1').contentWindow.document.getElementById('yijian') == null) {
                var htmlyjcj = "<center> " + "<div  style='width:100%;border: 4px dashed #FF0000;' >" + "<center> " + "<h1>总评成绩一键录入使用教程</h1>"
                    + "<p style='font-size:16px;'> ① 按学号升序把成绩排好,直接复制Excel中成绩一列内容粘贴到下面的输入框内 " + "<br/>" + "<br/>"
                    + "②注意!!! 不需要复制列头!缺考或其他原因没有成绩的,成绩填'0',一键录入后手动修改" + "<br/>" + "<br/>"
                    + "③ 最后点击 [一键录入] 按钮" + "<br/>" + "<br/>" + "④ 检查无误后点击保存成绩按钮" +
                    "<br/>" + "<br/>" + "</p> "
                    + "<textarea id='chengjiinput' style='height:70px;width:95%;'>80\n86\n79\n69\n82\n76\n72\n74\n80\n</textarea>"
                    + "<br/><br/><input type='button' id='yijian' style= 'height:30px;width:100px' value='一键录入' /><br/>"
                    + "<p>轻轻松松就把成绩录入了~</p>" + "<p style='font-size:16px;'>©<a style='font-size:16px;' id='leon' herf='http://leon.leanote.com' target='_blank'>Leon</a></p>" + "</center>" + "</div>" + "<center> ";
                document.getElementById('IFRAME1').contentWindow.document.getElementById('UpdatePanel1').insertAdjacentHTML('afterEnd', htmlyjcj);
                //window.open("http://csv2json.com/",'_blank',"height=500,width=500,status=yes,toolbar=yes, menubar=no,location=no")
                document.getElementById('IFRAME1').contentWindow.document.getElementById('yijian').onclick = function chengjishuru() {
                    var inputVlaue = document.getElementById('IFRAME1').contentWindow.document.getElementById('chengjiinput');
                    var inputArrayValue = inputVlaue.value.split("\n");
                    for (var m = 2; m < 2 + inputArrayValue.length; m++) {
                        if (m < 10) {
                            var mm = '0' + m;
                        } else {
                            var mm = m + '';
                        }
                        var idValue = 'GVcjmd_ctl' + mm + '_TxtkscjI';
                        if (inputArrayValue[m - 2] == '') {
                        } else {
                            document.getElementById('IFRAME1').contentWindow.document.getElementById(idValue).disabled = '';
                            window.document.getElementById('IFRAME1').contentWindow.document.getElementById(idValue).value = inputArrayValue[m - 2];
                        }
                    }
                    document.getElementById('IFRAME1').contentWindow.document.getElementById('leon').onclick = function tz() {
                        window.open('http://blog.sharecode.pub/2015/06/18/jw-wxit-helper-chrome-plugin/');
                    }
                }
               
            } else {
                alert('已经准备就绪,请勿重复点击!');
            }
        }
    }
} else {
    document.getElementById('DataList1_ctl10_HyperLink1').target = "_blank";
    document.getElementById('DataList1_ctl10_HyperLink1').innerHTML = "一键评教 GO! GO! GO!";
    document.getElementById('DataList1_ctl10_HyperLink1').style.color = "red";
}
