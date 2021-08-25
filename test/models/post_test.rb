require "test_helper"

class PostTest < ActiveSupport::TestCase            
    include ModelValidator
    setup do        
        @data = Post.new
        @data.message = 'Test100'    
        @data.user_id = 1
        start_validation(self.class.name)
    end

    test 'Message' do        
        validate_string :message, 'Mensaje', {}, {            
            max_length: 1000
        }
    end

    test 'User' do
        validate_foreign_id :user_id, 'Usuario ID'
    end

end
