require "test_helper"

class PinnedPostTest < ActiveSupport::TestCase
    include ModelValidator

    setup do
        @data = PinnedPost.new
        @data.comment = 'Test100'        
        @data.user_id = 1
        @data.post_id = 2
        start_validation(self.class.name)
    end

    test 'Comment' do
        validate_string :comment, 'Comentario', {presence: false}        
    end    

    test 'Usuario ID / Post ID' do
        validate_foreign_id_with_id :user_id, :post_id, 'Usuario ID', 'Post ID'
    end
end
