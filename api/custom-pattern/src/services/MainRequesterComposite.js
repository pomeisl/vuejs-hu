export default class MainRequesterComposite {
  add(Requester) {
    this[Requester.constructor.name] = Requester.handler
  }
}
