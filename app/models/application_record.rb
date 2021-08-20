class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  I18n.locale = :es
end
