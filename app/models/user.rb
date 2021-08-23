class User < ApplicationRecord
    has_many :posts
    has_many :pinned_posts
    has_many :liked_posts
    has_many :disliked_posts

    validates :name, :email, :password_hash, :color, presence: true
    validates :name, length: {maximum: 25}, uniqueness: {case_sensitive: false}
    validates :color, length: {is: 6}
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: {case_sensitive: false}
    validates :email, length: {maximum: 30}    
    validates :password_hash, length: {maximum: 255}

    include BCrypt

    def password
        @password ||= Password.new(password_hash)
    end

    def password=(new_password)
        @password = Password.create(new_password)
        self.password_hash = @password
    end
    
    def self.generate_color
        char = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
        colorArray = (1..6).map do
            char[rand(16)]
        end        
        return colorArray.join()
    end
end
