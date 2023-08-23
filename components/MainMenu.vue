<template>
    <div class="fixed bottom-0 h-auto w-full bg-white border-t border-gray-800">
        <ul
        v-show="user"
        class="flex justify-evenly p-2">
            <li>
                <NuxtLink to="/submissions">
                    <div
                    :class="{ active: isActive('/submissions') }" 
                    class="flex flex-col items-center">
                        <svg  class="w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                        </svg>
                        <span class="text-sm">Submissions</span>
                    </div>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/users">
                    <div 
                    :class="{ active: isActive('/users') }"
                    class="flex flex-col items-center">
                        <svg class="w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
                        </svg>
                        <span class="text-sm">Users</span> 
                    </div>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/Account">
                    <div 
                    :class="{ active: isActive('/Account') }"
                    class="flex flex-col items-center">
                        <svg class="w-5"  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span class="text-sm">Account</span> 
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>


<script setup>
import { useRoute } from 'vue-router';

const { user } = useUser()
const route = useRoute();

function isActive(path) {
  return route.path === path;
}

</script>

<style scoped>
.active {
  font-weight: bold;
  background-color: inherit;
  color: black;
  text-decoration:underline;
}
</style>