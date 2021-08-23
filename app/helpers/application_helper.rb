
module ApplicationHelper    
    def array_to_hash(array, key='id')
        hash = Hash.new
        array.each do |element|            
            hash[element[key]] = element            
        end        
        return hash
    end

    def array_to_hash_with_order(array, key='id')
        hash = Hash.new
        array_ordered = Array.new
        array.each do |element|
            hash[element[key]] = element
            array_ordered.push(element[key])
        end 
        return {hash: hash, order: array_ordered}
    end
end
