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
		@contact = Contact.new
		if request.post?
			@contact = Contact.new(params[:contact])
			 if @contact.save
			 	flash[:success] ="Thanks you!"
			 end
		end
	end
	def service
		
	end

end
