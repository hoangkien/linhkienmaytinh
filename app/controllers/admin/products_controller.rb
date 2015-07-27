class Admin::ProductsController < Admin::ApplicationController
	def index
		@product = Product.all.paginate(:page => params[:page], :per_page => 5)
		if params[:search]#kiem tra xem co gia tri get duoc truyen di
			@product=Product.search(params[:search],params[:page])#tim kiem trong model va truyen lai view
		end
	end

	def new
		@product = Product.new
		@category = Category.where(parent_id: 0).pluck(:name,:id)
		@trademak = Trademak.all.pluck(:name,:id)
	end

	def create
		@product = Product.new()
		@product.name = params[:product][:name]
		@product.name_url = change_alias(params[:product][:name])
		@product.category_id = params[:product][:sub_category_id] ? params[:product][:sub_category_id] : params[:product][:category_id]
		@product.trademak_id = params[:product][:trademak_id]
		@product.price = params[:product][:price]
		@product.gurantee = params[:product][:gurantee]
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
		@category = Category.where(parent_id: 0).pluck(:name,:id)
		@trademak = Trademak.all.pluck(:name,:id)
	end

	def update
		@product = Product.friendly.find(params[:id])
		_product = params[:product]
		_product[:category_id] = params[:product][:sub_category_id] ? params[:product][:sub_category_id] : params[:product][:category_id]
		if params[:product][:image].blank?
			_product["image"]= @product.image
		else
			#upload
			upload = Product.upload(_product)
			_product["image"] = params[:product][:image].original_filename
		end
		@product.update_attributes(_product)
		redirect_to admin_products_path

	end

	def delete
		@product = params[:check].map{|p| p.to_i}
    Product.destroy_all(id:@product)
		redirect_to admin_products_path
	end

	def destroy
		@product = Product.friendly.find(params[:id])
		@product.destroy
		redirect_to admin_products_path
	end

	def get_sub_cate
		if request.xhr?
			@subcate = Category.subcategories(params[:id]).pluck(:name,:id)
			render :json => @subcate
		end
	end

	private

	def params_product
		params.require(:product).permit(:name,:trademak_id,:price,:gurantee,:details,:tag_list)
	end
end
