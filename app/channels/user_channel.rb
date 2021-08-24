class UserChannel < ApplicationCable::Channel
  
    before_subscribe do
        @user_id = connection.get_session()        
    end

    def subscribed        
        if @user_id                  
            stream_from "user_channel"                      
        end
    end

    def unsubscribed
    end
end