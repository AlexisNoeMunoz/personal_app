module ApplicationCable
    class Connection < ActionCable::Connection::Base
        def get_session                       
            return @request.session[ApiController.get_session_name()]            
        end 
    end
end
