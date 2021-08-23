class LikedPost < ApplicationRecord
    belongs_to :user, optional: false
    belongs_to :post, optional: false    
    
    validates :user, uniqueness: { scope: :post }

    before_save do
        disliked_post = DislikedPost.where(
            user_id: self.user_id, 
            post_id: self.post_id
        )
        disliked_post.delete_all
    end
end
