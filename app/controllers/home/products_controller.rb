class Home::ProductsController < Home::ApplicationController
  # caches_page :index,:show,:category
	def index
		@category = Category.where("parent_id = 0")
	end

	def view

	end

	def show
		@category_all = Category.where("parent_id = 0")
		begin
			@product = Product.friendly.find(params[:id])
		rescue ActiveRecord::RecordNotFound
			@category = Category.friendly.find(params[:id])
			@controler_name = "Sản Phẩm"
			render "category"
		else
			@product = Product.friendly.find(params[:id])
		end

	end

	def search
		@search = params[:search]
		if params[:search]
			@product = Product.home_search(params[:search])
		end
	end

	# def category
	# 	begin
	# 		@category = Category.friendly.find(params[:id])
	# 	rescue ActiveRecord::RecordNotFound
	# 		render action: "show"
	# 	else
	# 		@category = Category.friendly.find(params[:id])
	# 		@controler_name = "Sản Phẩm"
	# 	end
	# end
end
