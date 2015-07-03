class CreateSlide < ActiveRecord::Migration
  def change
    create_table :slides do |t|
      t.string :head
      t.string :description
      t.string :image
      t.timestamps null:false
    end
  end
end
