class Product < ActiveRecord::Base
  attr_accessible :name,:name_url, :product_id,:size,:light,:gurantee,:price, :category_id,:image,:details,:trademak_id
  belongs_to :category
  belongs_to :trademak
  validates :name,:details, presence:true
  extend FriendlyId
  friendly_id :name_url , use: :slugged

  def to_param
    "#{name_url}".parameterize
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

end
