class CreateCatenews < ActiveRecord::Migration
  def change
    create_table :catenews do |t|
      t.string :name
    end
  end
end
