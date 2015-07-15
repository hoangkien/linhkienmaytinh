# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
$(document).on('page:load').ready ->
  _cate = $("#cate-hidden").val()
  _sub_cate = $("#product_category_id").val()

  if _cate != _sub_cate
    get_sub_Category(_sub_cate,_cate)
  else
    get_sub_Category(_sub_cate)

  $("#product_category_id").change ->
    id = $("#product_category_id").val()
    get_sub_Category(id,"null")

#get_sub_Category
get_sub_Category = ( id = 1, sub = 'null' ) ->
    $.ajax '/admin/products/get_sub_cate/'+id,
      method: 'get',
      success: (data) ->

        if data.length > 0
          option = ""

          for key in data
            if parseInt(sub) == parseInt(key[1])
              option +=  "<option value = "+ key[1]+" selected >"+key[0]+"</option>"
            else
              option += "<option value = "+ key[1]+">"+key[0]+"</option>"
          $("#sub_cate").css("display","block")
          $("#sub_cate").html("<select name='product[sub_category_id]' id='sub_category'>#{option}</select>")
        else
          $("#sub_cate").html("")
          $("#sub_cate").css("display","none")
