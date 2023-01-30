export default {
    template: `
        <button :class="{ 
            'text-white font-bold py-2 px-4 rounded': true, 
            'bg-blue-500 hover:bg-blue-700' : type === 'primary',
            'bg-green-500 hover:bg-green-700' : type === 'secondary',
            'bg-gray-500 hover:bg-gray-700' : type === 'muted',
            'is-loading': processing,
            }" :disabled="processing">
            <slot />
        </button>
    `,
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    }
}