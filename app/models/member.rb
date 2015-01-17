class Member < ActiveRecord::Base
  # include ActiveModel::ForbiddenAttributesProtection
  require'digest/md5'#su dung md5
  # before_save :md5 # set md5 cho password truoc khi thuc hien method save
  after_validation :md5 #set md5 cho password sau khi validate xong
  attr_accessible :username, :password, :fullname ,:gender ,:birthday ,:email,:indentity_card, :address,:search,:password_confirmation
  has_many :news
  validates :username, uniqueness:true,format:{with:/\A[a-zA-Z]+\z/}, length:{in: 5..20}
  validates :fullname,length:{ in:5..20}
  validates :password,confirmation:true,format:{with:/\A[a-zA-Z0-9]+\z/},allow_blank:true
  validates :password_confirmation, presence:true
  validates :email, uniqueness:true,presence:true
  def self.search(query,page)
  	  paginate  :per_page => 5, :page => page,
          		  :conditions => ["username like ? or fullname like ?","%#{query}%","%#{query}%"]
  end
  def login(username, pass)
  	Member.find(:all,:conditions=>["username like ? and password like ?","#{username}","#{pass}"])
  end
  private
  def md5
      self.password = Digest::MD5.hexdigest(password)
  end
  def message
    puts'add success'
  end
end
