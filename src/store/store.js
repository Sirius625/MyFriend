import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// const state = {
//     count: 1,
//     friends:[
//         {
//             name:'xiaoli',
//             age:19,
//             from:'China'
//         },
//         {
//             name:'xiaoli',
//             age:19,
//             from:'China'
//         },
//         {
//             name:'xiaoli',
//             age:19,
//             from:'China'
//         }
//     ]

// }

export default new Vuex.Store({
    state: {
        count: 0,
        // newFriend:{
        //     name: '54',
        //     age: 0,
        //     from: '648'
        // },
        name0: '',
        age: '',
        from: '',
        friends: [{
                name: '王二狗',
                age: 20,
                from: 'China'
            },
            {
                name: '法外张三',
                age: 52,
                from: 'China'
            },
            {
                name: '大黄',
                age: 25,
                from: 'China'
            }
        ],
        allFriends: [{
                name: '王二狗',
                age: 20,
                from: 'China'
            },
            {
                name: '法外张三',
                age: 52,
                from: 'China'
            },
            {
                name: '大黄',
                age: 25,
                from: 'China'
            }
        ],
        sortFriends: [{
                name: '王二狗',
                age: 20,
                from: 'China'
            },
            {
                name: '法外张三',
                age: 52,
                from: 'China'
            },
            {
                name: '大黄',
                age: 25,
                from: 'China'
            }
        ],
        deleteFriends:[]

    },
    getters: {
        count: state => {
            return state.friends.length;
        },
    },
    mutations: {
        delete(state) {
            if (state.friends.length == 1) {
                alert('这是你最后的朋友了！')
                // var a = state.friends.splice(this, 1);
                state.sortFriends.splice(this, 1);
                state.deleteFriends.push(a);
            } else {
                var a = state.friends.splice(this, 1);
                state.sortFriends.splice(this, 1);
                state.deleteFriends.push(a);
            }
        },
        increate(state) {
            var newFriend = {
                name: '',
                age: 0,
                from: ''
            };
            
            newFriend.name = state.name0;
            newFriend.age = state.age;
            newFriend.from = state.from;
            if (newFriend.name !== '' && newFriend.age !== '' && newFriend.from !== '') {
                state.friends.push(newFriend);
                state.allFriends.push(newFriend);
                state.sortFriends.push(newFriend);
                // state.deleteFriends.push(a);
            } else {
                alert('请输入朋友的全部信息');
            }
            // alert(state.msg);
        },
        delAll(state) {
            state.friends = [];
        },
        sort(state) {
            for (var i = 0; i < state.sortFriends.length; i++) {
                for (var j = 0; j < state.sortFriends.length - i; j++) {
                    if (state.sortFriends[j].age < state.sortFriends[j + 1].age) {
                        // [state.sortFriends[j],state.sortFriends[j+1]] = [state.sortFriends[j+1],state.sortFriends[j]];
                        var a = state.sortFriends[j].name;
                        var b = state.sortFriends[j].age;
                        var c = state.sortFriends[j].from;
                        state.sortFriends[j].name = state.sortFriends[j + 1].name;
                        state.sortFriends[j].age = state.sortFriends[j + 1].age;
                        state.sortFriends[j].from = state.sortFriends[j + 1].from;
                        state.sortFriends[j + 1].name = a;
                        state.sortFriends[j + 1].age = b;
                        state.sortFriends[j + 1].from = c;
                    }
                }
            }
        }

    }
});