class AddSlugToArticles < ActiveRecord::Migration
  def change
    add_column :news, :slug, :string
    add_index :news, :slug
  end
end
