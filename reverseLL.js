function reverse(llist) {
    // Write your code here
    let pointer = llist;
    let prev = null;
    
    while(pointer){
        let temp = pointer.next;
        pointer.next = prev;
        prev = pointer;
        pointer = temp;
    }
    return prev;

}
