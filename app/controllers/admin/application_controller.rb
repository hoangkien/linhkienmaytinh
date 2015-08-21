class Admin::ApplicationController < ApplicationController
  include Admin::LoginHelper
  before_action :check_login
  layout 'admin/template'

  def check_login
    if !session[:user_id]
        redirect_to admin_path
    end
  end

end
