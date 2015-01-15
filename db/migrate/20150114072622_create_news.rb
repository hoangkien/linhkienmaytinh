class CreateNews < ActiveRecord::Migration
  def change
  	drop_table :news
    create_table :news do |t|

      t.timestamps
    end
  end
end
