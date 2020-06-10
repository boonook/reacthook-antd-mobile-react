import UserState from './user'
import MenuState from './menu'

class store {
    constructor() {
        this.userState = new UserState();
        this.menuState = new MenuState();
    }
}

export default new store();
