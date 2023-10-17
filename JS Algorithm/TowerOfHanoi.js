function towerHanoi(n, fromRod, toRod, usingRod){
      if(n === 1){
        console.log(`move disk 1 from ${fromRod} to ${toRod}`);
        return 
      }
      towerHanoi(n-1,fromRod,usingRod,toRod);
      console.log(`move desk ${n} from ${fromRod} to ${toRod}`);
      towerHanoi(n-1, usingRod, toRod, fromRod);
}

towerHanoi(3,'a','c','b');
// follows 2^n - 1, from this Big O(2^n);