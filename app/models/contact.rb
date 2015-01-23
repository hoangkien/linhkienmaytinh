class Contact < ActiveRecord::Base
   attr_accessible :name, :email,:company,:subject
   validates :name,:email,:subject, presence: true
end
