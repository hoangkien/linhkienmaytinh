class Admin::ApplicationController < ApplicationController
  include Admin::LoginHelper
  before_action :check_login
  layout 'admin/template'

  def check_login
    if !session[:user_id]
        redirect_to admin_path
    end
  end

  def list_parent_cate
    @list_parent = Category.where("parent_id = 0").pluck(:name, :id)
    @list_parent.unshift(["Thư Mục Gốc", 0])
  end

end
