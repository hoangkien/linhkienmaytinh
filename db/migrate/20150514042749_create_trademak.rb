class CreateTrademak < ActiveRecord::Migration
  def change
    create_table :trademaks do |t|
      t.string :name
    end
  end
end
