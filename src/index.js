import Button from '../packages/button/index';

const components = {
    Button
};

const install = (Vue) => {
    Object.keys(components).forEach((key) => {
        Vue.use(components[key]);
    });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ...components
};