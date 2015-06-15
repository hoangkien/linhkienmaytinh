class AddNameUrlToTrademaks < ActiveRecord::Migration
  def change
    add_column :trademaks, :name_url, :string
  end
end
