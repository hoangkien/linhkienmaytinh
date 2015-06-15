class AddNameUrlToProducts < ActiveRecord::Migration
  def change
    add_column :products, :name_url, :string
  end
end
