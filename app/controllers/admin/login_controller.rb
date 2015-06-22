class Admin::LoginController < ApplicationController
	layout :false
	require'digest/md5'
  def index

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
      redirect_to admin_signup_path
    end
  end

  def destroy
  	session[:user_data] = nil
  	redirect_to admin_signup_path
  end
end
