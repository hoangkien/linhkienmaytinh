class CreateCatenews < ActiveRecord::Migration
  def change
    create_table :catenews do |t|
      t.string :name
      t.timestamps null: false
    end
  end
end
