class Admin::ConfigController < Admin::ApplicationController
	# layout'admin/template'

	def index
		@info = Info.first
		@intro = Intro.first
	end

	def change_info
		@info = Info.first || Info.new()
		@info.update(params_info)
		if @info.save
			flash[:notice] = "Update thành công !"
			redirect_to admin_config_index_path
		end
	end

	def change_intro
		@intro = Intro.first || Intro.new()
		@intro.intro = params[:intro] if params[:intro]
		@intro.service = params[:service] if params[:service]
		if @intro.save
			flash[:notice] = "Update thành công !"
			redirect_to admin_config_index_path
		end
	end

	private

	def params_info
		params.permit(:phone,:hotline,:skype,:company_name,:address,:email)
	end


end
