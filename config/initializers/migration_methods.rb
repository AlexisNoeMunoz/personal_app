
module ActiveRecordTableDefinitionExtension
   
    def dtimestamp(options={})
        column :created_at, :datetime, null: false, default: -> {'CURRENT_TIMESTAMP'}
        column :updated_at, :datetime, null: false, default: -> {'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'}
    end
    
    def dstring(name, options = {})
        options[:null] = false
        options[:default] = ''
        column name, :string, **options
    end
    
    def dinteger(name, options = {})
        options[:null] = false
        options[:default] = 0
        column name, :integer, **options
    end
    
    def dcoin(name, options = {})
        options[:scale] = 2
        options[:precision] = 11
        column name, :decimal, **options
    end
    
    def dreferences(name, on_delete, options = {})
       references name, :foreign_key => {on_update: :cascade, on_delete: on_delete} , **options
    end
    
end

ActiveRecord::ConnectionAdapters::TableDefinition.include(ActiveRecordTableDefinitionExtension)