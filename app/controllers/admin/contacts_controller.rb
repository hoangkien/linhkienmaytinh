class Admin::ContactsController < ApplicationController
	layout 'admin/template'
	def index
		@contact = Contact.all 
		@contact = Contact.paginate(:page => params[:page], :per_page => 5, :order=>('ID DESC'))
	end
	def show
		
	end
	def reply
		@contact = Contact.find(params[:id])
	end
	def sendmail
		if request.post?
		  recipient = params["mail"]["email"]
		  subject = params["mail"]["subject"]
		  message = params["mail"]["content"]
		   # abort(recipient)
	      # Emailer.contact(recipient, subject, message)
	     if Emailer.contact(recipient, subject, message)
	      render :text => 'Message sent successfully'
	  	else
	  		abort("Khong thanh cong")
	  	end
	  end
	end
	def destroy
		@contact = Contact.find(params[:id])
		@contact.destroy
		redirect_to admin_contacts_path
	end
	def delete
		@member = params[:check]
		@member.each do |member|
		  @member = Member.find(member)
		  @member.destroy
		end
		redirect_to admin_members_path
	end
end
