import {
  State, Getter, Mutation, Action,
} from 'vuex-simple';

export default class UsersListModule {
  @State()

    listUsers = [
      {
        name: 'user1',
        number: 24,
        id: Math.random(),
        isShow: true,
        child: [],
      },
      {
        name: 'user2',
        number: 25,
        id: Math.random(),
        isShow: true,
        child: [],
      },
      {
        name: 'user3',
        number: 23,
        id: Math.random(),
        isShow: true,
        child: [],
      },
      {
        name: 'user4',
        number: 19,
        id: Math.random(),
        isShow: true,
        child: [],
      },
    ];

    @State()
    parentUser = '';

    @State()
    allParentUsersList = [];

  @Getter()
    get getListUsers() {
      return this.listUsers;
    }

    @Getter()
  get getAllParent() {
    return this.allParentUsersList;
  }

  @Mutation
    setAllParentUsersList(list) {
      this.allParentUsersList = list;
    }

  @Mutation
  createUserListInLocalStorage() {
    this.listUsers = JSON.parse(localStorage.getItem('listUsers'));
  }

  @Mutation()
  findParentUser({ list, params }) {
    list.forEach((item) => {
      if (item.name === params || item.id === params) this.parentUser = item;
      if (item.child) this.findParentUser({ list: item.child, params });
    });
  }

  @Mutation()
  addChild(user) {
    if (this.parentUser) this.parentUser.child.push(user);
  }

  @Mutation()
  changeShow() {
    this.parentUser.child.forEach((item) => { item.isShow = !item.isShow; });
  }

  @Action()
  createdChildUser(newUser) {
    this.findParentUser({ list: this.listUsers, params: newUser.parentName });
    let isShowStatus = this.parentUser.isShow;
    if (this.parentUser.child.length) {
      const [firstChild] = this.parentUser.child;
      isShowStatus = firstChild.isShow;
    }
    this.addChild({
      name: newUser.childName,
      number: newUser.childNumber,
      id: Math.random(),
      isShow: isShowStatus,
      child: [],
    });
  }

  @Action()
  changeIsShowChildEl(id) {
    this.findParentUser({ list: this.listUsers, params: id });
    if (this.parentUser.child.length) this.changeShow();
  }

  @Action()
  callCreateUserListInLocalStorage() {
    this.createUserListInLocalStorage();
  }

  @Action()
  changeAllParentUsersList() {
    const parentUsersListUpdate = [];
    function addParentUserInList(list) {
      list.forEach((item) => {
        parentUsersListUpdate.push({
          name: item.name,
          id: item.id,
        });
        if (item.child?.length) addParentUserInList(item.child);
      });
    }
    addParentUserInList(this.listUsers);
    this.setAllParentUsersList(parentUsersListUpdate);
  }
}
