class Contact < ActiveRecord::Base
   attr_accessible :name, :email,:company,:subject
   validates :name,:email,:subject, presence: true
  extend FriendlyId
  friendly_id :email
  def to_param
    "#{id} #{email}".parameterize
  end
end
