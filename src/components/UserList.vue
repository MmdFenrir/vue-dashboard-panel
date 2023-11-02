<script setup>
import { useUsersStore } from '../stores/usersProfileStore'

const users = useUsersStore()
</script>

<template>
  <div class="flex flex-col-reverse">
    <div class="overflow-x-auto">
      <div class="p-1.5 w-full inline-block align-middle">
        <div class="overflow-hidden border rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-700">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-bold text-center text-white uppercase"
                >
                  ایدی
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-bold text-center text-white uppercase"
                >
                  نام و نام خانوادگی
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-bold text-center text-white uppercase"
                >
                  ایمیل
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-bold text-right text-white uppercase">
                  ویرایش
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-bold text-right text-white uppercase">
                  حذف
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-gray-700">
              <tr
                v-for="user in users.userProfile"
                :key="user.ID"
                :data-id="user.ID"
                class="tbody-tr-list"
              >
                <td class="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                  {{ user.ID }}
                </td>
                <td class="px-6 py-4 text-sm text-white whitespace-nowrap">
                  {{ user.userName + ' ' + user.userLastName }}
                </td>
                <td class="px-6 py-4 text-sm text-white whitespace-nowrap">{{ user.email }}</td>
                <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <!-- <a class="text-yellow-500 hover:text-yellow-600" href="#"> ویرایش </a> -->
                  <RouterLink
                    class="text-yellow-500 hover:text-yellow-600"
                    :to="{ name: 'user.edit', params: { id: user.ID } }"
                    >ویرایش
                  </RouterLink>
                </td>
                <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <button
                    class="text-red-500 hover:text-red-600"
                    @click="users.deleteUser(user.ID)"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
