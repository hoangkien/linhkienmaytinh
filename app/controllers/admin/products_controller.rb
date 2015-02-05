class Admin::ProductsController < ApplicationController
	layout'admin/template'
	def index
		@product = Product.all
		@product = Product.paginate(:page => params[:page], :per_page => 5)
		if params[:search]#kiem tra xem co gia tri get duoc truyen di
			@product=Product.search(params[:search],params[:page])#tim kiem trong model va truyen lai view
		end
	end
	def new
		@product = Product.new
		@category = Category.all
	end
	def create
		@product = Product.new(product_params)
		if product_params['image']
			@product['image'] = @product['image'].original_filename
			upload = Product.upload(product_params)
		end
		respond_to do |format|
	      if @product.save
	        format.html { redirect_to admin_products_path, notice: 'User was successfully created.' }
	      else
	        format.html { render :new }
	      end
	    end
	end
	
	def show
		@product = Product.find(params[:id])
	end
	def edit
		@product = Product.find(params[:id])
		@category = Category.all
	end
	def update
		@product = Product.find(params[:id])
		@pro = product_params
		if product_params[:image].blank?
			@pro["image"]= @product.image
		else
			#upload
			upload = Product.upload(product_params)
			@pro["image"] = product_params[:image].original_filename
		end
		@product.update_attributes(@pro)
		redirect_to admin_products_path

	end
	def delete
		@product = params[:check]
		@product.each do |product|
		  @product = Product.find(product)
		  @product.destroy
		end
		redirect_to admin_products_path
	end
	def destroy
		@product = Product.find(params[:id])
		@product.destroy
		redirect_to admin_products_path
	end
	private
	def product_params
		params.require(:product).permit(:name,:image, :product_id,:size,:name,:light,:guarantee,:price, :category_id,:old_img)
	end
end
