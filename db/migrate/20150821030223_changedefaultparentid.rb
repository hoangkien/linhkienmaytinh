class Changedefaultparentid < ActiveRecord::Migration
  def change
    change_column_default(:categories, :parent_id, 0)
  end
end
