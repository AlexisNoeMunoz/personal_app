require "test_helper"

class UserTest < ActiveSupport::TestCase            
    include ModelValidator
    setup do        
        @data = User.new
        @data.name = 'Test100'
        @data.email = 'Test100@Test100.com'
        @data.password_hash = 'Test100'  
        @data.color = '123123'      
        start_validation(self.class.name)
    end

    test "Name" do                        
        validate_string :name, 'Nombre', {
            allow_duplicated: false,       
        }, {max_length: 25}                    
    end    

    test "Email" do
        validate_email :email, 'Correo', {
            allow_duplicated: false
        }, {max_length: 50}
    end

    test "Password" do
        validate_string :password_hash, 'Contraseña'
    end

    test "Color" do
        validate_string :color, 'Color', {}, {
            string: '123456', 
            string_insensitive: '123546', 
            max_length: 6,
            min_length: 6
        }
    end

end
