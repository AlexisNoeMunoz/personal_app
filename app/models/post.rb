class Post < ApplicationRecord
    belongs_to :user, optional: false
    has_many :pinned_posts
    has_many :liked_posts
    has_many :disliked_posts
            
    validates :message, presence: true
    validates :message, length: {maximum: 1000}    

    class << self
        def select_data
            self.select(:id, :message, :user_id, :created_at)
        end
    
        def count_likes
            self.left_joins(:liked_posts)
                .select('COUNT(liked_posts.id) AS likes')        
        end
    
        def count_dislikes
            self.left_joins(:disliked_posts)
                .select('COUNT(disliked_posts.id) AS dislikes')        
        end
    
        def liked_by(user_id)
            self.joins("LEFT JOIN liked_posts my_likes 
                    ON my_likes.post_id = posts.id 
                    AND my_likes.user_id = #{user_id.to_i}")
                .select('IF(COUNT(my_likes.id) > 0, true, false) AS liked')
        end
    
        def disliked_by(user_id)
            self.joins("LEFT JOIN disliked_posts my_dislikes 
                    ON my_dislikes.post_id = posts.id 
                    AND my_dislikes.user_id = #{user_id.to_i}")
                .select('IF(COUNT(my_dislikes.id) > 0, true, false) AS disliked')
        end
    end

    def select_from_new
        return {
            id: self.id,
            message: self.message,
            user_id: self.user_id,
            likes: 0,
            dislikes: 0,
            liked: 0,
            disliked: 0
        }
    end
    
end
