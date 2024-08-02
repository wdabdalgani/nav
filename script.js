function showWelcomeNotification() {
  // طلب إذن لعرض الإشعارات
  if (Notification.permission === 'default') {
    Notification.requestPermission().then(function(permission) {
      if (permission === 'granted') {
        showNotification();
      }
    });
  } else if (Notification.permission === 'granted') {
    showNotification();
  }

  function showNotification() {
    // إنشاء إشعار جديد
    const notification = new Notification('مرحبًا!', {
      body: 'مرحبًا بك في موقعنا. نتمنى لك تجربة رائعة!',
      icon: 'path/to/icon.png' // اختياري: يمكن إضافة أيقونة للإشعار
    });

    // إضافة حدث عند النقر على الإشعار
    notification.onclick = function() {
      window.focus();
    };
  }
}
let x = 9;
console. log(x);