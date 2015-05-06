class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.integer :category_id
      t.integer :product_id
      t.string :price
      t.string :size
      t.string :light
      t.string :guarantee
      t.string :capacity
    end
  end
end
