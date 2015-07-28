class Member < ActiveRecord::Base
  # include ActiveModel::ForbiddenAttributesProtection
  extend FriendlyId
  has_secure_password
  attr_accessible :username,:password, :fullname ,:gender ,:birthday ,:email,:indentity_card, :address,:search,:role

  has_many :news

  validates :username, uniqueness:true,format:{with:/\A[a-zA-Z]+\z/}, length:{in: 5..20},on: :create
  validates :fullname,length:{ in:5..20},on: :create
  validates :email, uniqueness:true,presence:true,on: :create

  friendly_id :fullname

  def to_param
    "#{id} #{fullname}".parameterize
  end

  def self.search(query,page)
  	  paginate(:per_page => 5, :page => page).where("username like ? or fullname like ?","%#{query}%","%#{query}%")
  end

  def login(username, pass)
  	Member.where("username like ? and password like ?","#{username}","#{pass}")
  end
end
