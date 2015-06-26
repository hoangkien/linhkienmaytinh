class Admin::ApplicationController < ApplicationController
  layout 'admin/template'
  before_action :check_login
  def check_login
    if !session[:user_data]
        redirect_to admin_path
    end
  end
end
