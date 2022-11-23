class Node<T> {

  value: T
  next?: Node<T>

  constructor(value: T) {
    this.value = value
  }
}


export default class Queue<T> {

  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined
    this.length = 0
  }

  enqueue(item: T): void {
    // const node = { value: item } as Node<T>
    const node = new Node(item)
    this.length++
    if (!this.tail) {
      this.tail = this.head = node
      return
    }
    this.tail.next = node
    this.tail = node
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined
    }

    this.length--

    const head = this.head
    this.head = this.head.next

    if (!this.head) {
      this.tail = undefined
    }

    // if (!this.length) {
    //   this.tail = undefined
    // }

    // clean up ( optional in js)
    // since js is garbage collected

    head.next = undefined

    return head.value
  }

  peek(): T | undefined {
    return this.head?.value
  }

}