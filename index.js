class SortedList {
  constructor(items, length) {
    this.items = items = []
    this.length = items.length
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=> a-b)
    this.length=this.items.length
  }
  get(pos) {
    if(pos>this.items.length){
      throw new Error('OutOfBounds')
    }
    return this.items[pos]
  }
  max() {  
    if(this.items.length===0){
      throw new Error('EmptySortedList')
    }
     return Math.max(...this.items)
  }
  min() {
      if(this.items.length===0){
      throw new Error('EmptySortedList')
    }
     return Math.min(...this.items)
  }
 sum() {
    if(this.items.length ===0){
      return 0
    } 
    return this.items.reduce((a, b)=> a+b)    
  }
  avg() {
       if(this.items.length ===0){
     throw new Error('EmptySortedList')
    } 
    return this.items.reduce((a, b)=> a+b)/this.items.length
  }
}
module.exports = SortedList;
