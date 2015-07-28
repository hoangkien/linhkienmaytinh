class Home::ProductsController < Home::ApplicationController
  # caches_page :index,:show,:category
	def index
		@category = Category.where("parent_id = 0")
	end

	def view; end

	def show
		@category_all = Category.where("parent_id = 0")

		if params[:tag]

			@tag = params[:tag]
			@products = Product.tagged_with(params[:tag])
			render "tags"

		else

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

	end

	def search
		@search = params[:search]
		if params[:search]
			@product = Product.home_search(params[:search])
		end
	end

end
