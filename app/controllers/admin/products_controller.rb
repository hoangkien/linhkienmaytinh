class Admin::ProductsController < Admin::ApplicationController
	def index
		@product = params[:search] ? Product.search(params[:search],params[:page]) : Product.all.paginate(:page => params[:page], :per_page => 5).includes(:category)
	end

	def new
		@product = Product.new
		@category = Category.cate_parent
		@trademak = Trademak.all.pluck(:name,:id)
	end

	def create
		@product = Product.create(params_product)
		@product.category_id = params[:product][:sub_category_id] ? params[:product][:sub_category_id] : params[:product][:category_id]

		respond_to do |format|
      if @product.save
        format.html { redirect_to admin_products_path, notice: 'User was successfully created.' }
      else
        format.html { render :new }
      end
	  end

	end

	def show
		@product = Product.where(name_url: params[:id]).first
	end

	def edit
		@product = Product.where(name_url: params[:id]).first
		@category = Category.cate_parent
		@trademak = Trademak.all.pluck(:name,:id)
	end

	def update
		@product = Product.where(name_url: params[:id]).first
		_product = params[:product]
		_product[:category_id] = params[:product][:sub_category_id] ? params[:product][:sub_category_id] : params[:product][:category_id]
		@product.update_attributes(_product)
		redirect_to admin_products_path

	end

	def delete
		@product = params[:check].map{|p| p.to_i}
    Product.destroy_all(id:@product)
		redirect_to admin_products_path
	end

	def destroy
		@product = Product.where(name_url: params[:id]).first
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
		params.require(:product).permit(:name,:trademak_id,:price,:gurantee,:details,:tag_list, :image)
	end
end
