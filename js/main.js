
$('[data-fancybox]').fancybox({
    buttons: [
      "zoom",
      // "share",
      "slideShow",
      "fullScreen",
      // "download",
      "thumbs",
      "close"
    ],
    transitionEffect: "slide",
  });



  
$(document).on('click','.contents',function(e){
  e.preventDefault();
  var op = $(this)
  var content_classes = document.getElementsByClassName("contents");
  
  for(var i = 0; i < content_classes.length; i++){
    $(content_classes[i]).removeClass('my-active')
  }
  
  op.addClass('my-active') 
  })
  
  
  $(document).on('click','.time-div',function(e){
  e.preventDefault();
  var op = $(this)
  var content_classes = document.getElementsByClassName("time-div");
  
  for(var i = 0; i < content_classes.length; i++){
    $(content_classes[i]).removeClass('my-active-time')
  }
  
  op.addClass('my-active-time') 
  })
  
  
  $(document).on('click','.contents-back-end',function(e){
  e.preventDefault();
  var op = $(this)
  var content_classes = document.getElementsByClassName("contents-back-end");
  
  for(var i = 0; i < content_classes.length; i++){
    $(content_classes[i]).removeClass('my-active-time')
  }
  
  op.addClass('my-active-time') 
  })
  




  // ---------  //
      //remove  
    //   $(document).click(function (event) {
    //     if (!$(event.target).closest(".list-group").length) {
    //         $("body").find(".list-group").removeClass("active");
    //     }
    // });
