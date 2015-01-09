class Member < ActiveRecord::Base
  # include ActiveModel::ForbiddenAttributesProtection
  attr_accessible :username, :password, :fullname ,:gender ,:birthday ,:email,:indentity_card, :address,:search
  def self.search(query)
  	  paginate  :per_page => 5, :page => page,
          		:conditions => ["username like '%#{query}%' or fullname like '%#{query}%'"],
           		:order => 'name'
  end
end
