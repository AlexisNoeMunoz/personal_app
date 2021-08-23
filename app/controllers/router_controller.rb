class RouterController < ApplicationController

    def index              
    end    

    def app    
        @SESSION_VERIFIED = session[ApiController.get_session_name] != nil
    end
end