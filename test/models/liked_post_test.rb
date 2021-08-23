require "test_helper"

class LikedPostTest < ActiveSupport::TestCase
    include ModelValidator

    setup do
        @data = LikedPost.new
        @data.user_id = 1
        @data.post_id = 2
        start_validation(self.class.name)
    end

    test 'Usuario ID / Post ID' do
        validate_foreign_id_with_id :user_id, :post_id, 'Usuario ID', 'Post ID'
    end
end
