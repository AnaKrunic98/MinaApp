<template>
    <div class="fixed bottom-0 h-auto w-full bg-white border-t border-gray-800">
        <ul
        v-show="user"
        class="flex justify-evenly p-2">
            <li>
                <NuxtLink to="/User">
                    <div
                    :class="{ active: isActive('/User') }" 
                    class="flex flex-col items-center">
                        <svg class="w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"></path>
                        </svg>
                        <span class="text-sm">Users</span>
                    </div>
                </NuxtLink>
            </li> 
        <!--<li>
                <NuxtLink to="/">
                    <div 
                    :class="{ active: isActive('/')}"
                    class="flex flex-col items-center">
                        <svg class="w-5"  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                        </svg>
                        <span class="text-sm">Home</span>
                    </div>
                </NuxtLink>
            </li>  -->
            <li>
                <NuxtLink to="/MoodForm">
                    <div 
                    :class="{ active: isActive('/MoodForm') }"
                    class="flex flex-col items-center">
                        <svg class="w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"></path>
                        </svg>
                        <span class="text-sm">Mood Form</span> 
                    </div>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/List">
                    <div 
                    :class="{ active: isActive('/List') }"
                    class="flex flex-col items-center">
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                        </svg>
                        <span class="text-sm">List</span> 
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


<script >
import { useRoute } from 'vue-router';

export default {
  name: 'Navigation',
  setup() {
    const route = useRoute();
    const user = useState('user').value;

    function isActive(path) {
      return route.path === path;
    }

    return {route, isActive, user};
  }
};

</script>

<style scoped>
.active {
  font-weight: bold;
  background-color: inherit;
  color: black;
  text-decoration:underline;
}
</style>