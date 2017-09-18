import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _876ba298 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _a95130d4 = () => import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services" */).then(m => m.default || m)
const _31e0e40a = () => import('..\\pages\\faq\\index.vue' /* webpackChunkName: "pages/faq" */).then(m => m.default || m)
const _68294a42 = () => import('..\\pages\\locations\\index.vue' /* webpackChunkName: "pages/locations" */).then(m => m.default || m)
const _a542061e = () => import('..\\pages\\hours\\index.vue' /* webpackChunkName: "pages/hours" */).then(m => m.default || m)
const _ead75ee8 = () => import('..\\pages\\estimate\\index.vue' /* webpackChunkName: "pages/estimate" */).then(m => m.default || m)
const _c1103260 = () => import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products" */).then(m => m.default || m)
const _36ad3b80 = () => import('..\\pages\\delivery\\index.vue' /* webpackChunkName: "pages/delivery" */).then(m => m.default || m)
const _088f1598 = () => import('..\\pages\\services\\grading.vue' /* webpackChunkName: "pages/services-grading" */).then(m => m.default || m)
const _3c7a6fd3 = () => import('..\\pages\\services\\spreading.vue' /* webpackChunkName: "pages/services-spreading" */).then(m => m.default || m)
const _6a988da7 = () => import('..\\pages\\products\\mulch.vue' /* webpackChunkName: "pages/products-mulch" */).then(m => m.default || m)
const _7c5c0e57 = () => import('..\\pages\\products\\rock.vue' /* webpackChunkName: "pages/products-rock" */).then(m => m.default || m)
const _483c4fe0 = () => import('..\\pages\\services\\delivery.vue' /* webpackChunkName: "pages/services-delivery" */).then(m => m.default || m)
const _22ef331e = () => import('..\\pages\\products\\soil.vue' /* webpackChunkName: "pages/products-soil" */).then(m => m.default || m)
const _53411612 = () => import('..\\pages\\contact_us\\index.vue' /* webpackChunkName: "pages/contactus" */).then(m => m.default || m)
const _513e3c24 = () => import('..\\pages\\about_us\\index.vue' /* webpackChunkName: "pages/aboutus" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _876ba298,
			name: "index"
		},
		{
			path: "/services",
			component: _a95130d4,
			name: "services"
		},
		{
			path: "/faq",
			component: _31e0e40a,
			name: "faq"
		},
		{
			path: "/locations",
			component: _68294a42,
			name: "locations"
		},
		{
			path: "/hours",
			component: _a542061e,
			name: "hours"
		},
		{
			path: "/estimate",
			component: _ead75ee8,
			name: "estimate"
		},
		{
			path: "/products",
			component: _c1103260,
			name: "products"
		},
		{
			path: "/delivery",
			component: _36ad3b80,
			name: "delivery"
		},
		{
			path: "/services/grading",
			component: _088f1598,
			name: "services-grading"
		},
		{
			path: "/services/spreading",
			component: _3c7a6fd3,
			name: "services-spreading"
		},
		{
			path: "/products/mulch",
			component: _6a988da7,
			name: "products-mulch"
		},
		{
			path: "/products/rock",
			component: _7c5c0e57,
			name: "products-rock"
		},
		{
			path: "/services/delivery",
			component: _483c4fe0,
			name: "services-delivery"
		},
		{
			path: "/products/soil",
			component: _22ef331e,
			name: "products-soil"
		},
		{
			path: "/contact:us",
			component: _53411612,
			name: "contactus"
		},
		{
			path: "/about:us",
			component: _513e3c24,
			name: "aboutus"
		}
    ],
    fallback: false
  })
}
