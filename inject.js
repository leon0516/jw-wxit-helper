// Copyright (c) 2015, 770470455@qq.com 
// http://leon.leanote.com
// --------------------------------------------------------------------
// version 1.0
// -------------------------------------------------------------------

var aa =document.getElementById('DataList1_ctl00_HyperLink1').text;
if (aa=='教学任务及课表'){
	document.getElementById('DataList1_ctl07_HyperLink1').target="_blank";
	document.getElementById('DataList1_ctl07_HyperLink1').innerHTML="一键评教 GO! GO! GO!";
	document.getElementById('DataList1_ctl07_HyperLink1').style.color="red";
	var htmlButton="<dt><input type='button' id='yijianchengji' value='一键录入' /></dt>";
	
	document.getElementsByTagName('dt')[1].insertAdjacentHTML('afterEnd',htmlButton);
	document.getElementById('yijianchengji').onclick=function yijian(){
		
		var htmlyjcj="<center> "+ "<div  style='width:100%;border: 4px dashed #FF0000;' >"+ "<center> "+"<h1>一键成绩录入使用教程</h1>"
		+"<p style='font-size:16px;'> ① 先点击左上方各个老师的 [选择评价] 按钮"+"<br/>"+"<br/>"
		+"② 待下方出现内容后再点击 [一键好评] 按钮 "+"<br/>"+"<br/>"+"③ 最后点击 [保存结果] 按钮"+"<br/>"+"<br/>"+"</p> "+ "<textarea id='chengjiinput' style='height:70px;width:95%;'>[12,34,456,56,678,34,23,56,67,78]</textarea>"+"<br/><br/><input type='button' id='yijian' style= 'height:30px;width:100px' value='一键录入' /><br/>"+"<p>轻轻松松就把成绩录入了~</p>"+"<p style='font-size:16px;'>©<a style='font-size:16px;' id='leon' herf='http://leon.leanote.com' target='_blank'>Leon</a></p>"+ "</center>"+ "</div>"+"<center> ";
	
		document.getElementById('IFRAME1').contentWindow.document.getElementById('UpdatePanel1').insertAdjacentHTML('afterEnd',htmlyjcj);
		//window.open("http://csv2json.com/",'_blank',"height=500,width=500,status=yes,toolbar=yes, menubar=no,location=no")
		//document.getElementById('IFRAME1').contentWindow.document.getElementById('Radbt_3').checked=true;
		document.getElementById('IFRAME1').contentWindow.document.getElementById('yijian').onclick=function chengjishuru(){
			var inputVlaue=document.getElementById('IFRAME1').contentWindow.document.getElementById('chengjiinput').value;
			var aaaa=JSON.parse(inputVlaue);
			for(ii in aaaa){
				if(aaaa[ii].xh==""){
					delete aaaa[ii];
				}
			}
			var m=2;
			for(m=2;m<2+aaaa.length;m++){
				if(m<10){
					var mm='0'+m;
				}else{
					var mm=m+'';
				}
				var idValue='GVcjmd_ctl'+mm+'_TxtkscjI';
				console.log(idValue);
				document.getElementById('IFRAME1').contentWindow.document.getElementById(idValue).disabled='';
				var chengjiinputbox=window.document.getElementById('IFRAME1').contentWindow.document.getElementById(idValue).value=aaaa[m-2].zpcj;
			}
			document.getElementById('IFRAME1').contentWindow.document.getElementById('leon').onclick=function tz(){
			window.open('http://blog.sharecode.pub/2015/06/18/jw-wxit-helper-chrome-plugin/'); 
	}
		};

		
	}
	
}else{
document.getElementById('DataList1_ctl10_HyperLink1').target="_blank";
document.getElementById('DataList1_ctl10_HyperLink1').innerHTML="一键评教 GO! GO! GO!";
document.getElementById('DataList1_ctl10_HyperLink1').style.color="red";	
}
