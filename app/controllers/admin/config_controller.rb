class Admin::ConfigController < ApplicationController
	layout'admin/template'
	def index
		@info = Info.first
		@intro = Intro.first
	end
	def ChangeInfo
		@info = Info.first
		if @info.nil?
			@info = Info.new()
		end
		@info.phone = params[:phone]
		@info.hotline = params[:hotline]
		@info.skype = params[:skype]
		@info.company_name = params[:company_name]
		@info.address = params[:address]
		@info.email = params[:email]
		if @info.save
			flash[:notice] = "Update thành công !"
			redirect_to admin_config_index_path
		else
		end
	end
	def ChangeIntro
		@intro = Intro.first
		if @intro.nil?
			@intro = Intro.new()
		end
		@intro.intro = params[:intro] if params[:intro]
		@intro.service = params[:service] if params[:service]
		if @intro.save
			flash[:notice] = "Update thành công !"
			redirect_to admin_config_index_path
		else
		end
	end

end
