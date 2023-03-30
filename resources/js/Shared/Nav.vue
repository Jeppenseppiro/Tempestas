<template class="sticky top-0 z-50">
  <!-- <nav class="mt-6">
    <ul class="list-disc">
      <li><Link :href="route('home')">Home</Link></li>
      <li><Link :href="route('users')">Users</Link></li>
      <li>
        <Link
          :href="route('logout')"
          method="POST"
          :data="{ name: 'sample Vue data' }"
          >Logout</Link
        >
      </li>
    </ul>
  </nav> -->

  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full navbar bg-base-300 px-8 mb-3 fixed z-50">
        <div class="flex-none">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2 normal-case text-xl">Tempestas</div>
        <label
          class="flex-none btn mr-2 text-center"
          for="search-modal"
          v-if="
            $page.component == 'Weather/Index' &&
            Object.keys(weatherForecast.newWeatherCurrentForecast).length > 0
          "
          >Search Location</label
        >
        <div class="flex-1"></div>
        <div class="flex-none hidden sm:block">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-20 rounded-full">
                <img
                  src="https://avatars.githubusercontent.com/u/21099616?v=4"
                />
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Page content here -->
      <div class="mx-auto bg-white mt-24 md:mt-20 h-screen"><slot /></div>
    </div>
    <div class="drawer-side float-left">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100">
        <!-- Sidebar content here -->
        <div class="flex flex-col w-full border-opacity-50">
          <div
            class="grid py-4 card bg-base-300 rounded-box place-items-center text-2xl font-bold"
          >
            Tempestas<br />
            <label class="text-xs">Weather Web Application</label>
          </div>
          <div class="divider"></div>
        </div>
        <li>
          <a>
            Weather
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 bg-base-100">
            <li><Link :href="route('weather.index')">Dashboard</Link></li>
          </ul>
        </li>
        <li><Link :href="route('locations.index')">Locations</Link></li>
        <li>
          <Link :href="route('logout')" method="POST" as="button">Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Link } from "@inertiajs/vue3";
import { weatherForecast } from "../Shared/weatherForecast";
export default {
  components: {
    Link,
  },
  data() {
    return {
      weatherForecast,
    };
  },
};
</script>
