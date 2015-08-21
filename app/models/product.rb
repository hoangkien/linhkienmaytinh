class Product < ActiveRecord::Base
  extend FriendlyId
  include ApplicationHelper

  before_save :set_name_url

  has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
  attr_accessor :sub_category_id
  attr_accessible :name,:name_url, :product_id,:size,:light,:gurantee,:price, :category_id,:image,:details,:trademak_id,:tag_list, :sub_category_id
  acts_as_taggable


  belongs_to :category
  belongs_to :trademak
  has_many :taggings
  has_many :tags, through: :taggings

  validates :name,:details, presence:true

  friendly_id :name_url , use: :slugged

  def to_param
    "#{name_url}".parameterize
  end

  def set_name_url
    self[:name_url] = ApplicationHelper.change_alias(self.name)
  end

  def self.upload(product)
  	  name = product['image'].original_filename
    	directory = "app/assets/images"
    # create the file path
    	path = File.join(directory, name)
    # write the file
    	File.open(path, "wb") { |f| f.write(product['image'].read) }
  end

  def self.search(query,page)
    where("id = ? or name like ?","%#{query}%","%#{query}%").paginate(per_page: 5, page:page)
  end

  def self.home_search(query)
    query ? where("name like ?","%#{query}%") : Product.find(:all)
  end

  def self.count(id)
    where("category_id = #{id}").count
  end

  def self.tagged_with(name)
    Tag.find_by_name!(name).products
  end

  def self.tag_counts
    Tag.select("tags.*, count(taggings.tag_id) as count").
      joins(:taggings).group("taggings.tag_id")
  end

  def tag_list
    tags.map(&:name).join(", ")
  end

  def tag_list=(names)
    self.tags = names.split(",").map do |tag|
      Tag.where(name: tag.strip.gsub(' ','-')).first_or_create!
    end
  end

end
