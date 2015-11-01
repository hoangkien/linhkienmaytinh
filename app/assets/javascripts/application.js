// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require bootstrap-sprockets
//= require bootstrap
//= require turbolinks
//= require ckeditor/init
//= require_tree .
var map;
function initialize() {
    var myLatlng = new google.maps.LatLng(20.89288,105.98432);
    var myOptions = {
      zoom: 16,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("div_id"), myOptions);
      // Biến text chứa nội dung sẽ được hiển thị
    var text;
    text= "<b style='color:#00F' " +
             "style='text-align:center'>Công ty TNHH Thương mại và Sản xuất nước sạch Hà Dũng<br /> Từ hồ - yên phú - yên mỹ - Hưng yên<br /> SDT : 0975.792.655";
       var infowindow = new google.maps.InfoWindow(
        { content: text,
            size: new google.maps.Size(100,50),
            position: myLatlng
        });
           infowindow.open(map);
        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title:"Công ty TNHH Thương mại và Sản xuất nước sạch Hà Dũng"
      });
}
function check(){
      var checked = false;
      var checkedAll = true;
       $("#main-content #main table #check_").each(function(i,e){
        if ($(e).prop('checked')) {
          checked = true;
        }else{
          checkedAll = false;
        }
       });
       if (checked) {
         $("#main-content #action .action #delete").removeAttr('disabled');
       }else{
        $("#main-content #action .action #delete").prop('disabled','disabled');
       }
       if (checkedAll) {
        $("#checkall").prop("checked","checked");
       }else{
        $("#checkall").prop("checked",false);
       };
}


function check_all(){
  check_=$("#checkall").is(':checked');
  if(check_){
    $("input[type=checkbox]#check_").prop("checked","checked");
    $("#main-content #action .action #delete").removeAttr('disabled');
  }else{
    $("input[type=checkbox]#check_").prop("checked",false);
    $("#main-content #action .action #delete").prop('disabled','disabled');

  }
}
