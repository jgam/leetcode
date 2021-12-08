function reverse(llist) {
    // Write your code here
    let initialPointer = llist;
    
    let pointer= llist;
    let prev = null;
    while(pointer.next){
        let temp = pointer.next;
        
        let prevTemp = pointer.prev;
        pointer.prev = pointer.next;
        pointer.next = prevTemp;
        pointer = temp;
    }
    
    let prevTemp = pointer.prev;
    pointer.prev = pointer.next;
    pointer.next = prevTemp;
    return pointer
    

}
