class Api::UserController < ApplicationController      
    
    class << self
        def get_session_name
            return :user_id
        end
    end

    public 
        def login
            data = params.permit(:email, :password)            
            user = User.where(email: data[:email]).first                        
            if user && user.password != data[:password]
                user = nil
            end        
            set_session(user ? user.id : nil)            
            if user 
                render js: 'window.location.reload()' 
            else
                error = I18n.t('activerecord.errors.models.user.login_error')
                render json: {errors: [error]}, status: :bad_request                              
            end
        end
        def logout 
            set_session(nil)            
            render js: 'window.location.reload()'            
        end
        def create        
            new_params = params.permit(:name, :email, :password).to_h                 
            data = new_params.slice(:name, :email)        
            ActiveRecord::Base.transaction do
                errors = []
                user = User.new(data)
                user.password = params[:password]
                user.color = User.generate_color
                !user.valid? && errors.push(user.errors.messages.values)
                user.save!            
                set_session(user.id)
                render js: 'window.location.reload()'
            rescue ActiveRecord::RecordInvalid
                render json: {errors: errors.flatten}, status: :bad_request
            end                
        end    

    private
        def set_session(id)
            session[Api::UserController.get_session_name] = id
        end    
end