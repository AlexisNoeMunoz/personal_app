class PinnedPost < ApplicationRecord
    belongs_to :user, optional: false
    belongs_to :post, optional: false    

    validates :comment, length: {maximum: 255}    
    validates :user, uniqueness: { scope: :post }

    before_save do
        self.comment ||= ''
    end
end
