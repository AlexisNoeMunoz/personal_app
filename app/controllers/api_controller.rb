class ApiController < ApplicationController
    class << self
        def get_session_name
            return :user_id
        end    
    end             
    
    def session_verified?
        if session[ApiController.get_session_name] == nil
            render js: "window.location = 'app'"
        end        
    end 

    def get_session 
        session[ApiController.get_session_name]
    end

    def create_model_transaction(method)
        ActiveRecord::Base.transaction do                
            @errors = []
            method.call()
        rescue ActiveRecord::RecordInvalid            
            render json: {errors: @errors.flatten}, status: :bad_request
        end 
    end    

    def get_model_transaction_errors(object)
        !object.valid? && @errors.push(object.errors.messages.values)        
    end    
end