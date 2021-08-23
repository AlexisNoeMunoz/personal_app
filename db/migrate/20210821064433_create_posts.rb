class CreatePosts < ActiveRecord::Migration[6.1]
    def change
        create_table :posts do |t|
            t.text :message
            t.dreference :user, :cascade
            t.dtimestamp
        end
    end
end
