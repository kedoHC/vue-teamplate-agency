



import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import Blog from './components/Blog.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import Login from './components/Login.vue'



export const routes = [
    { path: '', component: Home, name:"home" },
    { path: '/contact', component: Contact, name:"contact" },
    { path: '/blog', component: Blog, name:"blog" },
    { path: '/projects', component: Projects, name:"projects" },
    { path: '/about', component: About, name:"about" },
    { path: '/login', component: Login, name:"login" },

]
