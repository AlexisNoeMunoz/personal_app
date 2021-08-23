class DislikedPost < ApplicationRecord
    belongs_to :user, optional: false
    belongs_to :post, optional: false
    
    validates :user, uniqueness: { scope: :post }

    before_save do
        liked_post = LikedPost.where(
            user_id: self.user_id, 
            post_id: self.post_id
        )
        liked_post.delete_all
    end
end
