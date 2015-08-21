class Admin::CategoriesController < Admin::ApplicationController

	def index
		@categories = Category.all.includes(:products)
	end

	def show
		@category = Category.friendly.find(params[:id])
	end

	def edit
		@category = Category.friendly.find(params[:id])
		@list_parent = Category.cate_parent
	end

	def new
		@category = Category.new
		@list_parent = Category.cate_parent
	end

	def create
		@category=  Category.new(category_params)
		if @category.save
			flash[:notice] = "Tạo mới thành công !"
			redirect_to cate_index_path
		else
			render "new"
		end

	end

	def update
		@category = Category.friendly.find(params[:id])
		@category.update_attributes(category_params)
		if @category.save
			flash[:notice] = "Update thành công !"
			redirect_to cate_index_path
		else
			render "edit"
		end
	end

	def destroy
		@category = Category.friendly.find(params[:id])
		@category.destroy
		flash[:notice] = "Xóa thành công!"
		redirect_to cate_index_path
	end

	private
	def category_params
		params.require(:category).permit(:id, :name, :parent_id)
	end

end
