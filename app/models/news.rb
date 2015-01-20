class News < ActiveRecord::Base
   attr_accessible :title, :content,:view,:member_id
   belongs_to :catenews
   belongs_to :member
   def self.search(query,page)
  	  paginate  :per_page => 5, :page => page,
          		  :conditions => ["title like ? ","%#{query}%"]
 	end
end
