class Admin::MembersController < ApplicationController
	layout 'admin/template'
	def index
		@member = Member.paginate(:page => params[:page], :per_page => 5)
		if params[:search]#kiem tra xem co gia tri get duoc truyen di
			@member= Member.search(params[:search])#tim kiem trong model va truyen lai view
		end
	end
	def show
		@member = Member.find(params[:id])

	end
	def new
		@member = Member.new
	end
	def edit
		@member = Member.find(params[:id])
	end
	def create
		@member = Member.new(member_params)
		# @member.birthday = params[:birthday].to_s	
		@member.save
		redirect_to admin_members_path
	end
	def update
		@member = Member.find(params[:id])
		@member.update_attributes(member_params)
		redirect_to admin_members_path
	end
	def destroy
		@member = Member.find(params[:id])
		@member.destroy
		redirect_to admin_members_path
	end
	def delete_many
		
	end
	private
		def member_params
			params.require(:member).permit(:username , :password , :fullname , :gender , :birthday , :email, :indentity_card , :address, :search)
		end

end
