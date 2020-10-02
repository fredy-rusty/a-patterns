function starpattern(n) {
	for(let i=0; i<=n; i++) {
		switch(i) {
		  case 1:
		    console.log("*       *")
		    break;
		  case 2:
		    console.log("* *   *")
		    break;
		  default:
		    console.log("* ".repeat(i))
			
		}
	}
}
starpattern(5)

/*
 starpattern(5)
 *
 * *
 * * *
 * * * *
 * * * * *
 */
