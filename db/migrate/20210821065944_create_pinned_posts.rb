class CreatePinnedPosts < ActiveRecord::Migration[6.1]
    def change
        create_table :pinned_posts do |t|
            t.dstring :comment
            t.dreference :user, :cascade
            t.dreference :post, :cascade            
            t.dtimestamp
        end

        add_index :pinned_posts, [:user_id, :post_id], unique: true
    end
end
