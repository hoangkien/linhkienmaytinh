class Emailer < ApplicationMailer
    def contact(recipient, subject, message)
      @body= message
      mail(
      		to: recipient,
      		subject: "#{subject}",
      		template_path: "/home/emailer",
         	template_name: "contact"
         )
    end
end
