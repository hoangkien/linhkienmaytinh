class Admin::MembersController < Admin::ApplicationController
	require'digest/md5'#su dung md5

	def index
    @member= params[:search] ? Member.search(params[:search],params[:page]) : Member.paginate(:page => params[:page], :per_page => 5).order('ID DESC')
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
		@member[:role] = 1
    respond_to do |format|
      if @member.save
        format.html { redirect_to admin_members_path, notice: 'User was successfully created.' }
      else
        format.html { render :new }
      end
    end
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

	def delete
		@member = params[:check].map{|m| m.to_i}
    Member.destroy_all(id:@member)
		redirect_to admin_members_path
	end


	private
		def member_params
			params.require(:member).permit(:username , :password , :fullname , :gender , :birthday , :email, :indentity_card , :address, :search,:password_confirmation)
		end

end
