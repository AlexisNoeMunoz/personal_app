class Api::PostController < ApiController
    before_action :session_verified?
    
    def create        
        data = params.permit(:message).to_h               
        method = Proc.new do             
            post = Post.new(data)
            post.user_id = get_session()            
            get_model_transaction_errors(post)
            post.save!       
            data = JSON.dump(post.select_from_new)     
            ActionCable.server.broadcast 'post_channel', nil
            render json: data
        end
        create_model_transaction(method)
    end

    def get       
        current_user = get_session()
        posts = Post.select_data()
            .count_likes()
            .count_dislikes()            
            .liked_by(current_user)
            .disliked_by(current_user)            
            .group('posts.id')        
            .order('posts.created_at DESC')    
            .as_json               
        result = helpers.array_to_hash_with_order(posts)       
        data = result[:hash]
        order = result[:order]            
        render json: JSON.dump({data: data, order: order})
    end   
end