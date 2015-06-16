class AddGuranteeToProducts < ActiveRecord::Migration
  def change
    add_column :products, :gurantee,:string
  end
end
