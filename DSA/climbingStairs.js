//Problem : Find the number of distinct ways you can climb a staircase of n steps, if you can take 1 or 2 steps at a time




function climbingStairs(n){
    if(n==1) return 1; // if there is one stairs then there will always one way to climb the stair
// Here we are initializing dp (dynamic programming) for memoization for possible ways to climb different number of steps
   let dp = []
   dp[1] = 1; // for one stair there will always one way to climb (1 ways at a time)
   dp[2] = 2  // for two stair there will always two way to climb (1-1 step at a time or 2 steps at one time)

   if(n==2) return 2; // if there is two stairs then there will always two way to climb the stair

   //Now if number of stair is greater than 2 then : 
   
   for(i=3; i<=n; i++){
     dp[i] = dp[i-1] + dp[i-2] // we get this from following a pattern that at to climb 3 stairs 
     //we have total possible way =  to climb (n-1) it means 2 stairs + to climb (n-2) it means 1 stairs
   }

   return dp[n] // it will our final possible ways to climb n number of stairs
}

let output = climbingStairs(14)

console.log('output : ',output)