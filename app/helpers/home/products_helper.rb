module Home::ProductsHelper
  def size?(id)
    Category.where("parent_id = #{@category.id}").size > 0
  end
end
