class Admin::ContactsController < ApplicationController
	layout 'admin/template'
	before_action :set_contact, :only =>[:show,:destroy]
	def index
		@contact = Contact.all 
		@contact = Contact.paginate(:page => params[:page], :per_page => 5).order('ID DESC')
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
	        Emailer.contact(recipient,subject,message).deliver
		    return if request.xhr?
		    flash[:notice] = 'Message sent successfully'
		    redirect_to admin_contacts_path
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
	private
	def set_contact
		begin
			@contact = Contact.find(params[:id])
		rescue ActiveRecord::RecordNotFound
			render "layouts/not_found.html.erb"
		else
			@contact = Contact.find(params[:id])
		end
	end
end
