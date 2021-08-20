class RouterController < ApplicationController

    def index              
    end    

    def app    
        @USER_SESSION = session[Api::UserController.get_session_name()]                        
    end
end