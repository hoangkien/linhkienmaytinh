class Category < ActiveRecord::Base

  extend FriendlyId
  include ApplicationHelper

  attr_accessible :id, :name, :name_url, :parent_id
  friendly_id :name_url , use: :slugged

  has_many :products

  before_save :set_name_url, :set_parent_id

  scope :cate_parent, ->{ where(parent_id:0).pluck(:name, :id) }

  def self.subcategories(id)
  	where("parent_id = #{id}")
  end

  def self.count(id)
    Category.where(parent_id:id).empty? ? Product.where(category_id:id).size : Product.where(category_id:Category.where(parent_id:id).pluck(:id)).size
  end

  def set_name_url
    self[:name_url] = ApplicationHelper.change_alias(self[:name])
  end

  def set_parent_id
    self[:parent_id] = self[:parent_id].nil? ? 0 : self[:parent_id]
  end

end
