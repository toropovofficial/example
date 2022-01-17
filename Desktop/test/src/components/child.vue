<template lang="">
  <div v-if="item.isShow" @click.stop="showChildUsers"  class="user"  :class="userStatus">
    <div  class="user__wrapper">
      <div class="user__name">
         <h1 >{{ item.name }}</h1>
         <img class="user__image" v-if="isImage === 'plus'" src="https://img.icons8.com/fluency/48/000000/plus.png"/>
         <img class="user__image" v-if="isImage === 'minus'" src="https://img.icons8.com/color/48/000000/minus.png"/>
      </div>
      <div class="user__number">
        <h2 >{{ item.number }}</h2>
      </div>
    </div>
    <template v-if="item.child">
      <component
        v-for="item in item.child"
        :key="item.name"
        :item="item"
        :is="'my-component'"
        :child="true">
      </component>
    </template>
  </div>
   <div v-if="item === 'firstEl'"   class="user"  :class="userStatus">
    <div  class="user__wrapper">
      <div class="user__name">
         <h1 >Имя</h1>
      </div>
      <div class="user__number">
        <h2 >Телефон</h2>
      </div>
    </div>
    </div>
</template>

<script>

export default {
  name: 'my-component',
  props: {
    item: {
      default: '',
    },
    child: {
      type: Boolean,
    },
  },

  methods: {
    showChildUsers() {
      this.isImage = !this.isImage;
      this.$store.dispatch('usersList/changeIsShowChildEl', this.item.id);
    },
  },
  computed: {
    userStatus() {
      return this.child ? 'user-child' : 'user-main';
    },
    isChild() {
      return this.item.child ? 'yes' : '';
    },
    isImage() {
      if (this.item.child) {
        if (this.item.child[0].isShow) {
          return 'minus';
        } return 'plus';
      }
      return false;
    },
  },
};
</script>
<style lang="scss" scoped>
  .user {
    &__wrapper {
      display: flex;
      justify-content: flex-end;
      border-left: none;
      width: auto;
    }
    &__name {
      width: 50%;
      border: solid 1px #000;
      word-break: break-word;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px;
    }
    &__number {
      padding: 5px;
      width: 199px;
      border: solid 1px #000;
    }
    &__image {
      width: 30px;
    }
  }
  .user-main {
    width: 400px;
    position: relative;
  }
  .user-child {
    position: relative;
    width: calc(100% - 5px);
    margin-left: auto;
     .user__name {
       width: calc(100% - 199px);
     }
     .user__number {
       width: 199px;
     }
  }
</style>
