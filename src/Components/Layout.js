import Gallery from './Gallery'

var Layout = {
    view: () => {
        return [
            m('header', 'My cool gallery'),
            m('.wrapper', m(Gallery)),
        ]
    }
}

export default Layout;