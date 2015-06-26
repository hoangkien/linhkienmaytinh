class Admin::LoginController < Admin::ApplicationController
  skip_before_filter :check_login
	layout :false
	require'digest/md5'
  def index
    if session[:user_data]
      redirect_to admin_home_index_path
    end
  end

  def new
  end

  def create
    @member = Member.find_by_username(params[:member][:username])
    if @member && @member.authenticate(params[:member][:password]) && @member.role == 1
      session[:user_data]= @member
      redirect_to admin_home_index_path
    else
      flash[ :notice] = "Sai thong tin tai khoan hoac mat khau !"
      redirect_to admin_path
    end
  end

  def destroy
  	session[:user_data] = nil
  	redirect_to admin_path
  end
end
