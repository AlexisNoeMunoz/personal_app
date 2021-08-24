class Api::PostReactionController < ApiController
    before_action :session_verified?
        
    def like
        data = params.permit(:post_id).to_h
        method = Proc.new do
            liked_post = LikedPost.new(data)
            liked_post.user_id = get_session()
            get_model_transaction_errors(liked_post)
            liked_post.save!
            _set_reactions(data)
            render json: {}
        end
        create_model_transaction(method)
    end

    def remove_like
        data = params.permit(:post_id).to_h
        liked_posts = LikedPost.where(data, user_id: get_session())
        liked_posts.delete_all
        _set_reactions(data)
        render json: {}
    end

    def dislike
        data = params.permit(:post_id).to_h
        method = Proc.new do
            disliked_post = DislikedPost.new(data)
            disliked_post.user_id = get_session()
            get_model_transaction_errors(disliked_post)
            disliked_post.save!
            _set_reactions(data)
            render json: {}
        end
        create_model_transaction(method)        
    end
    
    def remove_dislike
        data = params.permit(:post_id).to_h
        disliked_posts = DislikedPost.where(data, user_id: get_session())
        disliked_posts.delete_all
        _set_reactions(data)
        render json: {}
    end

    private
        def _set_reactions(data)
            likes = LikedPost.where(data).count
            dislikes = DislikedPost.where(data).count
            ActionCable.server.broadcast 'post_channel', {
                type: 'NEW_LIKE', 
                payload: {post_id: data[:post_id], likes: likes, dislikes: dislikes},
                user_id: get_session()
            }
        end
end