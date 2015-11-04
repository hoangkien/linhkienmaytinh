(function() {
  var get_sub_Category;

  $(document).on('page:load').ready(function() {
    var _cate, _sub_cate;
    _cate = $("#cate-hidden").val();
    _sub_cate = $("#product_category_id").val();
    if (_cate !== _sub_cate) {
      get_sub_Category(_sub_cate, _cate);
    } else {
      get_sub_Category(_sub_cate);
    }
    return $("#product_category_id").change(function() {
      var id;
      id = $("#product_category_id").val();
      return get_sub_Category(id, "null");
    });
  });

  get_sub_Category = function(id, sub) {
    if (id == null) {
      id = 1;
    }
    if (sub == null) {
      sub = 'null';
    }
    return $.ajax('/admin/products/get_sub_cate/' + id, {
      method: 'get',
      success: function(data) {
        var i, key, len, option;
        if (data.length > 0) {
          option = "";
          for (i = 0, len = data.length; i < len; i++) {
            key = data[i];
            if (parseInt(sub) === parseInt(key[1])) {
              option += "<option value = " + key[1] + " selected >" + key[0] + "</option>";
            } else {
              option += "<option value = " + key[1] + ">" + key[0] + "</option>";
            }
          }
          $("#sub_cate").css("display", "block");
          return $("#sub_cate").html("<select name='product[sub_category_id]' id='sub_category'>" + option + "</select>");
        } else {
          $("#sub_cate").html("");
          return $("#sub_cate").css("display", "none");
        }
      }
    });
  };

}).call(this);
