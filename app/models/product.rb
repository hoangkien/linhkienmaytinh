class Product < ActiveRecord::Base
  extend FriendlyId

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
    self[:name_url] = change_alias(self.name)
  end

  def change_alias( str )
    str= str.downcase()
    str = downcase(str)
    str= str.gsub(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/,"a")
    str= str.gsub(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/,"e")
    str= str.gsub(/ì|í|ị|ỉ|ĩ/,"i")
    str= str.gsub(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/,"o")
    str= str.gsub(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/,"u")
    str= str.gsub(/ỳ|ý|ỵ|ỷ|ỹ/,"y")
    str= str.gsub(/đ/,"d")
    str= str.gsub(/\!|\@|\%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\:|\;|\'| |\"|\&|\#|\[|\]|\~|\$|\_/,"-")
    str= str.gsub(/-+-/,"-")
    str= str.gsub(/^\-+|\-+$/,"")
    return str
  end

  def downcase(str)
    Unicode.downcase(str)
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
