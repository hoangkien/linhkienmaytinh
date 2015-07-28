class Admin::NewsController < Admin::ApplicationController
	layout'admin/template'

	def index
		@news = params[:search] ? News.search(params[:search],params[:page]) : News.all.paginate(:page => params[:page], :per_page => 5).order('ID DESC')
	end

	def new; end

	def create
		news= News.new(news_params)
		if news.save
			redirect_to admin_news_index_path
		else
			render "new"
		end
	end

	def show
		@news = News.find(params[:id])
	end

	def edit
		@news = News.find(params[:id])
	end

	def update
		@news = News.find(params[:id])
		@news.update_attributes(news_params)
		redirect_to admin_news_index_path
	end

	def destroy
		@news = News.find(params[:id])
		@news.destroy
		redirect_to admin_news_index_path
	end

	private
	def news_params
		params.require(:news).permit(:title,:content)
	end

end
