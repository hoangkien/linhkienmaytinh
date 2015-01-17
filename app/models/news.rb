class News < ActiveRecord::Base
   attr_accessible :title, :content,:view,:member_id
   belongs_to :catenews
   belongs_to :member
end
