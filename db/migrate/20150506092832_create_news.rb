class CreateNews < ActiveRecord::Migration
  def change
    create_table :news do |t|
      t.string :title
      t.text :content
      t.string :description
      t.integer :catenews_id
      t.integer :member_id
      t.string :title_url
      t.string :slug
      t.timestamps null: false
    end
  end
end
