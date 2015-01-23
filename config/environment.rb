# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
RailsDemo::Application.initialize!
ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.smtp_settings = {
   :address => "smtp.gmail.com",
   :port => 587,
   :domain => "localhost:3000",
    authentication: "plain",
   :charset => 'utf-8',
  	user_name: ENV["kienhv@hiworld.com.vn"],
  	password: ENV["hoangvankien"],
   :enable_starttls_auto => true
  }