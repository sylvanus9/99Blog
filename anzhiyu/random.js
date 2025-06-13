var posts=["2022/11/19/example/","2023/01/18/linggan/纸面情绪/","2023/03/10/linggan/柯南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };