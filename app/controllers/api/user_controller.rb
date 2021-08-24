class Api::UserController < ApiController              
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
        data = params.permit(:name, :email, :password).to_h                 
        user_data = data.slice(:name, :email)                  
        method = Proc.new do             
            user = User.new(user_data)
            user.password = data[:password]
            user.color = User.generate_color
            get_model_transaction_errors(user)
            user.save!            
            set_session(user.id)
            render js: 'window.location.reload()'
        end
        create_model_transaction(method)
    end           

    def get         
        users = User.select(:id, :name, :color).as_json
        users = helpers.array_to_hash(users)
        render json: JSON.dump(users)
    end

    def get_current
        user = User.where(id: get_session())
                    .select(:id, :name, :email, :color)
                    .first        
        render json: JSON.dump(user.as_json)
    end

    private 
        def set_session(id)
            session[ApiController.get_session_name] = id
        end
end