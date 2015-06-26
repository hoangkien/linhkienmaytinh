class News < ActiveRecord::Base
   attr_accessible :title, :content,:view,:member_id
   belongs_to :catenews
   belongs_to :member
	extend FriendlyId
	friendly_id :title

	def to_param
		"#{id} #{title}".parameterize
	end

  def self.search(query,page)
    where("title like ? ","%#{query}%").paginate(per_page:5,page:page)
 	end
end
