import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUsersStore = defineStore('usersProfile', () => {
  const userProfile = ref([
    {
      ID: '1',
      userName: 'محمدجواد',
      userLastName: 'حاجی بگلو',
      email: 'mohamamd@gmail.com',
      country: 'ایران',
      address: 'کوشش، شهرک بسیج',
      city: 'نیشابور',
      zPost: '99615384'
    },
    {
      ID: '2',
      userName: 'عرفان',
      userLastName: 'اسدی',
      email: 'erfanAsadi@gmail.com',
      country: 'ایران',
      address: 'کوشش، شهرک بسیج',
      city: 'نیشابور',
      zPost: '99615384'
    },
    {
      ID: '3',
      userName: 'مهدی',
      userLastName: 'داودی',
      email: 'mahdiDavod@gmail.com',
      country: 'ایران',
      address: 'کوشش، شهرک بسیج',
      city: 'نیشابور',
      zPost: '99615384'
    },
    {
      ID: '4',
      userName: 'علیرضا',
      userLastName: 'جمشیدی',
      email: 'jamshidiAli@gmail.com',
      country: 'ایران',
      address: 'کوشش، شهرک بسیج',
      city: 'نیشابور',
      zPost: '99615384'
    },
    {
      ID: '5',
      userName: 'علیرضا',
      userLastName: 'جمشیدی',
      email: 'jamshidiAli@gmail.com',
      country: 'ایران',
      address: 'کوشش، شهرک بسیج',
      city: 'نیشابور',
      zPost: '99615384'
    },
    {
      ID: '6',
      userName: 'علیرضا',
      userLastName: 'جمشیدی',
      email: 'jamshidiAli@gmail.com',
      country: 'ایران',
      address: 'کوشش، شهرک بسیج',
      city: 'نیشابور',
      zPost: '99615384'
    }
  ])

  function addUser(newUser) {
    userProfile.value.push(newUser)
  }

  function deleteUser(id) {
    userProfile.value = userProfile.value.filter((user) => {
      return user.ID !== id
    })
  }

  return { userProfile, addUser, deleteUser }
})
