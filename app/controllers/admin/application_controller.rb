class Admin::ApplicationController < ApplicationController
  layout 'admin/template'
  include Admin::LoginHelper
  before_action :check_login
  def check_login
    if !session[:user_id]
        redirect_to admin_path
    end
  end

  def list_parent_cate(id)
    @list_parent = Category.where("parent_id = 0").pluck(:name,:id)
    @list_parent.unshift(["Thư Mục Gốc",0])
  end
end
