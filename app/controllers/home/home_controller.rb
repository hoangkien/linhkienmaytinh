class Home::HomeController < Home::ApplicationController
  caches_page :index
	def index
		@category = Category.where("parent_id = 0")
	end

	def about
		@title = "about"
		@intro = Intro.first
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
		@intro = Intro.first
	end

	def map

	end

end
