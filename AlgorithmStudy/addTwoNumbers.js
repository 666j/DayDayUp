
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var firstNode = new ListNode(0),resNode = firstNode;
	        var q = l1,p = l2;
	        var carry = 0;
		        while(q!=null||p!=null){
		            var qval = (q !=null)?q.val:0;
		            var pval = (p != null)?p.val:0;
		            var sum =carry+pval+qval;
		            carry = Math.floor(sum/10);
		            var resval = sum%10;
		            console.log(qval+","+pval+","+sum+","+carry);
		            resNode.next = new ListNode(resval);
		            resNode = resNode.next;
		            if (p != null) p = p.next;
	                if (q != null) q = q.next;
	                if(carry){
	                    resNode.next = new ListNode(carry);
	                }
		        }
		       
		        return firstNode.next;
};
function Test(){
	    var i =0;
		var f1 = new ListNode(3);
		var f2 = new ListNode(7);
		var l2 = f2,l1= f1;
		var arr1 = [2,4,3];
		var arr2=[5,6,4];
		while(i<3){
			l2.next = new ListNode(arr2[i]);
			l1.next = new ListNode(arr1[i]);
			i++;
			l1 = l1.next;
			l2 = l2.next;
		}
		
		var listNode = addTwoNumbers(f1.next, f2.next);
		while(listNode!=null){
			console.log("->"+listNode.val);
			listNode = listNode.next;
		}
}
Test();