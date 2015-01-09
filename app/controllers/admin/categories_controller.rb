class Admin::CategoriesController < ApplicationController
	layout 'admin/template'
	def index
		@categories = Category.all
	end
	def show
		@category = Category.find(params[:id])
	end
	def edit
		@category = Category.find(params[:id])
	end
	def new 
		@category = Category.new
	end
	def create
		@category=  Category.new(category_params)
		if @category.save
			redirect_to admin_categories_path
		else
			render "new"
		end
	end
	def update
		@category = Category.find(params[:id])

		if @category.update_attributes(category_params)
			redirect_to admin_categories_path
		else
			render "edit"
		end
	end

	def destroy
		@category = Category.find(params[:id])
		@category.destroy

		redirect_to admin_categories_path
	end
	private 
	def category_params
		params.require(:category).permit(:id, :name)
	end
end
