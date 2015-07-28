class News < ActiveRecord::Base
  extend FriendlyId

  belongs_to :catenews
  belongs_to :member

  attr_accessible :title, :content,:view,:member_id

	friendly_id :title

	def to_param
		"#{id} #{title}".parameterize
	end

  def self.search(query,page)
    where("title like ? ","%#{query}%").paginate(per_page:5,page:page)
 	end

end
