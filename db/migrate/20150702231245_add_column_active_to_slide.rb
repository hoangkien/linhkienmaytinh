class AddColumnActiveToSlide < ActiveRecord::Migration
  def change
    add_column :slides, :active, :boolean
  end
end
