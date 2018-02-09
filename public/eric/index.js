$(document).ready(function(){
  $(document.getElementById('burger')).each(function(i){
    if (this.complete){
      $(this).fadeIn(10000);
    }else{
      $(this).load(function() {
        $(this).fadeIn(10000);
      });
    }
  }
});
