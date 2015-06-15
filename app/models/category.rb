class Category < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :id, :name, :name_url
  has_many :products
  extend FriendlyId
  friendly_id :name_url , use: :slugged
  # def to_param
  #   "#{id} #{name_url}".parameterize
  # end
  def self.subcategories(id)
  	where("parent_id = #{id}")
  end
  def self.count(id)
    child = Category.where("parent_id = #{id}")
    sl = 0
    if  child.count == 0
      sl += Product.where("category_id = #{id}").count
    else
      child.each do |cate|
        sl += cate.products.count
      end
    end
    return sl
  end
end
