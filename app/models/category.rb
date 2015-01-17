class Category < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :id, :name
  has_many :products
end
