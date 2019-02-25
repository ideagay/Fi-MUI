<template>
    <button type="button" class="fi-button"
    :class="[`fi-button--${type}`,`fi-button--${size}`]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'FiButton',
    props: {
        type: {
            default: 'default',
            type: String
        },
        size: {
            default: 'normal',
            type: String
        }
    }
}
</script>

