ENV['RAILS_ENV'] ||= 'test'
require_relative "../config/environment"
require "rails/test_help"

require 'colorize'

require 'general_methods/ModelValidator'
# require 'general_methods/print_helper'

#-----------------------------CONTROLLERS----------------------------------------
  # require 'general_methods/controllers/print_helper'  

#-------------------------------MODELS--------------------------------------------
# require 'general_methods/models/valid_helper'
  
  # require 'general_methods/models/valid_string_helper'
  # require 'general_methods/models/valid_integer_helper'
  # require 'general_methods/models/valid_coin_helper'
  # require 'general_methods/models/valid_email_helper'
  # require 'general_methods/models/valid_foreign_id_helper'
  # require 'general_methods/models/valid_foreign_id_with_string_helper'
  # require 'general_methods/models/valid_foreign_id_with_email_helper'
  # require 'general_methods/models/valid_foreign_id_with_boolean_helper'
  # require 'general_methods/models/valid_foreign_id_with_another_id_helper'

class ActiveSupport::TestCase  
    # parallelize(workers: :number_of_processors)          
    fixtures :all        
end