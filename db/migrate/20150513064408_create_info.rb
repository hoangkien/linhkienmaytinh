class CreateInfo < ActiveRecord::Migration
  def change
    create_table :infos do |t|
      t.string :phone
      t.string :hotline
      t.string :email
      t.string :skype
      t.text :company_name
      t.text :address
    end
  end
end
