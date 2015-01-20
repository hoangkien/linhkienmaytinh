class Home::HomeController < ApplicationController
	layout"home/index"
	def index
		@category = Category.all
	end
	def about
	end
	def news
	end
	def contact
	end
end
