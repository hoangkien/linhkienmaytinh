class AddServiceToIntros < ActiveRecord::Migration
  def change
    add_column :intros, :service, :text
  end
end
