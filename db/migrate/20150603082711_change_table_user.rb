class ChangeTableUser < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.remove :name, :password_digest
      t.string :username
      t.rename :email, :mail_address
    end
  end
end
