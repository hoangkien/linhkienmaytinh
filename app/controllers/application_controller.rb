class ApplicationController < ActionController::Base
  protect_from_forgery
  before_action :get_info
  before_filter :set_user_language
  require 'unicode'
  def get_info
  	@info = Info.first
  end

  def raise_not_found
    render(file:"#{Rails.root}/public/404.html", layout: false, status: 404)
  end

  def set_user_language
    I18n.locale = "vi"
  end

end
