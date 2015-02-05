class Home::HomeController < ApplicationController
	layout"home/index"
	def index
		@category = Category.all
	end
	def about
		@title = "about"
	end
	def news
		@title= "news"
	end
	def contact
		@title = "Contact"
		@contact = Contact.new
		if request.post?
			@contact = Contact.new(params[:contact])
			 if @contact.save
			 	flash[:success] ="Thanks you!"
			 end
		end
	end
	def service
		@title ="Service"
	end

end
