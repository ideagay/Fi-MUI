import Button from './button/index';

const components = {
    Button
};

const install = (Vue) => {
    Object.keys(components).forEach((key) => {
        Vue.use(components[key]);
    });
}

export default {
    install,
    ...components
};