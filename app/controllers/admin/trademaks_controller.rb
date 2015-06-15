class Admin::TrademaksController < ApplicationController
		layout 'admin/template'
	def index
		@trademaks = Trademak.all
	end
	def show
		@trademak = Trademak.find(params[:id])
	end
	def edit
		@trademak = Trademak.find(params[:id])
	end
	def new 
		@trademak = Trademak.new()
	end

	def create
		@trademak=  Trademak.new()
		@trademak.name = params[:trademak][:name]
		@trademak.name_url = params[:trademak][:name_url]
		if @trademak.save
			flash[:notice] = "Tạo mới thành công !"
			redirect_to admin_trademaks_path
		else
			render "new"
		end
	end

	def update
		@trademak = Trademak.find(params[:id])
		@trademak.name = params[:trademak][:name]
		@trademak.parent_id = params[:parent_id].to_i
		if @trademak.save
			flash[:notice] = "Update thành công !"
			redirect_to admin_trademaks_path
		else
			render "edit"
		end
	end

	def destroy
		@trademak = Trademak.find(params[:id])
		@trademak.destroy
		flash[:notice] = "Xóa thành công !"
		redirect_to admin_trademaks_path
	end
end
