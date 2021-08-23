
def create_command(model)
    "rake test TEST=test/models/#{model}_test.rb"
end

def run(model)
    bundle exec create_command(model)
end

namespace :test do 
    namespace :models do        
        task :user do
            run('user')            
        end    
        task :post do
            run('post')            
        end    
        task :pinned_post do
            run('pinned_post')            
        end
        task :liked_post do
            run('liked_post')            
        end
        task :disliked_post do
            run('disliked_post')            
        end    

        task :all do
            bundle exec "
                #{create_command('user')} /
                #{create_command('post')} /
                #{create_command('pinned_post')} /
                #{create_command('liked_post')} /
                #{create_command('disliked_post')} 
            "
        end
    end
end