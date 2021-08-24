class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.dstring :name, index: {unique: true}
      t.dstring :email, index: {unique: true}
      t.dstring :password_hash
      t.dstring :color
      t.dtimestamp
    end
  end
end
