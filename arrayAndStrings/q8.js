// wrire a methid thst finds if s1 is substring of s2 or not

function isSubstring(s1, s2){
	for (var i = 0; i < s2.length; i++){
		if (s2[i] === s1[1]){
			for(var j = 0; j < s1.length; j++){
				if (s2[i+j] !== s1[j]){

				}
			}
		}
		return false;
	}
}