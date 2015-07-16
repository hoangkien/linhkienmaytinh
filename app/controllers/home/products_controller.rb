class Home::ProductsController < Home::ApplicationController
  # caches_page :index,:show,:category
  caches_page :show
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
			@category = Category.friendly.find(params[:id]) rescue nil
			if @category.nil?
				raise_not_found
			else
				@controler_name = "Sản Phẩm"
				render "category"
			end
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
end
