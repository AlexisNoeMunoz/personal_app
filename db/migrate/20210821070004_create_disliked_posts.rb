class CreateDislikedPosts < ActiveRecord::Migration[6.1]
    def change
        create_table :disliked_posts do |t|
            t.dreference :post, :cascade
            t.dreference :user, :cascade
            t.dtimestamp
        end

        add_index :disliked_posts, [:user_id, :post_id], unique: true
    end
end
