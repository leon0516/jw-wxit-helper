document.addEventListener('DOMContentLoaded', function () {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

function notifyMe() {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('锡职评教助手教程', {
      icon: 'http://77fz4f.com1.z0.glb.clouddn.com/icon.png',
      body: "欢迎使用锡职评教助手!有问题欢迎反馈~"
    });

    notification.onclick = function () {
      window.open("http://blog.sharecode.pub/2015/06/18/jw-wxit-helper-chrome-plugin/");      
    };

  }

}
notifyMe();