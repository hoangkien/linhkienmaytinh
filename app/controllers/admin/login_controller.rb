class Admin::LoginController < ApplicationController
	layout :false
	require'digest/md5'
	Member = Member.new()
  def index

  end
  def new
  end

  def create
  	@member = Member.login(params[:member][:username],Digest::MD5.hexdigest(params[:member][:password])).first
    if @member.blank?
  		flash[:notice]="Sai thong tin tai khoan hoac mat khau !"
  		redirect_to admin_login_index_path
  	else
      if @member.role == 1
       session[:user_data]= @member
        redirect_to admin_home_index_path
      else
         flash[ :notice] = "Ban khong co quyen vao trang nay !"
        redirect_to admin_login_index_path
        
      end
  	end
  end

  def destroy
  	session[:user_data] = nil
  	redirect_to admin_login_index_path
  end
end
