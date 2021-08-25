class RouterController < ApplicationController

    def index              
    end    

    def cv
        send_file("#{Rails.root}/public/AlexisMunozCV.pdf")
    end

    def app    
        @SESSION_VERIFIED = session[ApiController.get_session_name] != nil
    end
end