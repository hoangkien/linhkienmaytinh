class Home::ProductsController < ApplicationController
	layout"home/index"
	def index
		@category = Category.all
	end
	def view
		
	end
	def show
		@category =Category.find(params[:id])
	end
	def category
		@category = Category.find(params[:id])
	end
end
