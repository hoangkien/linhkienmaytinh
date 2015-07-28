class Admin::CategoriesController < Admin::ApplicationController

	def index
		@categories = Category.all.includes(:products)
	end

	def show
		@category = Category.friendly.find(params[:id])
	end

	def edit
		@category = Category.friendly.find(params[:id])
		list_parent_cate
	end

	def new
		@category = Category.new
		list_parent_cate
	end

	def create
		@category=  Category.new()
		@category.name = params[:category][:name]
		@category.name_url = change_alias(params[:category][:name])
		@category.parent_id = params[:parent_id]
		if @category.save
			flash[:notice] = "Tạo mới thành công !"
			redirect_to cate_index_path
		else
			render "new"
		end
	end

	def update
		@category = Category.friendly.find(params[:id])
		@category.name = params[:category][:name]
		@category.parent_id = params[:parent_id].to_i
		if @category.save
			flash[:notice] = "Update thành công !"
			redirect_to admin_categories_path
		else
			render "edit"
		end
	end

	def destroy
		@category = Category.friendly.find(params[:id])
		@category.destroy
		flash[:notice] = "Xóa thành công !"
		redirect_to cate_index_path
	end

	private
	def category_params
		params.require(:category).permit(:id, :name)
	end
end
