class Catenews < ActiveRecord::Base

  attr_accessible :name
  has_many :news

end
