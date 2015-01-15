class Member < ActiveRecord::Base
  # include ActiveModel::ForbiddenAttributesProtection
  attr_accessible :username, :password, :fullname ,:gender ,:birthday ,:email,:indentity_card, :address,:search
  def self.search(query,page)
  	  paginate  :per_page => 5, :page => page,
          		  :conditions => ["username like ? or fullname like ?","%#{query}%","%#{query}%"]
  end
  def login(username, pass)
  	Member.find(:all,:conditions=>["username like ? and password like ?","#{username}","#{pass}"])
  end
end
