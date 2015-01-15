class ApplicationController < ActionController::Base
  protect_from_forgery
  	private
	def login
		if session[:user_data].nil?
			redirect_to admin_login_index_path
		end
	end
end
