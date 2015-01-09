
$(document).ready(function(){
jQuery('#member_birthday').datetimepicker({
  lang:'vi',
  i18n:{
    fn:{
     months:[
      'Januar','Februar','März','April',
      'Mai','Juni','Juli','August',
      'September','Oktober','November','Dezember'
     ],
     dayOfWeek:[
      "So.", "Mo", "Di", "Mi", 
      "Do", "Fr", "Sa."
     ]
    }
  },
  timepicker:false,
  format:'d/m/Y'
 });
});
