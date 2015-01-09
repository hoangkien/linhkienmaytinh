class Member < ActiveRecord::Base
  # include ActiveModel::ForbiddenAttributesProtection
  attr_accessible :username, :password, :fullname ,:gender ,:birthday ,:email,:indentity_card, :address,:search
  def self.search(query)
  	where "username like '%#{query}%' or fullname like '%#{query}%'"
  end
end
