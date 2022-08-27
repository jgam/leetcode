var rotateRight = function(head, k) {
    if(!head){
        return head
    }
    
    let length = 0;
    let ptr = head;
    let beginning,end;
    
    while(ptr){
        end = ptr;
        ptr = ptr.next;
        length += 1;
    }
    
    let rotations = length - (k % length);
    
    beginning = head;
    ptr = head;
    
    while(rotations > 1){
        ptr = ptr.next;       
        rotations -= 1;
    };
    
    end.next = beginning;
    beginning = ptr.next;
    ptr.next = null;
    
    return beginning
};
