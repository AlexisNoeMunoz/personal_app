
def run(model)
    bundle exec "rake test test/models/#{model}_test.rb"
end

namespace :test do 
    namespace :model do
        task :user do
            run('user')
        end    
    end
end