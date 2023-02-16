export const MENU_ITEMS = [
    {
        title: 'Dashboard',
        link: 'dashboard',
        enabled: true,
        hidden: false,
    },
    {
        title: 'Login',
        link: 'login',
        enabled: true,
        hidden: false,
    },
    {
        title: 'Public',
        link: 'public',
        enabled: true,
        hidden: false,
    },
    {
        title: '404',
        link: '404',
        enabled: true,
        hidden: false,
    },
    {
        title: 'Other',
        link: 'other',
        enabled: true,
        hidden: false,
    }
]


// <span (click)="navigate('/public')">404</span> <br/>
// <span (click)="navigate('/')">/</span> <br/>
// <span (click)="navigate('/other')">other</span> <br/>
// <span (click)="navigate('/login')">login</span> <br/>
// <span (click)="navigate('/dashboard')">dashboard</span> <br/>
// <span (click)="navigate('/public')">public</span> <br/>