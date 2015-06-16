class Home::ProductsController < ApplicationController
	layout"home/index"
	def index
		@category = Category.where("parent_id = 0")
	end
	def view

	end
	def show
		@category_all = Category.where("parent_id = 0")
		@product = Product.friendly.find(params[:id])
		@category = Category.find(@product.category.id)

	end
	def preview

	end
	def search
		@search = params[:search]
		if params[:search]
			@product = Product.home_search(params[:search])
		end
	end
	def category
		@category = Category.friendly.find(params[:id])
		@controler_name = "Sản Phẩm"
	end
end
