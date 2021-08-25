Rails.application.routes.draw do
    root 'router#index'
    get 'cv', to: 'router#cv'

    scope '/app' do     
        get '/', to: 'router#app'             
        get '/:path', to: 'router#app', constraints: -> (req) do
            !req.xhr? && req.format.html?
        end        
    end    

    namespace :api do
        namespace :user do            
            post 'login'
            delete 'logout' 
            post 'create'
            get 'get'
            get 'get_current'
        end        

        namespace :post do
            post 'create'
            get 'get'            
        end

        namespace :post, module: 'post_reaction' do
            post 'like'
            delete 'like', action: 'remove_like'
            post 'dislike'            
            delete 'dislike', action: 'remove_dislike'
        end
    end
end
