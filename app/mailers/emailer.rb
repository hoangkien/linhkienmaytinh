class Emailer < ActionMailer::Base
    def contact(recipient, subject, message)
      @subject = subject
      @recipients = recipient
      @body= message
      @headers = {}
      mail(:to =>  @recipients,:subject => @subject,:body => @body)
    end
end
