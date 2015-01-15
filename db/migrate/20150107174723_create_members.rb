class CreateMembers < ActiveRecord::Migration
  def change
    drop_table :members
    create_table :members do |t|
      t.string :username
      t.string :password
      t.string :fullname
      t.int :gender
      t.datetime :birthday
      t.string :email

      t.timestamps
    end
  end
end
