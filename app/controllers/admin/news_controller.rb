class Admin::NewsController < ApplicationController
	layout'admin/template'
	before_filter :login
	def index
		@news = News.all
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
