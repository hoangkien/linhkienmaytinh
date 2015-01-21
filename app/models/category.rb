class Category < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :id, :name
  has_many :products
  extend FriendlyId
  friendly_id :name_url
  def to_param
    "#{id} #{name_url}".parameterize
  end
end
