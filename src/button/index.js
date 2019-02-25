import {PREFIX} from '../../utils/var';
import Button from './src/button.vue';

Button.install = function(Vue) {
    Vue.component(`${PREFIX}-button`, Button);
}

export default Button;