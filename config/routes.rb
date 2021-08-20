Rails.application.routes.draw do
    root 'router#index'
        
    scope '/app' do     
        get '/', to: 'router#app'             
        get '/:path', to: 'router#app', constraints: -> (req) do
            !req.xhr? && req.format.html?
        end        
    end    

    namespace :api do
        post 'user/create'
        post 'user/login'
        delete 'user/logout'
    end
end
