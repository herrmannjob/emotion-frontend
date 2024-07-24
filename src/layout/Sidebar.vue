<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import HeaderSearch from '../components/HeaderSearch.vue'

let store = useStore()
let route = useRoute()

onMounted(() => {
    window.addEventListener('resize', handleWindowResize)
})
onBeforeUnmount(() => {
    window.removeEventListener('resize', handleWindowResize)
})

let handleWindowResize = () => {
    let sidenav = store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen

    if (window.innerWidth <= 1200) {
        if (store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen) {
            store.commit('largeSidebar/toggleSidebarProperties')
        }
    } else {
        if (!store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen) {
            store.commit('largeSidebar/toggleSidebarProperties')
        }
    }
}
</script>

<template>
    <div class="side-content-wrap">
        <div class="side-content-wrap">
            <div
                :class="
                    store.state.largeSidebar.sidebarToggleProperties
                        .isSideNavOpen === true
                        ? 'open'
                        : ''
                "
                class="sidebar-left"
            >
                <perfect-scrollbar class="mt-3">
                    <!-- <HeaderSearch /> -->
                    <div
                        class="ml-auto relative max-w-xs w-full h-full px-4 py-4 pb-12 flex flex-col overflow-y-auto"
                    >
                        <form class="hidden lg:block">
                            <div class="border-b border-gray-200 py-6">
                                <h3 class="-my-3 flow-root">
                                    <button
                                        type="button"
                                        class="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                                        aria-controls="filter-section-0"
                                        aria-expanded="false"
                                    >
                                        <span class="font-medium text-gray-900">
                                            Termo de Busca:
                                        </span>
                                        <span class="ml-6 flex items-center">
                                            <svg
                                                class="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            <svg
                                                class="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>
                                <div class="pt-6" id="filter-section-0">
                                    <div class="space-y-4">
                                        <div
                                            v-for="term in searchTerm"
                                            v-bind:key="term"
                                            class="flex items-center"
                                        >
                                            <input
                                                id="filter-color-0"
                                                name="color[]"
                                                value="white"
                                                type="checkbox"
                                                class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label
                                                for="filter-color-0"
                                                class="ml-3 text-sm text-gray-600"
                                            >
                                                {{ term.name }}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="border-b border-gray-200 py-6">
                                <h3 class="-my-3 flow-root">
                                    <button
                                        type="button"
                                        class="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                                        aria-controls="filter-section-1"
                                        aria-expanded="false"
                                    >
                                        <span class="font-medium text-gray-900">
                                            Tópicos:
                                        </span>
                                        <span class="ml-6 flex items-center">
                                            <svg
                                                class="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            <svg
                                                class="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>
                                <div class="pt-6" id="filter-section-1">
                                    <div class="space-y-4">
                                        <div
                                            v-for="topic in searchTopic"
                                            v-bind:key="topic"
                                            class="flex items-center"
                                        >
                                            <input
                                                id="filter-color-0"
                                                name="color[]"
                                                value="white"
                                                type="checkbox"
                                                class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label
                                                for="filter-color-0"
                                                class="ml-3 text-sm text-gray-600"
                                            >
                                                {{ topic.name }}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </perfect-scrollbar>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nav-item.router-link-exact-active {
    @apply text-purple-500;

    &:after {
        content: '';
        position: absolute;
        width: 30px;
        height: 30px;
        bottom: -15px;
        right: -15px;
        transform: rotate(45deg);
        @apply bg-purple-500;
    }
}
.submenuLi {
    &:hover {
        .submenuli-icon {
            color: #8b5cf6;
        }
    }
    .submenuli-icon {
        color: #9ca3af;
    }
}
.submneu-nested-link {
    padding: 0 !important;
    color: #000 !important;
    &:hover {
        background-color: transparent !important;
        color: #8b5cf6 !important;
    }
}
.side-content-wrap {
    .sidebar-left {
        position: fixed;
        top: 80px;
        left: -210px;
        width: 210px;
        background: #fff;
        box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
            0 1px 4px rgba(0, 0, 0, 0.08);
        z-index: 90;
        transition: all 0.24s ease-in-out;
        &.open {
            left: 0;
            transition: all 0.24s ease-in-out;
        }
        .ps {
            height: calc(100vh - 80px);
        }
        .navigation-left {
            list-style: none;
            text-align: center;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            .nav-item,
            .nav-item-single {
                position: relative;
                display: block;
                width: 100%;
                overflow: hidden;
                cursor: pointer;
                &:hover {
                    .nav-item-hold {
                        @apply text-purple-500;
                    }
                    &:after {
                        content: '';
                        position: absolute;
                        width: 30px;
                        height: 30px;
                        bottom: -15px;
                        right: -15px;
                        transform: rotate(45deg);
                        @apply bg-purple-500;
                    }
                }

                &.active {
                    @apply text-purple-500;

                    &:after {
                        content: '';
                        position: absolute;
                        width: 30px;
                        height: 30px;
                        bottom: -15px;
                        right: -15px;
                        transform: rotate(45deg);
                        @apply bg-purple-500;
                    }
                }
                border-bottom: 1px solid #dee2e6;
                .nav-item-hold {
                    display: block;
                    width: 100%;
                    padding: 26px 0;
                    span.material-icons {
                        font-size: 2rem;
                    }
                }
            }
        }
    }
    .sidebar-left-secondary {
        position: fixed;
        top: 80px;
        left: calc(-220px - 20px);
        z-index: 89;
        height: calc(100vh - 80px);
        width: 220px;
        padding: 0.75rem 0;
        transition: all 0.24s ease-in-out;
        background: #fff;

        &.open {
            left: 120px;
            transition: all 0.24s ease-in-out;
        }
        ul.childNav {
            li {
                &.dropdown-sidemenu {
                    display: block;
                    transition: all 0.3s ease-in;
                    &.open {
                        a {
                            .dd-arrow {
                                transform: rotate(90deg);
                                transition: all 0.3s ease-in;
                            }
                        }
                        ul.submenu {
                            display: block;
                            max-height: 1000px;
                            transition: all 0.3s ease-in;
                        }
                    }

                    a {
                        .dd-arrow {
                            margin-left: auto !important;
                            transition: all 0.3s ease-in;
                        }
                    }
                }

                // &.active {
                //     a {
                //         background-color: #f3f4f6;
                //         @apply text-purple-500;
                //     }
                // }
                a {
                    text-transform: capitalize;
                    display: flex;
                    align-items: center;
                    font-size: 13px;
                    cursor: pointer;
                    padding: 12px 24px;
                    transition: 0.15s all ease-in;
                    &:hover {
                        background-color: #f3f4f6;
                        @apply text-purple-500;
                    }
                    &.router-link-active.router-link-exact-active {
                        @apply text-purple-500;
                    }
                }
                ul.submenu {
                    @apply bg-gray-50;
                    display: none;
                    max-height: 0px;
                    transition: all 0.3s ease-in;

                    &.open {
                        display: block;
                        transition: all 0.3s ease-in;
                    }
                    li {
                        a {
                            padding-left: 48px;
                        }
                    }
                }
            }
        }
    }
    .sidebar-overlay {
        display: none;
        position: fixed;
        width: calc(100% - 120px - 220px);
        height: calc(100vh - 80px);
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0);
        z-index: 101;
        cursor: w-resize;
        &.open {
            display: block;
        }
    }
}
</style>
