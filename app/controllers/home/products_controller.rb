class Home::ProductsController < ApplicationController
	layout"home/index"
	def index
		@category = Category.all
	end
	def view
		
	end
	def show
		@category_all = Category.all
		@product = Product.find(params[:id])
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
		@category = Category.find(params[:id])
	end
end