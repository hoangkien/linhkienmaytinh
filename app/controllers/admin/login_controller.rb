class Admin::LoginController < Admin::ApplicationController
  skip_before_filter :check_login
	layout :false
	require'digest/md5'
  def index
    redirect_to admin_home_index_path if session[:user_id]
  end

  def new
  end

  def create
    @member = Member.find_by_username(params[:member][:username])
    if @member && @member.authenticate(params[:member][:password]) && @member.role == 1
      login @member
      redirect_to admin_home_index_path
    else
      flash[ :notice] = "Sai thong tin tai khoan hoac mat khau !"
      redirect_to admin_path
    end
  end

  def destroy
  	logout
  	redirect_to admin_path
  end
end
