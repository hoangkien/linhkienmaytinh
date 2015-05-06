class CreateMembers < ActiveRecord::Migration
  def change
    create_table :members do |t|
      t.string :username
      t.string :password
      t.string :fullname
      t.string :birthday
      t.string :email
      t.integer :indentity_card
      t.string :address
      t.string :gender
      t.integer :role
      t.timestamps null: false
    end
  end
end
