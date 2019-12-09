const Node = (data) => {
  return {
    value: data,
    next: null,
  }
}

const Lil = () => {
  return {
    head: null,

    values: function() {
        const arr = []
        let path = this.head
        while(path !== null){
          arr.push(path.value)
          path = path.next
        }
        return arr
    },

    addToStart: function(value) {
      let old = this.head
      if(this.head === null){
        this.head = Node(value)
      }else {
        this.head = Node(value)
        this.head.next = old
      }
    },

    addToEnd: function(value) {
      if(this.head === null){
        this.head = Node(value)
      }else{
        let path = this.head
        while(path.next!==null){
          path = path.next
        }
        path.next = Node(value)
      }
    },

    removeFromStart: function() {
      let firstNode = this.head.value
      let nextNode = this.head.next
      this.head = nextNode
      return firstNode
    },

    removeFromEnd: function() {
      let current = this.head
      let previous = current
      while(current.next!==null){
        previous = current
        current = current.next
      }
      previous.next = null
      return current.value
    },

    getAt: function(i) {
      let current = this.head
      let count = 0
      if(current !== null){
        while(count!==i){
          current = current.next
          count++
        }
        return current.value
      } return null
      
    },

    removeAt: function(i) {
      let current = this.head
      let previous = current
      let count = 0
      if(current !== null){
        while(count!==i){
          previous = current
          current = current.next
          following = current.next
          count++
        }
        previous.next = following
        return current.value
      } return null
      
    },
  }
}


module.exports = {
  Lil,
  Node,
}