class Admin::MembersController < ApplicationController
	layout 'admin/template'
	def index
		@member = Member.all
		if params[:search]#kiem tra xem co gia tri get duoc truyen di
			@member= Member.search(params[:search])#tim kiem trong model va truyen lai view
		end
	end
	def new
		@member = Member.new
	end
	def create
		@member = Member.new(member_params)
		# 	@member['birthday'] = params[:birthday].to_i
		@member.save
		redirect_to admin_members_path
	end
	def edit
		@member = Member.find(params[:id])
	end

	private
		def member_params
			params.require(:member).permit(:username , :password , :fullname , :gender , :birthday , :email, :indentity_card , :address, :search)
		end
		def member_search
			
		end

end
