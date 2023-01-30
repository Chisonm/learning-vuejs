export default {
    template: `
            <li>
                <label class="p-2 justify-between items-center">
                    <input type="checkbox"
                        v-model="assignment.completed" class="mr-4">
                    {{ assignment.name }}
                </label>
            </li>
            `,
    props: {
        assignment: Object
    }
}