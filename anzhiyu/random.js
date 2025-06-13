var posts=["2024/11/09/日常碎片/最近的我/","2025/06/13/直播笔记/【抖音】粉丝地址查找/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };