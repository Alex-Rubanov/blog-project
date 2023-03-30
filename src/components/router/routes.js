import About from '../../pages/About';
import Posts from '../../pages/Posts';
import PostIdPage from '../../pages/PostIdPage';
import ErrorPage from '../../pages/ErrorPage';
import Login from '../../pages/Login';

export const privateRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
    {path: '/404', component: ErrorPage, exact: true}
];

export const publicRoutes = [
    {path: '/login', component: Login, exact: true}
]