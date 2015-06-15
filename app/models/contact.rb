class Contact < ActiveRecord::Base
   attr_accessible :name,:phone, :email,:company,:subject
   validates :name,:phone,:subject, presence:{message:"không được bỏ trống"}
  extend FriendlyId
  friendly_id :email
  def to_param
    "#{id} #{email}".parameterize
  end
end
