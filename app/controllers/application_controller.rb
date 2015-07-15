class ApplicationController < ActionController::Base
  protect_from_forgery
  before_action :get_info
  before_filter :set_user_language
  def get_info
  	@info = Info.first
  end

  def change_alias( str )
    str= str.downcase();
    str= str.gsub(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/,"a");
    str= str.gsub(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/,"e");
    str= str.gsub(/ì|í|ị|ỉ|ĩ/,"i");
    str= str.gsub(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/,"o");
    str= str.gsub(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/,"u");
    str= str.gsub(/ỳ|ý|ỵ|ỷ|ỹ/,"y");
    str= str.gsub(/đ/,"d");
    str= str.gsub(/\!|\@|\%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\:|\;|\'| |\"|\&|\#|\[|\]|\~|\$|\_/,"-");
    #tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự -
    str= str.gsub(/-+-/,"-"); #thay thế 2- thành 1-
    str= str.gsub(/^\-+|\-+$/,"");
    #cắt bỏ ký tự - ở đầu và cuối chuỗi
    return str;
  end

  def raise_not_found
    render(file:"#{Rails.root}/public/404.html")
  end

  def set_user_language
    I18n.locale = "vi"
  end

end
