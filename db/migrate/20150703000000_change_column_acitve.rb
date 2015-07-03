class ChangeColumnAcitve < ActiveRecord::Migration
  def change
    change_column :slides,:active,:boolean, :default => 0
  end
end
