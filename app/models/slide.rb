class Slide < ActiveRecord::Base
  attr_accessible :head,:description, :image
  mount_uploader :image, ImageUploader

end
