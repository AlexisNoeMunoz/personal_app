class CreateLikedPosts < ActiveRecord::Migration[6.1]
    def change
        create_table :liked_posts do |t|
            t.dreference :post, :cascade
            t.dreference :user, :cascade
            t.dtimestamp
        end

        add_index :liked_posts, [:user_id, :post_id], unique: true
    end
end
