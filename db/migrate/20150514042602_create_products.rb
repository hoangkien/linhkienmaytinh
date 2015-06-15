class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.integer :trademark_id
      t.integer :category_id
      t.string :image
      t.integer :price
      t.text :details
    end
  end
end
