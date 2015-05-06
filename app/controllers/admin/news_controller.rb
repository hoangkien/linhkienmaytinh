class Admin::NewsController < ApplicationController
	layout'admin/template'
	before_filter :login
	def index
		@news = News.all
		@news = News.paginate(:page => params[:page], :per_page => 5).order('ID DESC')
		if params[:search]#kiem tra xem co gia tri get duoc truyen di
			@news= News.search(params[:search],params[:page])#tim kiem trong model va truyen lai view
		end
	end
	def new
		
	end
	def create
		@news= News.new(news_params)
		@news.save
		redirect_to admin_news_index_path
	end
	def show
		@news = News.find(params[:id])
		byebug
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
