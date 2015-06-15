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
		@category = Category.all.pluck(:name,:id)
		@trademak = Trademak.all.pluck(:name,:id)
		Rails.logger.info"log :#{@trademak}"
	end

	def create
		@product = Product.new()
		@product.name = params[:product][:name]
		@product.name_url = change_alias(params[:product][:name])+".html"
		@product.category_id = params[:product][:category_id]
		@product.trademak_id = params[:product][:trademak_id]
		@product.price = params[:product][:price]
		@product.details = params[:product][:details]
		if params[:product]['image']
			@product.image = params[:product]['image'].original_filename
			upload = Product.upload(params[:product])
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
		@product = Product.friendly.find(params[:id])
	end
	def edit
		@product = Product.friendly.find(params[:id])
		@category = Category.all.pluck(:name,:id)
		@trademak = Trademak.all.pluck(:name,:id)
	end
	def update
		@product = Product.friendly.find(params[:id])
		@pro = params[:product]
		if params[:product][:image].blank?
			@pro["image"]= @product.image
		else
			#upload
			upload = Product.upload(@pro)
			@pro["image"] = params[:product][:image].original_filename
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
		@product = Product.friendly.find(params[:id])
		@product.destroy
		redirect_to admin_products_path
	end
end
