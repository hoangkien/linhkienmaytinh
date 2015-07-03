class Category < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :id, :name, :name_url
  has_many :products
  extend FriendlyId
  friendly_id :name_url , use: :slugged

  def self.subcategories(id)
  	where("parent_id = #{id}")
  end

  def self.count(id)
    if Category.where(parent_id:id).empty?
      Product.where(category_id:id).count
    else
      Product.where(id:Category.where(parent_id:id).pluck(:id)).count
    end
  end

end
