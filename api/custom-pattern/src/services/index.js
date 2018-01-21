import MainRequesterComposite from './MainRequesterComposite'
import Strategies from './strategies'

const MainRequester = new MainRequesterComposite()
Strategies.map((strategy) => MainRequester.add(strategy))

export {MainRequester}
