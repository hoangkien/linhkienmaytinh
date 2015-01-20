class Product < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :name, :product_id,:size,:light,:guarantee,:price, :category_id,:image
  belongs_to :category
  def self.upload(product)
  	   	name = product['image'].original_filename
    	directory = "app/assets/images"
    # create the file path
    	path = File.join(directory, name)
    # write the file
    	File.open(path, "wb") { |f| f.write(product['image'].read) }
  end
  def self.search(query,page)
    paginate  :per_page => 5, :page => page,
                :conditions => ["product_id like ? or name like ?","%#{query}%","%#{query}%"]
  end
end
